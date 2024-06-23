## 08_ Other Compute Services: ECS, Lambda, Batch, Lightsail

### Docker
- Software development platform to deploy apps
- Apps are packaged into containers that can be run on any OS
- Apps run the same, regardless of where they're run
  - Any machine
  - No compatibility issues
  - Predictable behavior
  - Less work
  - Easier to maintain and deploy
  - Works with any language, any OS, any technology
- Scale containers up and down very quickly (seconds)
- Where Docker images are stored?
  - Docker images are stored in Docker repositories
  - Public: Docker Hub (https://hub.docker.com)
    - Find base images for many technologies or OS:
      - Ubuntu
      - MySQL
      - NodeJS, Java...
  - Private: Amazon ECR (Elastic Container Registry)
- Docker vs Virtual Machines
  - Docker is "sort of" of a virtualization technology, but not exactly
  - Resources are shared with the host -> many containers on one server

### ECS, Fargate, and ECR 
- ECS
  - Elastic Container Service
  - Launch Docker containers on AWS
  - You must provision and maintain the infrastructure (the EC2 instances)
  - AWS takes care of starting/stopping containers
  - Has integrations with the Application Load Balancer
- Fargate
  - Launch Docker containers on AWS
  - You do not provision the infrastructure (no EC2 instances to manage) - simpler!
  - Serverless offering
  - AWS just runs containers for you based on the CPU/RAM you need
- ECR
  - Elastic Container Registry
  - Private Docker Registry on AWS
  - This is where you store your Docker images so they can be run by ECS or Fargate

### Serverless
- What's serverless?
  - New paradigm in which the developers don't have to manage servers anymore
  - They just deploy code
  - They just deploy...functions!
  - Initially, serverless = FaaS (Function as a Service)
  - Serverless was pioneered by AWS Lambda but now includes anything that's managed: databases, messaging, storage, etc
  - Serverless does not mean there are no servers...it means you just don't manage/provision/see them
- So far in this course, we've seen these serverless services:
  - Amazon S3
  - DynamoDB
  - Fargate
  - Lambda

### Lambda
- Why AWS Lambda
  - Amazon EC2
    - Virtual servers in the cloud with EC2
    - Limited by RAM and CPU
    - Continuously running
    - Scaling means intervention to add/remove servers
  - Amazon Lambda
    - Virtual functions - no servers to manage!
    - Limited by time - short executions
    - Run on-demand
    - Scaling is automated
- Benefits of AWS Lambda
  - Easy pricing:
    - Pay per request and compute time
    - Free tier is generous: 1,000,000 AWS Lambda requests and 400,000 GBs of compute time
  - Integrated with the whole AWS suite of services
  - Event-driven: functions get invoked by AWS when needed
  - Integrated with many programming languages
  - Easy monitoring through AWS CloudWatch
  - Easy to get more resources per function (up to 10GB of RAM!)
  - Increasing RAM will also improve CPU and network!
- AWS Lambda language support
  - Node.js (JavaScript)
  - Python
  - Java (Java 8 compatible)
  - C# (.NET Core)
  - Golang
  - C# / Powershell
  - Ruby
  - Custom Runtime API (community supported, example Rust)
  - Lambda Container Image
    - The container image must implement the Lambda Runtime API
    - ECS/Fargate is preferred for running arbitrary Docker images
- AWS Lambda pricing example
  - You can find overall pricing info here: https://aws.amazon.com/lambda/pricing/
  - Pay per calls:
    - First 1,000,000 requests are free
    - $0.20 per 1 million requests after 
  - Pay per duration (in increment of 1 ms)
    - 400,000 GB-seconds of compute time per month is FREE
    - == 400,000 seconds if function is 1GB RAM
    - == 3,200,000 if function is 128 MB RAM
    - After that, $1.00 for 600,000 GB-seconds
  - It's usually very cheap to run AWS Lambda so it's very popular

### API gateway
- Example: building a serverless API
- Lambda connected to DynamoDB via CRUD methods
- Fully managed service for developers to easily create, publish, maintain, monitor, and secure APIs
- Serverless and scalable
- Supports RESTful APIs and WebSocket APIs
- Support for security, user authentication, API throttling, API keys, monitoring...

### Batch
- Fully managed batch processing at any scale
- Efficiently run 100,000s of computing batch jobs on AWS
- A "batch" job is a job with a start and an end (opposed to continuous, streaming data)
- Batch will dynamically launch EC2 instances or Spot Instances
- AWS Batch provisions the right amount of compute/memory
- You submit or schedule batch jobs and AWS Batch does the rest!
- Batch jobs are defined as Docker images and run on ECS
- Helpful for cost optimization and focusing less on the infrastructure
- Batch vs Lambda
  - Lambda:
    - Time limit (15 minutes)
    - Limited runtimes
    - Limited temporary disk space
    - Serverless
  - Batch:
    - No time limit
    - Any runtime as long as it's packaged as a Docker image
    - Rely on EBS/instance store for disk space
    - Relies on EC2 (can be managed by AWS)

### Lightsail
- Virtual servers, storage, databases, and networking
- Low and predictable pricing
- Simpler alternative to using EC2, RDS, ELB, EBS, Route 53...
- Great for people with little cloud experience!
- Can setup notifications and monitoring of your Lightsail resources
- Use cases:
  - Simple web apps (has templates for LAMP, Nginx, MEAN, Node.js...)
  - Websites (templates for WordPress, Magento, Plesk, Joomla)
  - Dev/Test environment
- Has high availability but no auto-scaling, limited AWS integrations
- Not the answer often for which AWS service to use, this is good for beginners who want experience and predictable pricing
- Good for getting up and going with AWS without knowing much about how AWS works or the underlying stuff
- Meant to be very simple

### Summary
- Docker: container technology to run apps
- ECS: run Docker containers on EC2 instances
- Fargate:
  - Run Docker containers without provisioning the infrastructure
  - Serverless offering (no EC2 instances)
  - ECR: Private Docker Images Repository
  - Batch: run batch jobs on AWS across managed EC2 instances
  - Lightsail: predictable and low pricing for simple application and DB stacks
- Lambda
  - Serverless, Function as a Service, seamless scaling, reactive
  - Billing:
    - By the time run * by the RAM provisioned
    - By the number of invocations
  - Language support: many programming languages except (arbitrary) Docker
  - Invocation time: up to 15 minutes
  - Use cases:
    - Create Thumbnails for images uploaded onto S3
    - Run a serverless cron job
  - API Gateway: expose Lambda functions at HTTP API