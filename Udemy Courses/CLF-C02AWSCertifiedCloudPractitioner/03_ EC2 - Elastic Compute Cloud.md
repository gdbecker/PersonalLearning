## 03_ EC2 - Elastic Compute Cloud

### AWS Budget
- Admin privileges don't give billing access by default
- You can modify it to include billing and cost management access

### EC2 basics
- EC2 is one of the most popular of AWS's offerings
- EC2 = Elastic Compute Cloud = IaaS
- It' mainly consists in the capability of:
  - Renting virtual machines (EC2)
  - Storing data on virtual devices (EBS)
  - Distributing load across machines (ELB)
  - Scaling the services using an auto-scaling group (ASG)
- Knowing EC2 is fundamental to understand how the cloud works
- EC2 sizing and config options
  - OS options: Linux, Windows, or MacOS
  - How much CPU
  - How much random access memory (RAM)
  - How much storage:
    - Network-attached (EBS and EFS)
    - Hardware (EC2 Instance Store)
  - Network card: speed of the card, Public IP address
  - Firewall rules: security group
  - Bootstrap script (configure at first launch): EC2 User Data
- EC2 User Data
  - It's possible to bootstrap out instances using an EC2 User data script
  - Bootstrapping = launching commands when a machine starts
  - That script is only run once at the instance first start
  - EC2 user data is used to automate boot tasks like:
    - Installing updates
    - Installing software
    - Downloading common files from the internet
    - Anything you can think of!
  - EC2 User Data Scripts run with the root user
- Instance types
  - Different types of EC2 are optimized for different use cases
  - AWS has the following naming convention: m5.2xlarge
    - m: instance class
    - 5: generation (AWS improves them over time)
    - 2xlarge: size within the instance class
  - General Purpose
    - Great for a diversity of workloads such as web servers or code repos
    - Balance between
      - Compute, memory, and networking
    - In the course, we will be using t2.micro which is a General Purpose EC2 instance
  - Compute Optimized
    - Great for compute-intensive tasks that require high performance processors:
      - Batch processing workloads
      - Media transcoding
      - High performance web servers
      - High performance computing (HPC)
      - Scientific modeling and machine learning
      - Dedicated gaming servers
  - Memory Optimized
    - Fast performance for workloads that process large data sets in memory
    - Use cases:
      - High performance, relational/non-relational databases
      - Distributed web scale cache stores
      - In-memory databases optimized for business intelligence (BI)
      - Applications performing real-time processing of big unstructured data
  - Storage Optimized
    - Great for storage-intensive tasks that require high, sequential read/write access to large data sets on local storage
    - Use cases:
      - High frequency online transaction processing (OLTP) systems
      - Relational and NoSQL databases
      - Cache for in-memory databases (ex: Redis)
      - Data warehousing applications
      - Distributed file systems
  - Compare EC2 instances: https://instances.vantage.sh/

### Security Groups and Classic Ports
- Security groups are the fundamental network security in AWS
- They control how traffic is allowed into or out of our EC2 instances
- Security groups only contain "allow" rules
- Security groups rules can reference by IP or by security group
- Deeper dive
  - Security groups are acting as a "firewall" on EC2 instances
  - They regulate:
    - Access to ports
    - Authorized IP ranges - IPv4 and IPv6
    - Control of inbound network (from other to the instance)
    - Control of outbound network (from the instance to other)
- Good to know
  - Can be attached to multiple instances
  - Locked down to a region/VPC combination
  - Does live "outside" of the EC2 - if traffic is blocked the EC2 instance won't see it
  - It's good to maintain one separate security group for SSH access
  - If your app is not accessible (time out), then it's a security group issue
  - If your app gives a "connection refused" error, then it's an app error or it's not launched
  - All inbound traffic is blocked by default
  - All outbound traffic is authorized by default
- Referencing other security groups
- Classic Ports to know
  - 22 = SSH (Secure Shell) - log into a Linux instance
  - 21 = FTP (File Transfer Protocol) - upload files into a file share
  - 22 = SFTP (Secure File Transfer Protocol) - upload files using SSH
  - 80 = HTTP - access unsecured websites
  - 443 = HTTPS - access secured websites
  - 3389 = RDP (Remote Desktop Protocol) - log into a Windows instance

### SSH
SSH summary table

| OS | SSH | Putty | EC2 Instance Connect |
| -------- | ------- | ------- | ------- |
| Mac | ✔ |  | ✔ | 
| Linux | ✔ |  | ✔ | 
| Windows < 10> |  | ✔ | ✔ | 
| Windows >= 10 | ✔ | ✔ | ✔ | 

- SSH troubleshooting
  - Rewatch the lecture if things don't work
  - Read the troubleshooting guide
  - Try EC2 Instance Connect

### EC2 Instance Connect and Roles
- EC2 Instance Connect is an alternative browser based way to SSH into EC2 instances

### EC2 Instances Purchasing Options
- On-Demand Instances: short workload, predictable pricing, pay by the second
  - Pay for what you use:
    - Linux or Windows: billing per second, after the first minute
    - All other OS: billing per hour
  - Has the highest cost but no upfront payment
  - No long-term commitment
  - Recommended for short-term and uninterrupted workloads, where you can't predict how the application will behave
- Reserved (1 and 3 years)
  - Reserved Instances - long workloads
  - Convertible Reserved Instances - long workloads with flexible instances
  - Up to 72% discount compared to On-Demand
  - You reserve a specific instance attribute (Instance Type, Region, Tenancy, OS)
  - Reservation period: 1 year (discount) or 3 years (bigger discount)
  - Payment options: no upfront, partial upfront, all upfront
  - Reserved instance's scope: Regional or Zonal (reserve capacity in an AZ)
  - Recommended for steady-state usage apps (like a database)
  - You can buy and sell in the Reserved Instance Marketplace
  - Convertible Reserved Instance
    - Can change the EC2 instance type, instance family, OS, scope, and tenancy
    - Up to 66% discount
- Savings Plans (1 and 3 years): commitment to an amount of usage, long workload
  - Get a discount based on long-term usage (up to 72%, same as RIs)
  - Commit to a certain type of usage ($10/hour for 1 or 3 years)
  - Usage beyond EC2 Savings Plans is billed at the On-Demand price
  - Locked to a specific instance family and AWS region (e.g. M5 in us.east-1)
  - Flexible across:
    - Instance size (e.g. m5.xlarge, m5.2xlarge)
    - OS (e.g. Linux, Windows)
    - Tenancy (Host, Dedicated, Default)
- Spot Instances: short workloads, cheap, can lose instances (less reliable)
  - Can get a discount up to 90% compared to On-Demand
  - Instanced that you can "lose" at any point of time if your max price is less than the current spot price
  - The MOST cost-efficient instances in AWS
  - Useful for workloads that are resilient to failure
    - Batch jobs
    - Data analysis
    - Image processing
    - Any distributed workloads
    - Workloads with a flexible start and end time
  - Not suitable for critical jobs or databases
- Dedicated Hosts: book an entire physical server; control instance placement
  - A physical server with EC2 instance capacity fully dedicated to your use
  - Allows you address compliance requirements and use your existing server-bound software licenses (per-socket, per-core, pe-VM software licenses)
  - Purchasing options
    - On-Demand: pay per second for active Dedicated Host
    - Reserved: 1 or 3 years (no upfront, partial upfront, all upfront)
  - The most expensive option
  - Useful for software that have complicated licensing model (BYOL - bring your own license)
  - Or for companies that have strong regulatory or compliance needs
- Dedicated Instances: no other customers will share your hardware
  - Instances run on hardware that's dedicated to you
  - May share hardware with other instances in the same account
  - No control over instance placement (can move hardware after Start/Stop)
- Capacity Reservations: reserve capacity in a specific AZ for any duration
  - Reserve On-Demand instances capacity in a specific AZ for any duration
  - You always have access to EC2 capacity when you need it
  - No time commitment (create/cancel anytime), no billing discounts
  - Combine with Regional Reserved Instances and Savings Plans to benefit from billing discounts
  - You're charged at On-Demand rate whether you run instances or not
  - Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ

### Shared responsibility model for EC2
- AWS
  - Infrastructure (global network security)
  - Isolated on physical hosts
  - Replacing faulty hardware
  - Compliance validation
- You
  - Security Groups rules
  - OS patches and updates
  - Software and utilities installed on the EC2 instance
  - IAM Roles assigned to EC2 and IAM user access management
  - Data security on your instance

### EC2 Summary
- EC2 Instance:
  - AMI (OS)
  - Instance Size (CPU + RAM)
  - Storage
  - Security Groups
  - EC2 User Data
- Security Groups: firewall attached to the EC2 instance
- EC2 User Data: script launched at the first start of an instance
- SSH: start a terminal into our EC2 Instances (port 22)
- EC2 Instance Role: link to IAM roles
- Purchasing Options: On-Demand, Spot, Reserved (Standard + Convertible), Dedicated Host, Dedicated Instance