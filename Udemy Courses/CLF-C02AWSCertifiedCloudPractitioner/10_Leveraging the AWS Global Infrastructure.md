## 10_ Leveraging the AWS Global Infrastructure

### Why global applications?
- A global application is an app deployed in multiple geographies
- On AWS: this could be Regions and/or Edge locations
- Decreased latency
  - Latency is the time it takes for a network packet to reach a server
  - It takes time for a packet from Asia to reach the US
  - Deploy your applications closer to your users to decrease latency, better experience
- Disaster Recovery (DR)
  - If an AWS region goes down (storms, politics, etc)
  - You can fail-over to another region and have your app still working
  - A DR plan is important to increase the availability of your app
- Attack protection: distributed global infrastructure is harder to attack
- Global AWS infrastructure 
  - Regions: for deploying apps and infrastructure
  - Availability Zones: made of multiple data centers
  - Edge Locations (Points of Presence): for content delivery as close as possible to users
- Global apps in AWS
  - Global DNS: Route 53
    - Great to route users to the closest deployment with least latency
    - Great for disaster recovery strategies
  - Global Content Delivery Network (CDN): CloudFront
    - Replicate part of your app to AWS Edge Locations - decrease latency
    - Cache common requests - improved user experience and decreased latency
  - S3 Transfer Acceleration
    - Accelerate global uploads and downloads into Amazon S3
  - AWS Global Accelerator
    - Improve global app availability and performance using the AWS global network

### Route 53
- Route 53 is a Managed DNS (Domain Name System)
- DNS = collection of rules and records which help clients understand how to reach a server through URLs
- In AWS, the most common records are:
  - example: www.google.com -> 12.34.56.78 == A record (IPv4)
- Routing Policies
  - Need to know them at a high-level for the exam
  - Simple Routing Policy: no health checks
  - Weighted Routing Policy: distribute traffic
  - Latency Routing Policy: minimize latency
  - Failover Routing Policy: disaster recovery

### CloudFront
- Content Delivery Network (CDN)
- Improves read performance, content is cached at the edge
- Improves users' experiences
- 216 Points of Presence globally (edge locations)
- DDoS protection (because worldwide), integration with shield, AWS Web Application Firewall
- Origins
  - S3 buckets
    - For distributing files and caching them at the edge
    - Enhanced security with CloudFront Origin Access Control (OAC)
    - OAC is replacing Origin Access Identity (OAI)
    - CloudFront can be used as an ingress (to upload files into S3)
  - Custom Origin (HTTP)
    - Application Load Balancer
    - EC2 instance
    - S3 website (must first enable the bucket as a static S3 website)
    - Any HTTP backend you want
- CloudFront vs S3 Cross Region Replication
  - CloudFront:
    - Global Edge network
    - Files are cached for a TTL (maybe a day)
    - Great for static content that must be available everywhere
  - S3 Cross Region Replication:
    - Must be setup for each region you want replication to happen
    - Files are updated in near real-time
    - Read only
    - Great for dynamic content that needs to be available at low-latency in few regions

### S3 Transfer Acceleration
- Increase transfer speed by transferring files to an AWS edge location which will forward the data to the S3 bucket in the target region

### AWS Global Accelerator
- Improve global application availability and performance using the AWS global network
- Leverage the AWS internal network to optimize the route to your application (60% improvement)
- 2 Anycast IP are created for your application and traffic is sent through Edge locations
- The Edge locations send the traffic to your app
- Global Accelerator vs CloudFront
  - They both use the AWS global network and its edge locations around the world
  - Both services integrate the AWS Shield for DDoS protection
  - CloudFront - Content Delivery Network
    - Improves performance for your cacheable content (such as images and videos)
    - Content is served at the edge
- Global Accelerator
  - No caching, proxying packets at the egde to applications running in one or more AWS Regions
  - Improves performance for a wide range of apps over TCP or UDP
  - Good for HTTP use cases that require static IP addresses
  - Good for HTTP use cases that required deterministic, fast regional failover 

### AWS Outposts
- Hybrid cloud: businesses that kep an on-prem infrastructure alongside a cloud infrastructure 
- Therefore, two ways of dealing with IT systems:
  - One for the AWS cloud (using the AWS console, CLI, and AWS APIs)
  - One of their on-prem infrastructure
- AWS Outposts are "server racks" that offers the same AWS infrastructure, services, APIs, and tools to build your own apps on-prem just as in the cloud
- AWS will setup and manage "Outposts Racks" within your on-prem infrastructure and you can start leveraging AWS services on-prem
- You care responsible for the Outposts Rack physical security
- Benefits:
  - Low-latency access to on-prem systems
  - Local data processing
  - Data residency
  - Easier migration from on-prem to the cloud
  - Fully managed service
  - Some services that work on Outposts:
    - EC2, EBS, S3, EKS, ECS, RDS, EMR

### AWS WaveLength
- WaveLength Zones are infrastructure deployments embedded within the telecommunications providers' data centers at the edge of the 5G networks
- Brings AWS services to the edge of the 5G networks
- Example: EC2, EBS, VPC,...
- Ultra-low latency apps through 5G networks
- Traffic doesn't leave the Communication Service Providers' (CSP) network
- High-bandwidth and secure connection to the parent AWS Region
- No additional charges or service agreements
- Use cases: Smart Cities, ML-assisted diagnostics, Connected Vehicles, Interactive Live Video Streams, AR/VR, Real-Time Gaming,...

### AWS Local Zones
- Places AWS compute, storage, database, and other selected AWS services closer to end users to run latency-sensitive apps
- Extend your VPC to more locations - "Extension of an AWS Region"
- Compatible with EC2, RDS, ECS, EBS, ElastiCache, Direct Connect...
- Example: 
  - AWS Region: N. Virginia (us-east-1)
  - AWS Local Zones: Boston, Chicago, Dallas, Houston, Miami,...

### Global Applications Architecture
- Single Region, Single AZ
  - No high availability
  - No global latency
  - Low difficulty
- Single Region, Multi AZ
  - High availability
  - No global latency
  - Little bit difficult
- Multi Region, Active-Passive
  - Users can do read/writes from the active region, but only reads from the passive region
  - Global reads' latency
  - No global writes' latency
  - Moderately difficult
- Multi Region, Active-Active
  - Users can do read/writes from both active regions
  - Global reads' latency
  - Global writes' latency
  - Most difficult

### Summary
- Global DNS: Route 53
  - Great to route users to the closest deployment with least latency
  - Great for disaster recovery strategies
- Global Content Delivery Network (CDN): CloudFront
  - Replicate part of your app to AWS Edge locations - decrease latency
  - Cache common requests - improved user experience and decreased latency
- S3 Transfer Acceleration
  - Accelerate global uploads and downloads into Amazon S3
- AWS Global Accelerator
  - Improve global application availability and performance using the AWS global network
- AWS Outposts
  - Deploy Outposts Racks in your own data centers to extend AWS services
- AWS WaveLength
  - Brings AWS services to the edge of the 5G networks
  - Ultra-low latency apps
- AWS Local Zones
  - Bring AWS resources (compute, database, storage,...) closer to your users
  - Good for latency-sensitive apps