## 18_ Other Services

### WorkSpaces
- Managed Desktop as a Service (DaaS) solution to easily provision Windows or Linux desktops
- Great to eliminate manage of on-prem VDI (Virtual Desktop Infrastructure)
- Fast and quickly scalable to thousands of users
- Secured data - integrates with KMS
- Pay-as-you-go service with monthly or hourly rates

### AppStream 2.0
- Desktop Application Streaming Service
- Deliver to any computer, without acquiring or provisioning infrastructure 
- The application is delivered from within a web browser
- vs. WorkSpaces
  - WorkSpaces
    - Fully managed VDI and desktop available
    - The users connect to the VDI and open native or WAM applications
    - WorkSpaces are on-demand or always on
  - AppStream 2.0
    - Stream a desktop app to web browsers (no need to connect to a VDI)
    - Works with any device (that has a web browser)
    - Allow to configure an instance type per application type (CPU, RAM, GPU)

### IoT Core
- IoT stands for "Internet of Things" = the network of internet-connected devices that are able to collect and transfer data
- AWS IoT Core allows you to easily connect IoT devices to the AWS Cloud
- Serverless, secure, and scalable to billions of devices and trillions of messages
- Your apps can communicate with your devices even when they aren't connected
- Integrates with a lot of AWS services (Lambda, S3, SageMaker, etc)
- Build IoT apps that gather, process, analyze, and act on data

### AppSync
- Store and sync data across mobile and web apps in real-time
- Makes use of GraphQL (mobile technology from Facebook)
- Client Code can be generated automatically
- Integrations with DynamoDB/Lambda
- real-time subscriptions
- Offline data synchronization (replaces Cognito Sync)
- Fine Grained Security
- AWS Amplify can leverage AWS AppSync in the background!

### Amplify
- A set of tools and services that help you develop and deploy scalable, full-stack web and mobile apps
- Authentication, Storage, API (REST, GraphQL), CI/CD, PubSub, Analytics, AI/ML Predictions, Monitoring, Source Code from AWS, GitHub, etc

### AWS Application Composer
- Visually design and build serverless apps quickly on AWS
- Deploy AWS infrastructure code without needing to be an expert in AWS
- Configure how your resources interact with each other
- Generates Infrastructure as Code (IaC) using CloudFormation
- Ability to import existing CloudFormation/SAM templates to visualize them 

### Device Farm
- Fully managed service that tests your web and mobile apps against desktop browsers, real mobile devices, and tablets
- Run tests concurrently on multiple devices (speed up execution)
- Ability to configure device settings (GPS, language, Wi-Fi, Bluetooth...)

### AWS Backup
- Fully managed service to centrally manage and automate backups across AWS services
- On-demand and scheduled backups
- Supports PITR (Point-in-Time Recovery)
- Retention Periods, Lifecycle Management, BAckup Policies...
- Cross-Region Backup
- Cross-Account Backup (using AWS Organizations)

### Disaster Recover Strategies
- Cheapest option: Backup and Restore
- Pilot Light
  - Run core functions of the app
  - Ready to scale, but minimal setup
- Warm Standby
  - Full version of the app but at minimum size
- Multi-Site / Hot-Site (most expensive)
  - Full version of the app ready to go, at full size

### AWS Elastic Disaster Recovery (DRS)
- Used to be named "CloudEndure Disaster Recovery"
- Quickly and easily recover your physical, virtual and cloud-based servers into AWS
- Ex: protect your most critical databases (including Oracle, MySQL, and SQL Server), enterprise apps (SAP), protect your data from ransomware attacks
- Continuous block-level replication for your servers

### AWS DataSync
- Move large amount of data from on-prem to AWS
- Can synchronize to:
  - Amazon S3 (any storage classes - including Glacier)
  - Amazon EFS
  - Amazon FSx for Windows
- Replication tasks can be scheduled hourly, daily, weekly
- The replication tasks are incremental after the first full load
  - "Incremental" is hint that the answer is DataSync

### Cloud Migration Strategies - the 7Rs
- Retire
  - Turn off things you don't need (maybe as a result of re-architecting)
  - Helps with reducing the surface areas for attacks (more security)
  - Save cost, maybe up to 10% to 20%
  - Focus your attention on resources that must be maintained
- Retain
  - Do nothing for now (it's still a decision to make in a Cloud Migration)
  - Security, data compliance, performance, unresolved dependencies
  - No business value to migrate, mainframe or mid-range and non-x86 Unix apps
- Relocate
  - Move apps from on-prem to its Cloud version
  - Move EC2 instances to a different VPC, AWS account or AWS Region
- Rehost: "lift and shift"
  - Simple migrations by re-hosting on AWS (apps, databases, data...)
  - Migrate machines (physical, virtual, another Cloud) to AWS Cloud
  - No cloud optimizations being done, apps are migrated as is
  - Could save as much as 30% on cost
  - Ex: migrate using AWS Application Migration Service
- Replatform: "lift and reshape"
  - Ex: migrate your database to RDS
  - Ex: migrate your app to Elastic Beanstalk
  - Not changing the core architecture, but leverage some Cloud optimizations
  - Save time and money by moving to a full managed server or Serverless
- Repurchase: "drop and shop"
  - Moving to a different product while moving to the Cloud
  - Often you move to a SaaS platform
  - Expensive in the short term, but quick to deploy
  - Ex: CRM to Salesforce, HR to Workday, CMS to Drupal
- Refactor/Re-architect
  - Re-imagining how the app is architected using Cloud Native features
  - Driven by the need of the business to add features and improve scalability, performance, security and agility
  - Move from a monolithic app to micro-services
  - Ex: move an app to Serverless architecture, use AWS S3

### Application Discovery Service and Application Migration Service
- Plan migration projects by gathering info about on-prem data centers
- Server utilization data and dependency mapping are important for migrations
- Agentless Discovery (AWS Agentless Discovery Connector)
  - VM inventory, configuration, and performance history such as CPU, memory, and disk usage
- Agent-based Discovery (AWS Application Discovery Agent)
  - System configuration, system performance, running processes, and details of the network connections between systems
- Resulting data can be viewed within AWS Migration Hub
- AWS Application Migration Service (MGN)
  - This is the "AWS evolution" of CloudEndure Migration, replacing AWS Server Migration Service (SMS)
  - Life and shift (rehost) solution which simplifies migrating apps to AWS
  - Converts your physical, virtual, and cloud-based servers to run natively on AWS
  - Supports a wide range of platforms, OS, and databases
  - Minimal downtime, reduced costs

### AWS Migration Evaluator
- Helps you build a data-driven business case for migration to AWS
- Provides a clear baseline of what your organization is running today
- Install Agentless Collector to conduct broad-based discovery
- Take a snapshot of on-prem foot-print, server dependencies...
- Analyze current state, define target state, then develop migration plan

### AWS Migration Hub
- Central location to collect servers and apps inventory data for the assessment, planning, and tracking of migrations to AWS
- Helps accelerate your migration to AWS, automate lift and shift
- AWS Migration Hub Orchestrator
  - Provides pre-built templates to save time and effort migrating enterprise apps (such as SAP, Microsoft SQL Server)
  - Supports migrations status updates from Application Migration Service (MGN) and Database Migration Service (DMS) 

### AWS Fault Injection Simulator (FIS)
- A fully managed service for running fault injection experiments on AWS workloads
- Based on Chaos Engineering -> stressing an app by creating disruptive events (such a sudden increase in CPU or memory), observing how the system responds, and implementing improvements
- Helps you uncover hidden bugs and performance bottlenecks
- Supports the following AWS services: EC2, ECS, EKS, RDS
- Use pre-built templates that generate the desired disruptions

### Step Functions
- Build serverless visual workflow to orchestrate your Lambda functions
- Features
  - Sequence
  - Parallel
  - Conditions
  - Timeouts
  - Error handling
- Can integrate with EC2, ECS, on-prem servers, API Gateway, SQS queues
- Possibility of implementing human approval feature
- Use cases
  - Order fulfillment
  - Data processing
  - Web apps
  - Any workflow

### Ground Station
- Fully managed service that lets you control satellite communications, process data, and scale your satellite operations
- Provides a global network of satellite ground stations near AWS regions
- Allows you to download satellite data to your AWS VPC within seconds
- Send satellite data to S3 or EC2 instance
- Use cases
  - Weather forecasting
  - Surface imaging
  - Communications
  - Video broadcasts

### AWS Pinpoint
- Scalable 2-way (outbound/inbound) marketing communications service
- Supports email, SMS, push, voice, and in-app messaging
- Ability to segment and personalize messages with the right content to customers
- Possibility to receive replies
- Scales to billions of messages per day
- Use cases
  - Run campaigns by sending marketing, bulk, transactional SMS messages
- Vs Amazon SNS or Amazon SES
  - In SNS and SES, you managed each messages' audience, content, and delivery schedule
  - Pinpoint is the next evolution
  - Pinpoint lets you create message templates, delivery schedules, highly-targeted segments, and full campaigns