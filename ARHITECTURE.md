How you’d extend this for production use (e.g. config management, error handling, logging, CI/CD)?
Config management: storing credentials in centralized services (AWS SSM, Secrets Manager)
Error handling: using Express middlewares to catch errors, return appropriate HTTP status codes and provide helpful messages
Logging: log important events and errors to help with monitoring/debugging
CI/CD: using services like Bitbucket Pipelines or Github actions to automate builds, tests, and deployment

How you’d secure secrets and manage IAM roles?
Use AWS SSM or Secrets Manager to store production credentials
Assign minimum required permissions for the AWS resources used(in this case only s3 get object allowed)

How you’d test it in CI?
Add unit tests and have an automated process for building Docker images, running tests, and deployment
