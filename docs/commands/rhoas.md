## rhoas

RHOAS CLI

### Synopsis

Red Hat OpenShift Application Services

Manage your application services from the command line. You can manage service accounts, Kafka instances, and Service Registry instances, and connect them to your OpenShift clusters and applications.


### Examples

```
# Authenticate securely through your web browser
$ rhoas login

# Create a Kafka instance
$ rhoas kafka create --name my-kafka-instance

# Create a service account and save credentials to a JSON file
$ rhoas service-account create -o json

# Connect your Kubernetes/OpenShift cluster to a service
$ rhoas cluster connect

```

### Options

```
  -h, --help      Show help for a command
  -v, --verbose   Enable verbose mode
      --version   Show rhoas version
```

### SEE ALSO

* [rhoas cluster](rhoas_cluster.md)	 - View and perform operations on your Kubernetes or OpenShift cluster
* [rhoas completion](rhoas_completion.md)	 - Install command completion for your shell (bash, zsh, or fish)
* [rhoas kafka](rhoas_kafka.md)	 - Create, view, use, and manage your Kafka instances
* [rhoas login](rhoas_login.md)	 - Log in to RHOAS
* [rhoas logout](rhoas_logout.md)	 - Log out from RHOAS
* [rhoas service-account](rhoas_service-account.md)	 - Create, list, describe, delete, and update service accounts
* [rhoas service-registry](rhoas_service-registry.md)	 - Service Registry commands
* [rhoas status](rhoas_status.md)	 - View the status of your application services
* [rhoas whoami](rhoas_whoami.md)	 - Output the current username

