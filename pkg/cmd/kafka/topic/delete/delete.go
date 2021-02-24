package delete

import (
	"context"
	"errors"
	"fmt"

	"github.com/bf2fc6cc711aee1a0c2a/cli/internal/localizer"

	"github.com/AlecAivazis/survey/v2"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/cmdutil"

	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/api/kas"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/iostreams"

	"github.com/bf2fc6cc711aee1a0c2a/cli/internal/config"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/cmd/factory"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/connection"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/logging"

	"github.com/spf13/cobra"
)

type Options struct {
	topicName string
	kafkaID   string
	force     bool

	IO         *iostreams.IOStreams
	Config     config.IConfig
	Connection func() (connection.Connection, error)
	Logger     func() (logging.Logger, error)
}

// NewDeleteTopicCommand gets a new command for deleting a kafka topic.
func NewDeleteTopicCommand(f *factory.Factory) *cobra.Command {
	opts := &Options{
		Connection: f.Connection,
		Config:     f.Config,
		Logger:     f.Logger,
		IO:         f.IOStreams,
	}

	cmd := &cobra.Command{
		Use:     localizer.MustLocalizeFromID("kafka.topic.delete.cmd.use"),
		Short:   localizer.MustLocalizeFromID("kafka.topic.delete.cmd.shortDescription"),
		Long:    localizer.MustLocalizeFromID("kafka.topic.delete.cmd.longDescription"),
		Example: localizer.MustLocalizeFromID("kafka.topic.delete.cmd.example"),
		Args:    cobra.ExactArgs(1),
		// Dynamic completion of the topic name
		ValidArgsFunction: func(cmd *cobra.Command, args []string, toComplete string) ([]string, cobra.ShellCompDirective) {
			validNames := []string{}

			cfg, err := opts.Config.Load()
			if err != nil {
				return validNames, cobra.ShellCompDirectiveError
			}

			if !cfg.HasKafka() {
				return validNames, cobra.ShellCompDirectiveError
			}

			opts.kafkaID = cfg.Services.Kafka.ClusterID

			return cmdutil.FilterValidTopicNameArgs(f, opts.kafkaID, toComplete)
		},
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			if !opts.IO.CanPrompt() && !opts.force {
				return fmt.Errorf(localizer.MustLocalize(&localizer.Config{
					MessageID: "flag.error.requiredWhenNonInteractive",
					TemplateData: map[string]interface{}{
						"Flag": "force",
					},
				}))
			}

			if len(args) > 0 {
				opts.topicName = args[0]
			}

			if opts.kafkaID != "" {
				return runCmd(opts)
			}

			cfg, err := opts.Config.Load()
			if err != nil {
				return err
			}

			if !cfg.HasKafka() {
				return fmt.Errorf(localizer.MustLocalizeFromID("kafka.topic.common.error.noKafkaSelected"))
			}

			opts.kafkaID = cfg.Services.Kafka.ClusterID

			return runCmd(opts)
		},
	}

	cmd.Flags().BoolVarP(&opts.force, "force", "f", false, localizer.MustLocalizeFromID("kafka.topic.delete.flag.force.description"))

	return cmd
}

func runCmd(opts *Options) error {
	conn, err := opts.Connection()
	if err != nil {
		return err
	}

	logger, err := opts.Logger()
	if err != nil {
		return err
	}

	api := conn.API()
	ctx := context.Background()

	// check if the Kafka instance exists
	kafkaInstance, _, apiErr := api.Kafka().GetKafkaById(ctx, opts.kafkaID).Execute()
	if kas.IsErr(apiErr, kas.ErrorNotFound) {
		return errors.New(localizer.MustLocalize(&localizer.Config{
			MessageID: "kafka.common.error.notFoundErrorById",
			TemplateData: map[string]interface{}{
				"ID": opts.kafkaID,
			},
		}))
	} else if apiErr.Error() != "" {
		return apiErr
	}

	if !opts.force {
		var promptConfirmName = &survey.Input{
			Message: localizer.MustLocalizeFromID("kafka.topic.delete.input.name.message"),
		}
		var userConfirmedName string
		if err := survey.AskOne(promptConfirmName, &userConfirmedName); err != nil {
			return err
		}

		if userConfirmedName != opts.topicName {
			logger.Info(localizer.MustLocalize(&localizer.Config{
				MessageID: "kafka.topic.delete.error.mismatchedNameConfirmation",
				TemplateData: map[string]interface{}{
					"ConfirmedName": userConfirmedName,
					"ActualName":    opts.topicName,
				},
			}))
			return nil
		}
	}

	// perform delete topic API request
	httpRes, topicErr := api.TopicAdmin(opts.kafkaID).DeleteTopic(ctx, opts.topicName).
		Execute()
	if topicErr.Error() != "" {
		switch httpRes.StatusCode {
		case 404:
			return errors.New(localizer.MustLocalize(&localizer.Config{
				MessageID: "kafka.topic.common.error.notFoundError",
				TemplateData: map[string]interface{}{
					"TopicName":    opts.topicName,
					"InstanceName": kafkaInstance.GetName(),
				},
			}))
		case 401:
			return fmt.Errorf(localizer.MustLocalize(&localizer.Config{
				MessageID: "kafka.topic.common.error.unauthorized",
				TemplateData: map[string]interface{}{
					"Operation": "delete",
				},
			}))
		case 500:
			return fmt.Errorf("%v: %w", localizer.MustLocalizeFromID("kafka.topic.common.error.internalServerError"), topicErr)
		case 503:
			return fmt.Errorf("%v: %w", localizer.MustLocalize(&localizer.Config{
				MessageID: "kafka.topic.common.error.unableToConnectToKafka",
				TemplateData: map[string]interface{}{
					"Name": kafkaInstance.GetName(),
				},
			}), topicErr)
		default:
			return topicErr
		}
	}

	logger.Info(localizer.MustLocalize(&localizer.Config{
		MessageID: "kafka.topic.delete.log.info.topicDeleted",
		TemplateData: map[string]interface{}{
			"TopicName":    opts.topicName,
			"InstanceName": kafkaInstance.GetName(),
		},
	}))

	return nil
}