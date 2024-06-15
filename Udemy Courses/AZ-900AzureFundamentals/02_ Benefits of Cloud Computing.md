## 02_ Benefits of Cloud Computing

### High availability benefit
- Availability = uptime
- High Availability (HA) = Ability of a system to remain operational to users during planned or unplanned outages
- No service provider has 100% availability
- Planned outages
  - Examples: OS security patches, application updates, hardware replacement, migrating to a new hosting provider
  - Predictable and you control the timing
- Unplanned outages
  - Examples: hardware failure, network disruptions, power outages, natural disasters, cyber attacks, software bugs, poor scaling/architecture design
- Methods to mitigate planned outages
  - Gradual deployment strategy
    - 1-10-100-etc
  - Testing and monitoring of deployment
  - Easy rollback plan
  - Small deployments
  - Frequent deployments - you become an expert at deployments
  - Automation - devops mentality with pipelines
- Methods to mitigate unplanned outages
  - Every single core component has redundancy
  - Use Azure's built-in features for availability
    - Availability Sets
    - Availability Zones
    - Cross-region load balancing / front door
  - Constant health monitoring / probes
  - Automation - reboot or add services
  - Strong security practices
  - Be geographically distributed
  - Have a disaster recovery plan
  - Test that disaster recovery plan / fire drills
  - Load testing
- High availability is
  - A conscious effort to avoid the obvious sources of downtime

### Scalability benefit
- The ability of a system to accommodate increasing demand by adding or removing resources as needed
- Why is it needed?
  - Allows a system to adapt to changing usage patterns and handle increased traffic without requiring changes to the application code or system design
- Does traffic fluctuate?
  - Some business have this, like e-commerce websites on Black Friday
  - Like school registrations are busy in September
  - Or tax systems when they're busy in April
- Can you expand the capacity of a system very easily by adding more servers?
- Or will it be a massive undertaking to do that?
- Vertical scaling
  - Also called "scaling up" or "scaling down"
  - Adding more resources to a single server
  - Increase the amount of memory, the number of CPUs
  - There is an upper limit to this
  - Azure: 96 vCPUs, 384 GB memory
  - (Does not improve availability)
- Horizontal scaling
  - Also called "scaling out" or "scaling in"
  - Adding more servers to a system
  - No limits to scaling
  - Additional complexities for load balancing
  - (Can improve availability)
- Impact on system cost
  - Adding more resources to a system adds to the cost
  - Reducing resources can reduce cost
  - Having a scalable system allows for a system to be perfectly sized
  - This optimizes the cost by reducing wasted computing resources

### Elasticity benefit
- The ability of a system to quickly and easily scale up or down the amount of resources that a system uses in response to changing demand
- Quickly and easily
  - Has to involve some sort of automation
  - Often called "autoscaling" in cloud computing
  - The system monitors some metric (such as CPU utilization) to determine how busy a system is
  - Adds resources when it exceeds a limit for being busy
  - Remove resources when it falls below a limit for not being busy
- Why is it needed?
  - More efficient and cost-effective use of resources
  - Minimizes computing "waste" - resources paid for and not used
  - Self-hosted systems tend to have a large percentage of "over-promised" resources for anticipated future growth
  - Also have the potential to have a maximum capacity higher than you could afford if you had a static provisioning of resources

### Reliability benefit
- All three relating to high quality service
  - Availability
    - Ability of a system to be accessible and usable by users when they need it
  - Reliability
    - Ability of a system to perform its intended function without interruption and with a high degree of accuracy
  - Predictability
- Availability vs Reliability
  - A system can be highly available to users
  - In that it responds instantly to every request
  - However, don't look behind the curtain!
  - The system itself might be highly unreliable
  - Availability is an appearance to end users
  - Reliability is the underlying truth
- It's how dependable a system is
- Ability of a system to perform its intended function without interruption and with a high degree of accuracy
- Why is it needed?
  - You have to trust that your cloud provider is doing everything it can to make its platform reliable
  - Includes transparency during service issues
- How is it achieved?
  - Auto-scaling
  - Multi-region deployments
  - Data backup and replication
  - Health probes and self-healing

### Predictability benefit
- Ability to forecast and control the performance and behavior of a system
- Includes the ability to predict future costs
- Why is it needed?
  - Gives you the confidence that the system will continue to perform at the expected level in the future
  - And of course you won't get a crazy bill unexpectedly 
- How is it achieved?
  - Auto-scaling
  - Load balancing
  - Different instance types, sizes, pricing tiers
  - Cost management tools
  - Pricing calculators

### Security benefit
- Security is a full-time job
- Cloud providers are obviously massive targets for hackers, so they rightly spend a lot of time, money and effort on platform security
- Cloud providers go through security audits and compliance certifications
- And provide customers, like you, the tools they need to enable and monitor security with their own apps/data
- Why is it needed?
  - Security is a fundamental challenge in IT
  - You want confidence that your cloud provider cannot be easily defeated by hackers and those with malicious intent
- How is it achieved?
  - Industry standard compliance certifications
  - Microsoft Security Response Center (MSRC)
  - Always-on DDoS
  - Azure Policy and Blueprint
  - Role based access control (RBAC)
  - Azure Active Directory
  - Always up-to-date platform services
  - Update management

### Governance benefit
- Governance = how your organization does business
- The process of defining, implementing, and monitoring a framework of policies that guides an organization's cloud operations
- Why is it needed?
  - Your company wants to ensure it's policies are followed in the cloud
  - Includes basic auditing and reporting, as well as enforcement
  - You want to be compliant with industry standards, such as HIPAA or PCC or GDPR
- How is it achieved?
  - Azure Policy and Blueprint
  - Management groups
  - Custom roles
  - Soft delete
  - Guides and best practices such as Cloud Adoption Framework

### Manageability benefit
- Management of the cloud
- Management in the cloud
- Of the cloud
  - Templates
  - Automation
  - Scaling
  - Monitoring and alerts
  - Self-healing
- In the cloud
  - Web portal
  - Command line interface and scripts
  - APIs
  - PowerShell
- Why is it needed?
  - How easy it is to work with your apps in the cloud impacts cost, performance, security and other priorities
  - Different cloud vendors are going to be easier or harder to work with
- How is it achieved?
  - Azure Portal, CLI, PowerShell, Cloud shell, REST APIs, and other programmatic methods
  - Consolidated monitoring and alerting system
  - Ability to use ARM templates, Bicep, Terraform, etc
  - Autoscaling of most types of compute resources