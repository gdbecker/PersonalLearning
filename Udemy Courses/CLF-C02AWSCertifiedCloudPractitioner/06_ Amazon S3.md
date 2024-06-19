## 06_ Amazon S3

### S3 overview
- Amazon S3 is one of the main building blocks of AWS
- It's advertised as "infinitely scaling" storage
- Many websites use Amazon S3 as a backbone
- Many AWS services use S3 as an integration as well
- Use cases
  - Backup and storage
  - Disaster recovery
  - Archive
  - Hybrid cloud storage
  - Application and media hosting
  - Data lakes and Big Data analytics
  - Software delivery
  - Static website hosting
- Buckets
  - Allows people to store objects (files) in "buckets" (directories)
  - Buckets must have a globally unique name (across all regions all accounts)
  - Buckets are defined at the region level
  - S3 looks like a global service but buckets are created in a region
  - Naming convention
    - No uppercase, no underscore
    - 3-63 characters long
    - Not an IP
    - Must start with lowercase letter or number
    - Cannot start with the prefix "xn"
    - Cannot end with the suffix "s3alias"
- Objects
  - Objects (files) have a Key
  - The key is the FULL path
    - Example: s3://my-bucket/my_file.txt
  - There's no concept of "directories" within buckets (although the UI will trick you to think otherwise)
  - Just keys with very long names that contain slashes ("/")
  - Object values are the content of the body
    - Max size: 5 TB (5000 GB)
    - If uploading more than 5 GB, must use "multi-part upload"
  - Metadata (list of text key / value pairs - system or user metadata)
  - Tags (Unicode key / value pair - up to 10) - useful for security/lifecycle
  - Version ID (if versioning is enabled)

### S3 Security: Bucket Policy
-	User-Based
  - IAM policies - which API calls should be allowed for a specific user from IAM
- Resource-Based
  - Bucket policies - bucket-wide rules from the S3 console - allows cross account
  - Object Access Control List (ACL) - finer grain (can be disabled)
  - Bucket Access Control List (ACL) - less common (can be disabled)
- Note: an IAM principal can access an S3 object if
  - The user IAM permissions ALLOW it OR the resource policy ALLOWS it AND there's no explicit DENY
- Encryption: encrypt objects in S3 using encryption keys
- Bucket Policies
  - JSON based policies
    - Resources: buckets and objects
    - Effect: ALLOW / DENY
    - Actions: Set of API to Allow or Deny
    - Principal: The account or user to apply the policy to
  - Use S3 bucket policy to
    - Grant public access to the bucket
    - Force objects to be encrypted at upload
    - Grant access to another account (Cross Account)
- Bucket settings for Block Public Access
  - These settings were created to prevent company data leaks
  - If you know your bucket should never be public, leave these on
  - Can be set at the account level

### S3 Website
- Static website hosting
  - S3 can host static websites and have them accessible on the internet
  - Website URL will be (depending on the region):
    - http://bucket-name.s3-website-aws-region.amazonaws.com
  - If you get a 403 Forbidden error, make sure the bucket policy allows public reads

### S3 Versioning
- You can version your files in S3
- It's enabled at the bucket level
- Same key overwrite will change the "version": 1, 2, 3...
- It's best practice to version your buckets
  - Protect against unintended deletes (ability to restore a version
  - Easy roll back to previous version)
- Note:
  - Any file thats not versioned prior to enabling versioning will have version "null"
  - Suspending versioning does not delete the previous versions

### S3 Replication (CRR and SRR)
- Must enable versioning in source and destination buckets
- Cross-Region Replication (CRR)
- Same-Region Replication (SRR)
- Buckets can be in different AWS accounts
- Copying is asynchronous
- Must give proper IAM permissions to S3
- Use cases:
  - CRR: compliance, lower latency access, replication across accounts
  - SRR: log aggregation, live replication between production and test accounts 

### S3 Storage Classes
- Classes available
  - Amazon S3 Standard - General Purpose
    - 99.99% availability
    - Used for frequently accessed data
    - Low latency and high throughput
    - Sustain 2 concurrent facility failures
    - Use cases
      - Big Data analytics, mobile and gaming apps, content distribution...
  - Amazon S3 Standard-Infrequent Access (IA)
    - For data that is less frequently accessed, but requires rapid access when needed
    - Lower cost than S3 Standard
    - 99.9% availability
    - Use cases: Disaster recovery, backups
  - Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
    - For data that is less frequently accessed, but requires rapid access when needed
    - Lower cost than S3 Standard
    - High durability (99.999999999%) in a single AZ; data lost when AZ is destroyed
    - 99.5% availability
    - Use cases: storing secondary backup copies of on-prem data, or data you can recreate
  - Amazon S3 Glacier Instant Retrieval
    - Low-cost object storage meant for archiving and backup
    - Pricing: price for storage and object retrieval cost
    - Millisecond retrieval, great for data accessed once per quarter
    - Min storage duration of 90 days
  - Amazon S3 Glacier Flexible Retrieval (formerly Amazon S3 Glacier)
    - Low-cost object storage meant for archiving and backup
    - Pricing: price for storage and object retrieval cost
    - Expedited (1-5 minutes), Standard (3-5 hours), Bulk (5-12 hours) - free
    - Min storage duration of 90 days
  - Amazon S3 Glacier Deep Archive - for long term storage
    - Low-cost object storage meant for archiving and backup
    - Pricing: price for storage and object retrieval cost
    - Standard (12 hours), Bulk (48 hours)
    - Min storage duration of 180 days
  - Amazon S3 Intelligent Tiering
    - Small monthly monitoring and auto-tiering fee
    - Moves objects automatically between Access Tiers based on usage
    - There are no retrieval charges in S3 Intelligent-Tiering
    - Levels
      - Frequent Access tier (automatic): default tier
      - Infrequent Access tier (automatic): objects not accessed for 30 days
      - Archive Instant Access tier (automatic): objects not accessed for 90 days
      - Archive Access tier (Optional): configurable from 90 days to 700+ days
      - Deep Archive Access tier (optional): configurable from 180 days to 700+ days
  - Can move between classes manually or using S3 Lifecycle configurations
- Durability and Availability
  - Durability
    - High durability (99.999999999%, 11 9's) of objects across multiple AZ
    - If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years
    - Same for all storage classes
  - Availability
    - Measures how readily available a service is
    - Depends on storage class
    - Example: S3 Standard as 99.99% availability = not available 53 minutes a year

### S3 Encryption
- Server-Side Encryption (default)
  - Server encrypts the file after receiving it
- Client-Side Encryption
  - User encrypts the file before uploading it

### IAM Access Analyzer for S3
- Ensures that only intended people have access to your S3 buckets
- Example: publicly accessible bucket, bucket shared with other AWS accounts...
- Evaluates S3 Bucket Policies, S3 ACLs, S3 Access Point Policies
- Powered by IAM Access Analyzer

### Shared Responsibility Model for S3
- AWS
  - Infrastructure (global security, durability, availability, sustain concurrent loss of data in two facilities)
  - Configuration and vulnerability analysis
  - Compliance validation
- You
  - S3 versioning
  - S3 bucket policies
  - S3 replication setup
  - Logging and monitoring
  - S3 storage classes
  - Data encryption at rest and in transit

### AWS Snow Family overview
- Highly secure, portable devices to collect and process data at the edge, and migrate data into and out of AWS
- Data migration:
  - Snowcone
  - Snowball Edge
  - Snowmobile
- Edge computing:
  - Snowcone
  - Snowball Edge
- Data migrations with AWS Snow Family
  - Migration challenges in general:
    - Limited connectivity
    - Limited bandwidth
    - High network cost
    - Shared bandwidth (can't maximize the line)
    - Connection stability
  - AWS Snow Family: offline devices to perform data migrations
    - They send you a physical device to load data and you mail it back to AWS
    - If it takes more than a week to transfer over the network, use Snowball devices!
- Usage process for data migration
  - Request Snowball devices from the AWS Console for delivery
  - Install the Snowball client / AWS OpsHub on your servers
  - Connect the Snowball to your servers and copy files using the client
  - Ship back the device when you're done (goes to the right AWS facility)
  - Data will be loaded into an S3 bucket
  - Snowball is completely wiped
- What is Edge Computing?
  - Process data while it's being created on an edge location
    - A truck on the road, ship on the sea, a mining station underground
  - These locations may have:
    - Limited/no internet access
    - Limited/no easy access to computing power
  - We set up a Snowball Edge / Snowcone device to do edge computing
  - Use cases of Edge Computing
    - Preprocess data
    - Machine Learning at the edge
    - Transcoding media streams
  - Eventually (if need be) we can ship the device back to AWS (data transfers for example)
- 

### AWS Snowball Edge (for data transfers)
- Physical data transport solution: move TBs or PBs of data in or out of AWS
- Alternative to moving data over the network (and paying network fees)
- Pay per data transfer job
- Provide block storage and Amazon S3-compatible object storage
- Snowball Edge Storage Optimized
  - 80 TB of HDD or 210 TB NVMe capacity for block volume and S3 compatible object storage
- Snowball Edge Compute Optimized
  - 42 TB of HDD or 28 TB NVMs capacity for block volume and S3 compatible object storage
- Use cases: large data cloud migrations, DC decommission, disaster recovery

### AWS Snowcone and Snowcone SSD
- Small, portable computing anywhere, rugged and secure, withstands harsh environments
- Light (4.5lb, 2.1kg)
- Device used for edge computing, storage, and data transfer
- Snowcone - 8 TB of HDD storage
- Snowcone SSD - 14 TB of SSD storage
- Use Snowcone where Snowball does not fit (space-constrained environment)
- Must provide your own battery/cables
- Can be sent back to AWS offline, or connect it to the internet and use AWS DataSync to send data

### AWS Snowmobile
- It's an actual truck!
- Transfer exabytes of data (1 EB = 1,000 PB = 1,000,000 TB)
- Each snowmobile has 100 PB of capacity (use multiple in parallel)
- High security: temperature controlled, GPS, 24/7 video surveillance
- Better than snowball if you transfer more than 10 PB

### Snow Family: Edge Computing
- Snowcone and Snowcone SSD (smaller)
  - 2 CPUs, 4 GB of memory, wired or wireless access
  - USB-C power using a cord or the optional battery
- Snowball Edge - Compute Optimized
  - 104 vCPUs, 416 GiB of RAM
  - Optional GPU (useful for video processing or ML)
  - 28 TB NVMe or 42 TB HDD usable storage
  - Storage clustering available (up to 16 nodes)
- Snowball Edge - Storage Optimized
  - Up to 40 vCPUs, 80 GiB of RAM, 80 TB storage
  - Up to 104 vCPUs, 416 GiB of RAM, 210 TB NVMe storage
- All: can run EC2 instances and AWS Lambda functions (using AWS IoT Greengrass)
- Long-term deployment options: 1 and 3 years discounted pricing

### AWS OpsHub
- Historically, to use Snow Family devices, you needed a CLI (command line interface tool)
- Today, you can use the AWS OpsHub (a software app you install on your computer/laptop) to manage your Snow Family device
  - Unlocking and configuring single or clustered devices 
  - Transferring files
  - Launching and managing instances running on Snow Family devices
  - Monitor device metrics (storage capacity, active instances on your device)
  - Launch compatible AWS services on your devices (ex: Amazon EC2 instances, AWS DataSync, Network File System (NFS))

### Snowball Edge Pricing
- You pay for device usage and data transfer out of AWS
- Data transfer IN Amazon S3 is $0.00 per GB
- On-Demand
  - Includes a one-time service fee per job, which includes:
    - 10 days of usage for Snowball Edge Storage Optimized 80 TB
    - 15 days of usage for Snowball Edge Storage Optimized 210 TB
  - Shipping days are NOT counted towards the included 10 or 15 days
  - Pay per day for any additional days
- Committed upfront
  - Pay in advance for monthly, 1-year, and 3-years of usage (Edge Computing)
  - Up to 62% discounted pricing

### Storage Gateway overview
- AWS is pushing for "hybrid cloud"
  - Part of your infrastructure is on-prem
  - Part of your infrastructure is on the cloud
- This can be due to:
  - Long cloud migrations
  - Security requirements
  - Compliance requirements
  - IT strategy
- S3 is a proprietary storage technology (unlike EFS/NFS), so how do you expose the S3 data on-prem?
- Use AWS Storage Gateway!
- AWS Storage Cloud Native options
  - Block
    - Amazon S3
    - EC2 Instance Store
  - File
    - Amazon EFS
  - Object
    - Amazon S3
    - Glacier
- AWS Storage Gateway
  - Bridge between on-prem data and cloud data in S3
  - Hybrid storage service to allow on-premises to seamlessly use the AWS cloud
  - Use cases: disaster recovery, backup and restore, tiered storage
  - Types of Storage Gateways:
    - File Gateway
    - Volume Gateway
    - Tape Gateway
  - No need to know the types for this exam

### Summary
- Buckets vs Objects: global unique name, tied to a region
- S3 Security: IAM policy, S3 bucket policy (public access), S3 encryption
- S3 websites: host a static website on Amazon S3
- S3 versioning: multiple versions for files, prevent accidental deletes
- S3 replication: same-region or cross-region, must enable versioning
- S3 storage classes: Standard, IA, AZ-IA, Intelligent, Glacier (Instant, Flexible, Deep)
- Snow Family: import data onto S3 through a physical device, edge computing
- OpsHub: desktop app to manage Snow Family devices
- Storage Gateway: hybrid solution to extend on-prem storage to S3