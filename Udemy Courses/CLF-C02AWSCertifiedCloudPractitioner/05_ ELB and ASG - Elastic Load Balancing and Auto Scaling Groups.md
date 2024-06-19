## 05_ ELB & ASG - Elastic Load Balancing & Auto Scaling Groups

### High availability, scalability, and elasticity
- Scalability
  - Scalability = an app/system can handle greater loads by adapting
  - There are 2 kinds of scalability:
    - Vertical scalability
      - Means increasing the size of the instance
      - Very common for non distributed systems, such as a database
      - There's usually a limit to how much you can vertically scale (hardware limit)
    - Horizontal scalability (= elasticity)
      - Means increasing the number of instances/systems for your app
      - Implies distributed systems
      - Very common for web apps / modern apps
      - It's easy to horizontally scale thanks to cloud offerings like Amazon EC@
  - Scalability is linked but different to High Availability
- High Availability
  - Usually goes hand in hand with horizontal scaling
  - Means running your app/system in at least 2 AZ
  - Goal is to survive a data center loss (disaster)
- Vertical Scaling: increase instance size (= scale up/down)
- Horizontal Scaling: increase number of instances (= scale in/out)
  - auto Scaling Group
  - Load Balancer
- High Availability: run instances for the same app across multiple AZ
  - Auto Scaling Group multiple AZ
  - Load Balancer multiple AZ
- Scalability vs Elasticity (vs Agility)
  - Scalability: ability to accommodate a larger load by making the hardware stronger (scale up), or by adding nodes (scale out)
  - Elasticity: once a system is scalable, elasticity means that there will be some "auto-scaling" so that the system can scale based on the load. This is "cloud-friendly": pay-per-use, match demand, optimize costs
  - Agility: (not related to scalability - distractor) new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes

### Elastic Load Balancing (ELB)
- What is load balancing?
  - Load Balancers are servers that forward internet traffic to multiple servers (EC2 instances) downstream
- Why use a load balancer?
  - Spread load across multiple downstream instances
  - Expose a single point of access (DNS) to your app
  - Seamlessly handle failures of downstream instances
  - Do regular health checks to your instances
  - Provide SSL termination (HTTPS) for your websites
  - High availability across zones
- Why use an ELB?
  - ELB = Elastic Load Balancer, this is a managed load balancer
    - AWS guarantees that it will be working
    - AWS takes care of upgrades, maintenance, high availability
    - AWS provides only a few configuration knobs
  - It costs less to setup your own load balancer, but it will be a lot more effort on your end (maintenance, integrations)
  - 4 kinds of load balancers offered by AWS:
    - Application Load Balancer (HTTP/HTTPS only) - Layer 7
      - HTTP / HTTPS / gRPC protocols (Layer 7)
      - HTTP Routing features
      - Static DNS (URL)
    - Network Load Balancer (ultra-high performance, allows for TCP) - Layer 4
      - TCP / UDP protocols (Layer 4)
      - High Performance: millions of requests per second
      - Static IP: through Elastic IP
    - Gateway Load Balancer - Layer 3
      - GENEVE Protocol on IP Packets (Layer 3)
      - Route traffic to Firewalls that you manage on EC2 instances
      - Intrusion detection
    - Classic Load Balancer (retired in 2023) - Layer 4 & 7

### Auto Scaling Groups (ASG)
- What is an Auto Scaling Group?
  - In real life, the load on your websites and apps can change
  - In the cloud, you can create and get rid of servers very quickly
  - The goal of an ASG is to:
    - Scale out (add EC2 instances) to match an increased load
    - Scale in (remove EC2 instances) to match a decreased load
    - Ensure we have a minimum and maximum number of machines running
    - Automatically register new instances to a load balancer
    - Replace unhealthy instances
  - Cost Savings: only run at an optimal capacity (principle of the cloud)

### Auto Scaling Groups (ASG) strategies
- Manual Scaling: update the size of an ASG manually
- Dynamic Scaling: respond to changing demand
  - Simple/Step Scaling
    - When a CloudWatch alarm is triggered (example: CPU > 70%) then add 2 units
  - Target Tracking Scaling
    - Example: I want the average ASG CPU to stay at around 40%
  - Scheduled Scaling
    - Anticipate a scaling based on known usage patterns
    - Example: increase the min capacity to 10 at 5pm on Fridays
- Predictive Scaling
  - Uses ML to predict future traffic ahead of time
  - Automatically provisions the right number of EC2 instance in advance
  - Useful when your load has predictable time-based patterns

### Summary
- High Availability and Scalability (vertical and horizontal) vs Elasticity vs Agility in the Cloud
- Elastic Load Balancers (ELB)
  - Distribute traffic across backend EC2 instances, can be multiple AZ
  - Supports health checks
  - 4 types: Classic (old), Application (HTTP - L7), Network (TCP - L4), Gateway (L3)
- Auto Scaling Groups (ASG)
  - Implement Elasticity for your app, across multiple AZ
  - Scale EC2 instances based on the demand on your system, replace unhealthy instances
  - Integrated with the ELB