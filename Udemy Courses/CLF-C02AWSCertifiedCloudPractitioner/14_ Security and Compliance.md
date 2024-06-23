## 14_ Security and Compliance

### Shared Responsibility Model
- AWS responsibility - security of the cloud
  - Protecting infrastructure (hardware, software, facilities, and networking) that runs all the AWS services
  - Managed services like S3, DynamoDB, RDS, etc
- Customer responsibility - security in the cloud
  - For EC2 instances, customer is responsible for management of the guest OS (including security patches and updates), firewall and network configuration, IAM
  - Encrypting application data
- Shared controls:
  - Patch management, configuration management, awareness and training
- Example: RDS
  - AWS responsibility:
    - Manage the underlying EC2 instance, disable SSH access
    - Automated DB patching
    - Automated OS patching
    - Audit the underlying instance and disks, and guarantee it functions
  - Your responsibility:
    - Check the ports/IP/security group inbound rules in DB's security group
    - In-database user creation and permissions
    - Creating a database with or without public access
    - Ensure parameter groups or DB is configured to only allow SSL connections
    - Database encryption setting

### DDoS Protection: WAF and Shield
- What is a DDoS attack?
  - Distributed Denial of Service attack
- DDoS protection on AWS
  - AWS Shield Standard: protects against DDoS attacks for your website and apps, for all customers at no additional costs
  - AWS Shield Advanced: 24/7 premium DDoS protection
  - AWS WAF: filter specific requests based on rules
  - CloudFront and Route 53:
    - Availability protection using global edge network
    - Combined with AWS Shield, provides attack mitigation at the edge
  - Be ready to scale - leverage AWS Auto Scaling
- AWS Shield
  - AWS Shield Standard
    - Free service that's activated for every AWS customer
    - Provides protection from attacks such as SYN/UDP floods, reflection attacks and other layer 3/layer 4 attacks
  - AWS Shield Advanced
    - Optional DDoS mitigation service ($3000 per month per organization)
    - Protect against more sophisticated attack on Amazon EC2, Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53
    - 24/7 access to AWS DDoS response (DRP)
    - Protect against higher fees during usage spikes due to DDoS
- AWS WAF - Web Application Firewall
  - Protects your web apps from common web exploits (Layer 7)
  - Layer 7 is HTTP (vs Layer 4 is TCP)
  - Deploy on Application Load Balancer, API Gateway, CloudFront
  - Define Web ACL (Web Access Control List):
    - Rules can include IP addresses, HTTP headers, HTTP body, or URI strings
    - Protects from common attack - SQL injection and Cross-Site Scripting (XSS)
    - Size constraints, geo-match (block countries)
    - Rate-based rules (to count occurrences of events) - for DDoS protection

### AWS Network Firewall
- Protect your entire Amazon VPC
- From Layer 3 to Layer 7 protection
- Any direction you can inspect
  - VPC to VPC traffic
  - Outbound to internet
  - Inbound from internet
  - To/from Direct Connect and Site-to-Site VPN

### AWS Firewall Manager
- Manage security rules in all accounts of an AWS organization
- Security policy: common set of security rules
  - VPC Security Groups for EC2, Load Balancer, etc
  - WAF rules
  - AWS Shield Advanced
  - AWS Network Firewall
- Rules are applied to new resources as they are crated (good for compliance) across all and future accounts in your organization

### Penetration Testing
- AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services:
  - Amazon EC2 instances, NAT Gateways, and Elastic Load Balancer
  - Amazon RDS
  - Amazon CloudFront
  - Amazon Aurora
  - Amazon API Gateways
  - AWS Lambda and Lambda Edge functions
  - Amazon Lightsail resources
  - Amazon Elastic Beanstalk environments
- List can increase over time (you won't be tested on that at this exam)
- Penetration testing on your AWS Cloud
  - Prohibited activities
    - DNS zone walking via Amazon Route 53 Hosted Zones
    - Denial of Service (DoS), Distributed Denial of Service (DDoS), Simulated DoS, Simulated DDoS
    - Port flooding
    - Protocol flooding
    - Request flooding (login request flooding, API request flooding)

### Encryption with KMS and CloudHSM
- Data at rest vs Data in transit
  - At rest: data stored or archived on a device
    - On a hard disk, on a RDS instance, in S3 Glacier Deep Archive, etc
  - In transit (in motion): data being moved from one location to another
    - Transfer from on-prem to AWS, EC2 to DynamoDB, etc
    - Means data transferred on the network
  - We want to encrypt data in both states to protect it!
  - For this we leverage encryption keys
- AWS KMS (Key Management Service)
  - Anytime you hear "encryption" for an AWS service, it's most likely KMS
  - KMS = AWS manages the encryption keys for us
  - Encryption opt-in:
    - EBS volumes: encrypt volumes
    - S3 buckets: server-side encryption of objects
    - Redshift database encryption of data
    - RDS database: encryption of data
    - EFS drives: encryption of data
  - Encryption automatically enabled:
    - CloudTrail Logs
    - S3 Glacier
    - Storage Gateway
- CloudHSM
  - KMS -> AWS manages the software for encryption
  - CloudHSM -> AWS provisions encryption hardware
  - Dedicated Hardware (HSM = Hardware Security Module)
  - You manage your own encryption keys entirely (not AWS)
  - HSM device is tamper resistent, FIPS 140-2 Level 3 compliance
- Types of KMS Keys
  - Customer Managed Key
    - Create, manage, and used by the customer, can enable or disable
    - Possibility of rotation policy (new key generated every year, old key preserved)
    - Possibility of bring-your-own key
  - AWS Managed Key
    - Created, managed, and used on the customer's behalf by AWS
    - Used by AWS services (AWS/S3, AWS/EBS, AWS/Redshift)
  - AWS Owned Key
    - Collection of CMKs that an AWS service owns and manages to use in multiple accounts
    - AWS can use those to protect resources in your account (but you can't view the keys)
  - CloudHSM Keys (custom keystore)
    - Keys generated from your own CloudHSM hardware device
    - Cryptographic operations are performed within the CloudHSM cluster

### AWS Certificate Manager (ACM)
- Let's you easily provision, manage, and deploy SSL/TLS certificates
- Used to provide in-flight encryption for websites (HTTPS)
- Supports both public and private TLS certificates
- Free of charge for public TLS certificates
- Automatic TLS certificate renewal
- Integrations with (load TLS certificates on)
  - Elastic Load Balancers
  - CloudFront Distributions
  - APIs on API Gateway
- Exam: in-flight certificates -> think ACM

### Secrets Manager
- Newer service, meant for storing secrets
- Capability to force rotation of secrets every X days
- Automate generation of secrets on rotation (uses Lambda)
- Integration with Amazon RDS (MySQL, PostgreSQL, Aurora)
- Secrets are encrypted using KMS
- Mostly meant for RDS integration

### Artifact
- Not really a service
- Portal that provides customers with on-demand access to AWS compliance documentation and AWS agreements
- Artifact Reports
  - Allows you to download AWS security and compliance documents from third-party auditors, like AWS ISO certifications, Payment Card Industry(PCI), and System and Organization Control (SOC) reports
- Artifact Agreements
  - Allows you to review, accept, and track the status of AWS agreements such as the Business Associate Addendum (BAA) or the Health Insurance Portability and Accountability Act (HIPAA) for an individual account or in your organization
- Can be used to support internal audit or compliance

### GuardDuty
- Intelligent Threat discovery to protect your AWS account
- Uses ML algorithms, anomaly detection, third-party data
- One click to enable (30 days trial), no need to install software
- Input data includes
  - CloudTrail Events Logs - unusual API calls, unauthorized deployments
    - CloudTrail Management Events - create VPC subnet, create trail
    - CloudTrail S3 Data Events - get object, list objects, delete object
  - VPC Flow Logs - unusual internal traffic, unusual IP address
  - DNS Logs - compromised EC2 instances sending encoded data within DNS queries
  - Optional features - EKS Audit Logs, RDS and Aurora, EBS, Lambda, S3 Data Events...
- Can setup EventBridge rules to be notified in case of findings
- EventBridge rules can target AWS Lambda or SNS
- Can protect against CryptoCurrency attacks (has a dedicated "finding" for it)

### Inspector
- Automated security assessments
- For EC2 instances
  - Leveraging the AWS System Manager (SSM) agent
  - Analyze against unintended network accessibility
  - Analyze the running OS against known vulnerabilities
- For Container Images push to Amazon ECR
  - Assessment of Container Images as they are pushed
- For Lambda functions
  - Identifies software vulnerabilities in function code and package dependencies
  - Assessment of functions as they are deployed
- Reporting and integration with AWS Security Hub
- Send findings to Amazon EventBridge
- What does Amazon Inspector evaluate?
  - Remember: only for EC2 instances, Container Images and Lambda functions
  - Continuous scanning of the infrastructure, only when needed
  - Package vulnerabilities (EC2, ECR, and Lambda) - database of CVE
  - Network reachability (EC2)
  - A risk score is associated with all vulnerabilities for prioritization

### Config
- Helps with auditing and recording compliance of your AWS resources
- Helps record configurations and changes over time
- Possibility of storing the configuration data into S3 (analyzed by Athena)
- Questions that can be solved be AWS Config:
  - Is there unrestricted SSH to my security groups?
  - Do my buckets have any public access?
  - How has my ALB configuration changed over time?
- You can receive alerts (SNS notifications) for any changes
- AWS Config is a per-region service
- Can be aggregated across regions and accounts
- AWS Config Resource
  - View compliance of a resource over time
  - View configuration of a resource over time
  - View CloudTrail API calls if enabled

### Macie
- Amazon Macie is a fully managed data security and data privacy service that uses ML and pattern matching to discover and protect your sensitive data in AWS
- Macie helps identify and alert you to sensitive data, such as personally identifiable information (PII)

### Security Hub
- Central security tool to manage security across several AWS accounts and automate security checks
- Integrated dashboards showing current security and compliance status to quickly take actions
- Automatically aggregates alerts in predefined or personal finds formats from various AWS services and AWS partner tools
  - Config
  - GuardDuty
  - Inspector
  - Macie
  - IAM Access Analyzer
  - AWS Systems Manager
  - AWS Firewall Manager
  - AWS Health
  - AWS Partner Network Solutions
- Must first enable the AWS Config Service

### Amazon Detective
- GuardDuty, Macie, and Security Hub are used to identify potential security issues, or findings
- Sometimes security findings require deeper analysis to isolate the root cause and take action - it's a complex process
- Amazon Detective analyzes, investigates, and quickly identifies the root cause of security issues or suspicious activities (using ML and graphs)
- Automatically collects and processes events from VPC Flow Logs, CloudTrail, GuardDuty, and create a unified view
- Produces visualizations with details and context to get to the root cause

### AWS Abuse
- Report suspected AWS resources used to abusive or illegal purposes
- Abusive and prohibited behaviors are:
  - Spam - receiving undesired emails form AWS-owned IP addresses, websites, and forums spammed by AWS resources
  - Port scanning - sending packets to your ports to discover the unsecured ones
  - DoS or DDoS attacks - AWS-owned P addresses attempting to overwhelm or crash your servers/software
  - Intrusion attempts - logging in on your resources
  - Hosting objectionable or copyrighted content - distributing illegal or copyrighted content without consent
  - Distributing malware - AWS resources distributing softwares to harm computers or machines
- Contact the AWS Abuse team: abuse@amazonaws.com

### Root User Privileges
- Root user = Account Owner (created when the account is created)
- Has complete access to all AWS services and resources
- Lock away your AWS account root user access keys!
- Do not use the root account for everyday tasks, event admin tasks
- Actions that can be performed only by the root user:
  - Change account settings (account name, email address, root user password, root user access keys)
  - View certain tax invoices
  - Close your AWS account
  - Restore IAM user permissions
  - Change or cancel your AWS Support plan
  - Register as a seller in the Reserved Instance Marketplace
  - Configure an Amazon S3 bucket to enable MFA
  - Edit/delete an Amazon S3 bucket policy that includes an invalid VPC ID or VPC endpoint ID
  - Sign up for GovCloud

### IAM Access Analyzer
- Find out which resources are shared externally
  - S3 buckets
  - IAM roles
  - KMS keys
  - Lambda functions and layers
  - SQS queues
  - Secrets Manager secrets
- Define Zone of Trust = AWS account or AWS organization
- Access outside zone of trusts -> findings

### Summary
- Shared Responsibility on AWS
- Shield: Automatic DDoS protection + 24/7 support for advanced
- WAF: firewall to filter incoming requests based on rules
- KMS: encryption keys managed by AWS
- CloudHSM: hardware encryption, we manage encryption keys
- AWS Certificate Manager: provision, manage, and deploy SSL/TSL certificates
- Artifact: get access to compliance reports such as PCI, ISO, etc
- GuardDuty: find malicious behavior with VPC, DNS, and CloudTrail Logs
- Inspector: find software vulnerabilities in EC2, ECR Images, and Lambda functions
- Network Firewall: protect VPC against network attacks
- Config: track config changes and compliance against rules
- Macie: find sensitive data (such as PII data) in Amazon S3 buckets
- CloudTrail: track API calls made by users within account
- AWS Security Hub: gather security findings from multiple AWS accounts
- Amazon Detective: find the root cause of security issues or suspicious activities
- AWS Abuse: report AWS resources used for abusive or illegal purposes
- Root User privileges:
  - Change account settings
  - Close your AWS account
  - Change/cancel your AWS Support plan
  - Register as a seller in the Reserved Instance Marketplace
- IAM Access Analyzer: identify which resources are shared externally
- Firewall Manager: manage security rules across an organization (WAF, Shield...)