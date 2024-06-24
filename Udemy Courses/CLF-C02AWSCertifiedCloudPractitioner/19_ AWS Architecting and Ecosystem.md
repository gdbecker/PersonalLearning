## 19_ AWS Architecting and Ecosystem

### AWS Whitepapers Well-Architected Framework
- Well Architected Framework General Guiding Principles
  - Stop guessing your capacity needs
  - Test systems at production scale
  - Automate to make architectural experimentation easier
  - Allow for evolutionary architectures
    - Design based on changing requirements
  - Drive architectures using data
  - Improve through game days
    - Simulate apps for flash sale days
- AWS Cloud Best Practices - Design Principles
  - Scalability: vertical and horizontal
  - Disposable Resources: servers should be disposable and easily configured
  - Automation: serverless, Infrastructure as a Service, Auto Scaling...
  - Loose Coupling
    - Monolith are apps that do more and more over time, becoming bigger
    - Break it down into smaller, loosely coupled components
    - A change or failure in one component should not cascade to other components
    - Services, not servers
      - Don't just use EC2
      - Use managed services, databases, serverless, etc!
- Well Architected Framework 6 Pillars
  - All below
  - They are not something to balance or trade-offs - they are a synergy

### Pillar 1: Operational Excellence
- Includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures
- Design Principles
  - Perform operations as code - Infrastructure as Code
  - Make frequent, small, reversible changes - so that in case of any failure, you can reverse it
  - Anticipate failure
  - Learn from all operational failures
  - Use managed services - to reduce operational burden
  - Implement observability for actionable insights - performance, reliability, cost...
- Operational Excellence AWS Services
  - Prepare
    - AWS CloudFormation, AWS Config
  - Operate
    - AWS CloudFormation, AWS Config, AWS CloudTrail, Amazon CloudWatch, AWS X-Ray
  - Evolve
    - AWS CloudFormation, AWS CodeBuild, AWS CodeCommit, AWS CodeDeploy, AWS CodePipeline

### Pillar 2: Security
- Includes the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies
- Design Principles
  - Implement a strong identity foundation - centralize privilege management and reduce (or even eliminate) reliance on long-term credentials - Principle of least privilege - IAM
  - Enable traceability - integrate logs and metrics with systems to automatically respond and take action
  - Apply security at all layers - like edge network, VPC, subnet, load balancer, every instance, OS and app
  - Automate security best practices
  - Protect data in transit and at rest - encryption, tokenization, and access control
  - Keep people away from data - reduce or eliminate the need for direct access or manual processing of data
  - Prepare for security events - run incident response simulations and use tools with automation to increase your speed for detection, investigation, and recovery
- Security AWS Services
  - Identity and Access Management
    - IAM, AWS-STS, MFA Token, AWS Organizations
  - Detective Controls
    - AWS Config, AWS CloudTrail, Amazon CloudWatch
  - Infrastructure Protection
    - Amazon CloudFront, Amazon VPC, AWS Shield, AWS WAF, Amazon Inspector
  - Data Protection
    - KMS, S3, Elastic Load Balancing (ELB), Amazon EBS, Amazon RDS
  - Incident Response
    - IAM, AWS CloudFormation, Amazon CloudWatch Events

### Pillar 3: Reliability
- Ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues
- Design Principles
  - Test recovery procedures - use automation to simulate different failures or to recreate scenarios that led to failures before
  - Automatically recover from failure - anticipate and remediate failures before they occur
  - Scale horizontally to increase aggregate system availability - distribute requests across multiple, smaller resources to ensure that they don't share a common point of failure
  - Stop guess capacity - maintain the optimal level to satisfy demand without over or under provisioning -> use Auto Scaling
  - Manage change in automation - use automation to make infrastructure changes
- Reliability AWS Services
  - Foundations
    - IAM, Amazon VPC, Service Quotas, AWS Trusted Advisor
  - Change Management
    - AWS Auto Scaling, Amazon CloudWatch, AWS CloudTrail, AWS Config
  - Failure Management
    - Backups, AWS CloudFormation, S3, S3 Glacier, Route 53

### Pillar 4: Performance Efficiency
- Includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve
- Design Principles
  - Democratize advanced technologies - advance technologies become services and hence you can focus more on product development
  - Go global in minutes - easy deployment in multiple regions
  - Use serverless architectures - avoid burden of managing servers
  - Experiment more often - easy to carry out comparative testing
  - Mechanical sympathy - be aware of all AWS services
- Performance Efficiency AWS Services
  - Selection
    - AWS Auto Scaling, AWS Lambda, Amazon Elastic Block Store (EBS), Amazon S3, Amazon RDS
  - Review
    - AWS CloudFormation, AWS News Blog
  - Monitoring
    - Amazon CloudWatch, AWS Lambda
  - Tradeoffs
    - Amazon RDS, Amazon ElastiCache, AWS Snowball, Amazon CloudFront

### Pillar 5: Cost Optimization
- Includes the ability to run systems to deliver business value at the lowest price point
- Design Principles
  - Adopt a consumption mode - pay only for what you use
  - Measure overall efficiency - use CloudWatch
  - Stop spending money on data center operations - AWS does the infrastructure part and enables customers to focus on organization projects
  - Analyze and attribute expenditure - accurate identification of system usage and costs, helps measure return on investment (ROI) - make sure to use tags
  - Use managed and application level services to reduce cost of ownership - as managed services operate at cloud scale, they can offer a lower cost per transaction or service
- Cost Optimization AWS Services
  - Expenditure Awareness
    - AWS Budgets, AWS Cost and Usage Report, AWS Cost Explorer, Reserved Instance Reporting
  - Cost-Effective Resources
    - Spot Instance, Reserved Instance, S3 Glacier
  - Matching supply and demand
    - AWS Auto Scaling, AWS Lambda
  - Optimizing Over Time
    - AWS Trusted Advisor, AWS Cost and Usage Report, AWS News Blog

### Pillar 6: Sustainability
- Focuses on minimizing the environmental impacts of running cloud workloads
- Design Principles
  - Understand your impact - establish performance indicators, evaluate improvements
  - Establish sustainability goals - set long-term goals for each workload, model return on investment (ROI)
  - Maximize utilization - right size each workload to max the energy efficiency of the underlying hardware and minimize idle resources
  - Anticipate and adopt new, more efficient hardware and software offerings - and design for flexibility and adopt new technologies over time
  - Use managed services - shared services reduce the amount of infrastructure; managed services help automate sustainability best practices as moving infrequent accessed data to cold storage and adjusting compute capacity
  - Reduce downstream impact of your cloud workloads - reduce the amount of energy or resources required to use your services and reduce the need for your customers to upgrade their devices
- Sustainability AWS Services
  - EC2 Auto Scaling, Serverless offering (Lambda, Fargate)
  - Cost Explorer, AWS Graviton 2, EC2 t instances, Spot instances
  - EFS-IA, S3 Glacier, EBS Cold HDD volumes
  - S3 Lifecycle Configurations, S3 Intelligent Tiering
  - Amazon Data Lifecycle Manager
  - Read Local, Write Global: RDS Real Replicas, Aurora Global DB, DynamoDB Global Table, CloudFront

### AWS Well-Architected Tool
- Free tool to review your architectures against the 6 pillars of Well-Architected Framework and adopt architectural best practices
- How does it work?
  - Select your workload and answer questions
  - Review your answers against the 6 pillars
  - Obtain advice: get videos and documentation, generate a report, see the results in a dashboard
- https://console.aws.amazon.com/wellarchitected/

### AWS Customer Carbon Footprint Tool
- Track, measure, review and forecast the carbon emissions generated from your AWS usage
- Helps you meet your own sustainability goals

### AWS Cloud Adoption Framework (CAF)
- Helps you build and then execute a comprehensive plan for yor digital transformation through innovative use of AWS
- Created by AWS Professionals by takng advantage of AWS Best Practices and lessons learned from thousands of customers
- AWS CAF identifies specific organizational capabilities that underpin successful cloud transformations
- AWS CAF groups its capabilities in six perspectives
  - Business
    - Helps ensure that your cloud investments accelerate your digital transformation ambitions and business outcomes
  - People
    - Serves as a bridge between technology and business, accelerating the cloud journey to help organizations more rapidly evolve to a culture of continuous growth, learning, and where change becomes business-as-normal, with focus on culture, organizational structure, leadership, and workforce
  - Governance
    - Helps you orchestrate your cloud initiatives while maximizing organizational benefits and minimizing transformation-related risks
  - Platform
    - Helps you build an enterprise-grade, scalable, hybrid cloud platform; modernize existing workloads; and implement new cloud-native solutions
  - Security
    - Helps you achieve the confidentiality, integrity, and availability of your data and cloud workloads
  - Operations
    - Helps ensure that your cloud services are delivered at a level that meets the needs of your business
- AWS CAF - Transformation Domains
  - Technology - using the cloud to migrate and modernize legacy infrastructure, apps, data and analytics platforms
  - Process - digitizing, automating, and optimizing your business operations
    - Leveraging new data and analytics platforms to create actionable insights
    - Using ML to improve your customer service experience
  - Organization - re-imagining your operating model
    - Organizing your teams around products and value streams
    - Leveraging agile methods to rapidly iterate and evolve 
  - Product - re-imagining your business model by creating new value propositions (products and services) and revenue models
- AWS CAF - Transformation Phases
  - Envision - demonstrate how the cloud will accelerate business outcomes by identifying transformation opportunities and create a foundation for your digital transformation
  - Align - identify capability gaps across the 6 AWS CAF Perspectives which results in an Action Plan
  - Launch - build and deliver pilot initiatives in production and demonstrate incremental business value
  - Scale - expand pilot initiatives to the desired scale while realizing the desired business benefits

### Right Sizing
- EC2 has many instance types, but choosing the most powerful instance type isn't the best choice, because the cloud is elastic
- Right sizing is the process of matching instance types and sizing to your workload performance and capacity requirements at the lowest possible cost
- Scaling up is easy to always start small
- It's also the process of looking at deployed instances and identifying opportunities to eliminate or downsize without compromising capacity or other requirements, which results in lower costs
- It's important to Right Size...
  - Before a cloud migration
  - Continuously after the cloud onboarding process (requirements change over time)
- CloudWatch, Cost Explorer, Trusted Advisor, and 3rd party tools can help

### AWS Ecosystem
- Free resources
  - AWS Blogs: https://aws.amazon.com/blogs/aws/
  - AWS Forums (community): https://forums.aws.amazon.com/index.jspa
  - AWS Whitepapers & Guides: https://aws.amazon.com/whitepapers
  - AWS Partner Solutions (formerly Quick Starts):
https://aws.amazon.com/quickstart/
    - Automated, gold-standard deployments in the AWS Cloud
    - Build your production environment quickly with templates
    - Example: WordPress on AWS https://fwd.aws/P3yyv?did=qs_card&trk=qs_card
    - Leverages CloudFormation
  - AWS Solutions: https://aws.amazon.com/solutions/
    - Vetted Technology Solutions for the AWS Cloud
    - Example - AWS Landing Zone: secure, multi-account AWS environment
      - https://aws.amazon.com/solutions/implementations/aws-landing-zone/
      - "Replaced" by AWS Control Tower
- AWS Marketplace
  - Digital catalog with thousands of software listings from
independent software vendors (3rd party)
  - Example:
    - Custom AMI (custom OS, firewalls, technical solutions…)
    - CloudFormation templates
    - Software as a Service
    - Containers
  - If you buy through the AWS Marketplace, it goes into your AWS bill
  - You can sell your own solutions on the AWS Marketplace
- AWS Training
  - AWS Digital (online) and Classroom Training (in-person or virtual)
  - WS Private Training (for your organization)
  - Training and Certification for the U.S Government
  - Training and Certification for the Enterprise
  - AWS Academy: helps universities teach AWS
  - And your favorite online teacher… teaching you all about AWS Certifications and more!
- AWS Professional Services and Partner Network
  - The AWS Professional Services organization is a global team of experts
  - They work alongside your team and a chosen member of the APN
  - APN = AWS Partner Network
  - APN Technology Partners: providing hardware, connectivity, and software
  - APN Consulting Partners: professional services firm to help build on AWS
  - APN Training Partners: find who can help you learn AWS
  - AWS Competency Program: AWS Competencies are granted to APN Partners who have demonstrated technical proficiency and proven customer success in specialized solution areas. 
  - AWS Navigate Program: help Partners become better Partners

### AWS IQ and re:Post
- AWS IQ
  - Quickly find professional help for your AWS projects
  - Engage and pay AWS certified 3rd party experts for on-demand project work
  - Video-conferencing, contract management, secure collaboration, integrated billing
  - For customers: Submit Request -> Review Responses -> Select Expert -> Work Securely -> Pay per Milestone
  - For experts: Create Profile -> Connect with Customers -> Start a Proposal -> Work Securely -> Get Paid
- AWS re:Post
  - A community forum
  - AWS-managed Q&A service offering crows-sourced, expert-reviewed answers to your technical questions about AWS that replaces the original AWS forums
  - Part of the AWS free tier
  - Community members can earn reputation points to built up their community expert status by providing accepted answers and reviewing answers from other users
  - Questions from AWS Premium Support customers that do not a receive a response from the community are passed on to AWS Support engineers
  - AWS re:Post is not intended to be used for questions that are time-sensitive or involve any proprietary info

### AWS Knowledge Center
- Part of re:Post
- Contains the most frequent and common questions and requests

### AWS Managed Services (AMS)
- Provides infrastructure and application support on AWS
- AWS offers a team of AWS experts who manage and operate your infrastructure for security, reliability, and availability
- Helps organizations offload routine management tasks and focus on their business objectives
- Fully managed service, so AWS handles common activities such as change requests, monitoring, patch management, security, and backup services
- Implements best practices and maintains your AWS infrastructure to reduce your operational overhead and risk
- AMS business hours are 24/365