## 09_ Deployments and Managing Infrastructure at Scale

### CloudFormation
- CloudFormation is a declarative way of outlining your AWS infrastructure, for any resources (most of them are supported)
- For example, within a CloudFormation template, you can say:
  - I want a security group
  - I want two EC2 instances using this security group
  - I want an S3 bucket
  - I want a load balancer (ELB) in front of these machines
- Then CloudFormation creates those for you, in the right order, with the exact configuration that you specify
- Benefits
  - Infrastructure as code
    - No resources are manually created, which is excellent for control
    - Changes to the infrastructure are reviewed through code
  - Cost
    - Each resource within the stack is tagged with an identifier so you can easily see how much a stack costs you
    - You can estimate the costs of your resources using the CloudFormation template
    - Savings strategy: in Dev, you could automate deletion of templates at 5PM and recreated at 8AM safely
  - Productivity
    - Ability to destroy and recreate an infrastructure on the cloud on the fly
    - Automated generation of Diagram for your templates!
    - Declarative programming (no need to figure out ordering and orchestration)
  - Don't reinvent the wheel
    - Leverage existing templates on the web!
    - Leverage the documentation
  - Supports (almost) all AWS resources
    - Everything we'll see in this course is supported
    - You can use "custom resources" for resources that are no supported 

### CDK (Cloud Development Kit)
- Define your cloud infrastructure using a familiar language
  - JavaScript, TypeScript, Python, Java, and .NET
- The code is "compiled" into a CloudFormation template (JSON/YAML)
- You can therefore deploy infrastructure and application runtime code together
  - Great for Lambda functions
  - Great for Docker containers in ECS/EKS

### Beanstalk
- Typical architecture: Web App 3-tier
  - Users talk to a load balancer
  - Load balancer forwards to EC2 instances
  - EC2 instances read/write data to Amazon RDS, for example
    - Or to ElastiCache
- Developer problems on AWS
  - Managing infrastructure
  - Deploying code
  - Configuring all the databases, load balancers, etc
  - Scaling concerns
  - Most web apps have the same architecture (ALB + ASG)
  - All the developers want is for their code to run!
  - Possibly, consistently across different applications and environments
- AWS Beanstalk
  - Developer centric view of deploying an application on AWS
  - It uses all the components we've seen before: EC2, ASG, ELB, RDS, etc
  - But it's all in one view that's easy to make sense of!
  - We still have full control over the configuration
  - Beanstalk = Platform as a Service (PaaS)
  - Beanstalk is free, but you pay for the underlying instances
  - Managed service
    - Instance configuration/OS is handled by Beanstalk
    - Deployment strategy is configurable but performed by Elastic Beanstalk
    - Capacity provisioning
    - Load balancing and auto-scaling
    - Application health-monitoring and responsiveness
  - Just the application code is the responsibility of the developer
  - Three architecture models
    - Single instance development: good for dev
    - LB + ASG: great for production or pre-production web apps
    - ASG only: great for non-web apps in production (workers, etc)
  - Support for many platforms: Go, Java SE, Java with Tomcat, .NET on Windows Server with IIS, Node.js, PHP, Python, Ruby, Packer Builder, Single Container Docker, Multi-Container Docker, Preconfigured Docker
  - Health monitoring
    - Health agent pushes metrics to CloudWatch
    - Checks for app health, publishes health events
- Centered around code and environments for your code

### CodeDeploy
- We want to deploy our application automatically
- Works with EC2 instances
- Works with on-prem servers
- Hybrid service
- Servers/instances must be provisioned and configured ahead of time with the CodeDeploy Agent

### CodeCommit
- Before pushing the application code to servers, it needs to be stored somewhere
- Developers usually store code in a repository, using Git technology
- A famous offering is GitHub, AWS's competing product is CodeCommit
- CodeCommit
  - Course-control service that hosts Git-based repos
  - Makes it easy to collaborate with others on code
  - The code changes are automatically versioned
- Benefits
  - Fully managed
  - Scalable and highly available
  - Private, secured, integrated with AWS

### CodeBuild
- Code building service in the cloud (name is obvious)
- Compiles source code, run tests, and produces packages that are ready to be deployed (by CodeDeploy for example)
- Benefits
  - Fully managed, serverless
  - Continuously scalable and highly available
  - Secure
  - Pay-as-you-go pricing, only pay for the build time

### CodePipeline
- Orchestrate the different steps to have the code automatically pushed to production
  - Code -> build -> test -> provision -> deploy
  - Basis for CICD (Continuous Integration and Continuous Delivery)
- Benefits
  - Fully managed, compatible with CodeCommit, CodeBuild, CodeDeploy, Elastic Beanstalk, CloudFormation, GitHub, 3rd-party services (GitHub), and custom plugins...
  - Fast delivery and rapid updates

### CodeArtifact
- Software packages depend on each other to be build (also called code dependencies) and new ones are created
- Storing and retrieving these dependencies is called artifact management
- Traditionally, you need to set up your own artifact management system
- CodeArtifact is a secure, scalable, and cost-effective artifact management for software development
- Works with common dependency management tools such as Maven, Gradle, npm, yarn, twine, pip, and NuGet
- Developers and CodeBuild can then retrieve dependencies straight from CodeArtifact

### CodeStar
- Replaced by CodeCatalyst, starting July 2024
- Unified UI to easily manage software development activities in one place
- "Quick way" to get started to correctly set up CodeCommit, CodePipeline, CodeBuild, CodeDeploy, Elastic Beanstalk, EC2, etc...
- Can edit the code "in-the-cloud" using AWS Cloud9

### Cloud9
- Cloud IDE (integrated development environment) for writing, running, and debugging code
- "Classic" IDE (like VS Code) are downloaded onto a computer before being used
- A cloud IDE can be used within a web browser, meaning you can work on your projects from your office, home, or anywhere with internet with no setup necessary
- AWS Cloud9 also allows for code collaboration in real-time (pair programming)

### Systems Manager (SSM)
- Helps you manage your fleet of EC2 and on-premises systems at scale
- Another Hybrid AWS service
- Get operational insights about the state of your infrastructure 
- Suite of 10+ products
- Most important features are:
  - Patching automation for enhanced compliance
  - Run commands across an entire fleet of servers
  - Store parameter configuration with the SSM Parameter Store
- Works for Linux, Windows, MacOS, and Raspberry PI OS (Raspbian)
- How Systems Manager works
  - We need to install the SSM agent onto the systems we control
  - Installed by default on Amazon Linux aMI and some Ubuntu AMI
  - If an instance can't be controlled with SSM, it's probably an issue with the SSM agent!
  - Thanks to the SSM agent, we can run commands, patch and configure our servers

### SSM Session Manager
- Allows you to start a secure shell on your EC2 and on-prem servers
- No SSH access, bastion hosts, or SSH keys needed
- No port 22 needed (better security)
- Supports Linux, MacOS, and Windows
- Send session log data to S3 or CloudWatch Logs

### SSM Parameter Store
- Secure storage for configuration and secrets
- API keys, passwords, configurations...
- Serverless, scalable, durable, easy SDK
- Control access permissions using IAM
- Version tracking and encryption (optional)

### Summary
- CloudFormation: AWS only
  - Infrastructure as Code, works with almost all of AWS resources
  - Repeat across Regions and Accounts
- Beanstalk: AWS only
  - Platform as a Service (PaaS), limited to certain programming languages or Docker
  - Deploy code consistently with a known architecture. ex: ALB + EC2 + RDS
- CodeDeploy: Hybrid
  - Deploy and upgrade any application onto servers
- Systems Manager: Hybrid
  - Patch, configure and run commands at scale
- CodeCommit: store code in private git repo (version controlled)
- CodeBuild: build and test code in AWS
- CodeDeploy: deploy code onto servers
- CodePipeline: orchestration of pipeline (from code to build to deploy)
- CodeArtifact: store software packages/dependencies on AWS
- CodeStar (now called CodeCatalyst): unified view for allowing developers to do CICD and code
- Cloud9: Cloud IDE (integrated development environment) with collaboration
- AWS CDK: define your cloud infrastructure using a programming language