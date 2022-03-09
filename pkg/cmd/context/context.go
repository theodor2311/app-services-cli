package context

import (
	"github.com/redhat-developer/app-services-cli/pkg/cmd/context/create"
	"github.com/redhat-developer/app-services-cli/pkg/cmd/context/delete"
	"github.com/redhat-developer/app-services-cli/pkg/cmd/context/list"
	"github.com/redhat-developer/app-services-cli/pkg/cmd/context/status"
	"github.com/redhat-developer/app-services-cli/pkg/cmd/context/use"
	"github.com/redhat-developer/app-services-cli/pkg/shared/factory"
	"github.com/spf13/cobra"
)

// NewContextCmd creates a new command to manage service contexts
func NewContextCmd(f *factory.Factory) *cobra.Command {
	cmd := &cobra.Command{
		Use:     "context",
		Short:   f.Localizer.MustLocalize("context.cmd.shortDescription"),
		Long:    f.Localizer.MustLocalize("context.cmd.longDescription"),
		Example: f.Localizer.MustLocalize("context.cmd.example"),
		Args:    cobra.NoArgs,
	}

	cmd.AddCommand(
		use.NewUseCommand(f),
		status.NewStatusCommand(f),
		list.NewListCommand(f),
		create.NewCreateCommand(f),
		delete.NewDeleteCommand(f),
	)
	return cmd
}
