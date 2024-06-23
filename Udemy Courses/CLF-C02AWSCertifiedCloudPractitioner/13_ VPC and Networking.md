## 13_ VPC and Networking

### Overview
- VPC = virtual private cloud
- VPC is something you should know in depth for the AWS Certified Solutions Architect Associate and AWS Certified SysOps Administrator
- For this exam, the Certified Cloud Practitioner, you should know about:
  - VPC, subnets, internet gateways and NAT gateways
  - Security groups, network ACL (NACL), VPC flow logs
  - VPC peering, VPC endpoints
  - Site to Site VPN and direct connect
  - Transit gateway
- Probably less than 1-2 questions about VPC on this exam

### IP Addresses in AWS
- IPv4 - Internet Protocol version 4 (4.3 billion addresses)
- Public IPv4 - can be used on the internet
- EC2 instance gets a new public IP address every time you stop then start it (default)
- Private IPv4 - can be used on private networks (LAN) such as internal AWS networking 
- Private IPv4 is fixed for EC2 instances even if you start/stop them
- Elastic IP - allows you to attach a fixed public IPv4 address to EC2 instance
- Note: all public IPv4 on AWS will be charged $0.005 per hour (including EIP)
  - Free tier: 750 hours usage per month
- IPv6 - Internet Protocol version 6 (3.4*10^38 addresses)
  - Every IP address is public in AWS (no private range)
  - Example: 2001:db8:3333:4444:cccc:dddd:eeee:ffff
  - Free

### VPC, Subnet, Internet Gateway, and NAT Gateways
- VPC = Virtual Private Cloud: private network to deploy your resources (regional resource)
- Subnets allow you to partition your network inside your VPC (Availability Zone resource)
- A public subnet is a subnet that is accessible from the Internet
- A private subnet is a subnet that is not accessible from the Internet
- To define access to the Internet and between subnets, we use Route Tables
- Internet Gateway and NAT Gateways
  - Internet Gateways help our VPC instances connect with the Internet
  - Public subnets have a route to the Internet gateway
- NAT Gateways (AWS-managed) and NAT Instances (self-managed) allow your instances in your Private Subnets to access the internet while remaining private

### Security Groups and Network Access Control List (NACL)
- NACL (Network ACL)
  - A firewall which controls traffic from and to a subnet
  - Can have ALLOW and DENY rules
  - Are attached at the Subnet level
  - Rules only include IP addresses
- Security Groups
  - A firewall that controls traffic to and from an EC2 instance
  - Can have only ALLOW rules
  - Rules include IP addresses and other security groups

| Security Group | Network ACL |
|--|--|
| Operates at the instance level | Operates at the subnet level |
| Supports allow rules only | Supports allow rules and deny rules |
| Is stateful: Return traffic is automatically allowed, regardless of any rules | Is stateless: Return traffic must be explicitly allowed by rules |
| We evaluate all rules before deciding whether to allow traffic | We process rules in number order when deciding whether to allow traffic |
| Applies to an instance only if someone specifies the security group when launching the instance, or associates the security group with the instance later on | Automatically applies to all instances in the subnets it is associated with (therefore you don't have to rely on users to specify the security group) |

### VPC Flow Logs and VPC Peering
- Capture information about IP traffic going into your interfaces:
  - VPC flow logs
  - Subnet flow logs
  - Elastic Network Interface flow logs
- Helps to monitor and troubleshoot connectivity issues, examples:
  - Subnets to internet
  - Subnets to subnets
  - Internet to subnets
- Captures network info from AWS managed interfaces too: Elastic Load Balancers, ElastiCache, RDS, Aurora, etc...
- VPC flow logs data can go to S3, CloudWatch Logs, and Kinesis Data Firehose
- VPC Peering
  - Connect two VPC, privately using AWS' network
  - Make them behave as if they were in the same network
  - Must not have overlapping CIDR (IP address range)
  - VPC Peering connection is not transitive (must be established for each VPC that need to communicate with one another)

### VPC Endpoints - Interface and Gateway (S3 and DynamoDB)
- Endpoints allow you to connect to AWS services using a private network instead of the public
- This gives you enhanced security and lower latency to access AWS services
- VPC Endpoint Gateway: S3 and DynamoDB
- VPC Endpoint Interface: the rest

### PrivateLink
- PrivateLink (VPC Endpoint Services)
- Most secure and scalable way to expose a service to thousands of VPCs
- Does not require VPC peering, internet gateway, NAT, route tables...
- Requires a network load balancer (Service VPC) and ENI - Elastic Network Interface (Customer VPC)

### Direct Connect and Site-To-Site VPN
- Site to Site VPN
  - Connect an on-prem VPN to AWS
  - The connection is automatically encrypted
  - Goes over the public internet
  - On-prem: must use a Customer Gateway (CGW)
  - AWS: must use a Virtual Private Gateway (VPG)
- Direct Connect (DX)
  - Establish a physical connection between on-prem and AWS
  - The connection is private, secure, and fast
  - Goes over a private network
  - Takes at least a month to establish

### AWS Client VPN
- Connect from your computer using OpenVPN to your private network and on-prem
- Allows you to connect to your EC2 instances over a private IP (just as if you were in a private VPC network)
- Goes over public internet

### Transit Gateway
- For having transitive peering between thousands of VPC and on-prem, hub-and-spoke (star) connection
- One single Gateway to provide this functionality
- Works with Direct Connect Gateway, VPN connections

### Summary
- VPC = Virtual Private Cloud
- Subnets: tied to an AZ, network partition of the VPC
- Internet Gateway: at the VPC level, provide Internet access
- NAT Gateway/Instances: give internet access to private subnets
- NACL: stateless, subnet rules for inbound and outbound
- Security Groups: stateful, operate at the EC2 instance level or ENI (elastic network interface)
- VPC Peering: connect two VPC with non overlapping IP ranges, non-transitive
- Elastic IP: fixed public IPv4, ongoing cost if not in-use
- VPC Endpoints: provide private access to AWS services within VPC
- PrivateLink: privately connect to a service in a 3rd party VPC
- VPC flow logs: network traffic logs
- Site to Site VPN: VPN over public internet between on-prem data center and AWS
- Client VPN: OpenVPN connection from your computer into your VPC
- Direct Connect: direct private connection to AWS
- Transit Gateway: connect thousands of VPC and on-prem networks together