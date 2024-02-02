## Section 06 - Deployment

### Table of Contents
- [Section 06 - Deployment](#section-06---deployment)
	- [Table of Contents](#table-of-contents)
	- [Large Scale Deployment - Challenges](#large-scale-deployment---challenges)
	- [Application Deployment](#application-deployment)
	- [Infrastructure Deployment](#infrastructure-deployment)
	- [Component Deployment](#component-deployment)
	- [Component Deployment Automation](#component-deployment-automation)
	- [Isolation with Virtual Machines](#isolation-with-virtual-machines)
	- [Deployment with Cloud Stack](#deployment-with-cloud-stack)
	- [Kubernetes](#kubernetes)
	- [Kubernetes Architecture](#kubernetes-architecture)
	- [Rolling Update](#rolling-update)
	- [Canary Deployment](#canary-deployment)
	- [Recreate Deployment](#recreate-deployment)
	- [Blue-Green Deployment](#blue-green-deployment)
	- [A/B Testing](#ab-testing)
	- [Summary](#summary)

---

### Large Scale Deployment - Challenges
- Application deployment
- Infrastructure deployment
- Operations

### Application Deployment
- Web Apps
  - Replicas
- Services
  - Microservices and replicas
- Databases
  - RDBMS, NoSQL
  - Replication and partitioning
- Message queues
  - Replication and partitioning
- Caches
- Directory Servers/LDAP
- Content storage
- Log file storage
- Search and analytics
- Deployment is not a one-time activity; it is continuous
  - Upgrades
  - Bug fixes

### Infrastructure Deployment
- COmpute infrastructure
  - Compute VMs
    - CPU, RAM, disks
- Network
  - Routing, domains
    - Datacenters
  - Internet access
  - Secure access
    - Firewalls, certificates
- Load balancers
  - HLB, SLB,
- DNS and discovery services
- Storage
  - Content, VM/container images, backups, logs
- Main servers
- CDN

### Component Deployment
- Process
  - Install JVM
  - Install web container
    - Configuration
  - Deploy web app
    - Configuration
- Issues
  - Error prone
  - Time consuming
  - Repetitive

### Component Deployment Automation
- Provision a machine with required operating system
- Run a script to install the required software
- This s
  - Reliable
  - Easily repeatable
  - Less time consuming

### Isolation with Virtual Machines
- No shared resources between applications running virtual machine on the same host machine

### Deployment with Cloud Stack
- Compute VM
  - On demand
  - Multiple global locations
- Serverless compute
- Network
  - Global connectivity
  - Firewalls
- Fully cloud managed services
  - Load balancers
    - External, internal
  - Databases
    - RDBMS, NoSQL
  - Storage
    - Content, backups
  - Logging and monitoring

### Kubernetes
- Service Naming and Discovery
  - Using DNS
- Container lifecycle management
  - Health checks, restarts, replacements of unhealthy containers
- Load balancing
- Automated rollouts and rollbacks
- Automatic bin packing
  - Allows to specify resource (CPU, memory) requirements for containers
- Automating mounting of storage systems of choice

### Kubernetes Architecture
- Create cluster
  - Allocate VMs
  - Install Master and Proxy
  - Create network
- Create config
- Start operations
  - Get images
  - Start pods
  - Update config
  - Handle events

### Rolling Update
- Used when it's okay to have both old version and new version simultaneously
- Old version is incrementally replaced by a new version as the new version is incrementally rolled-out
- New version nodes are added to load-balancer node-pool and old version nodes are removed

### Canary Deployment
- New update is exposed to a small fraction of requests
- Once confident, the update is rolled our completely
- No downtime involved

### Recreate Deployment
- Old and new versions cannot run at the same time
- Migrations or data transformations required before new code starts
- Involves a downtime

### Blue-Green Deployment
- Entire environment is switched to a new environment using a reverse proxy
- Quick rollback to old environment on failure
- Goal is to avoid any downtime at the cost of extra hardware

### A/B Testing
- Much like canary release which splits requests
  - May or may not track users
  - Low % of requests for new version
- A/B testing is augmented Canary release that tracks users
- Compares user behavior for two feature variants
- User splits may be even for A/B
- Feature toggles (flags), smart logic switches are used

### Summary
- Deployment
  - Application
  - Infrastructure
  - Operations
- Application Deployment
  - Virtual Machines
  - Docker Containers
- Infrastructure Deployment
  - Cloud
  - Kubernetes
- Upgrading Deployments
  - Recreate
  - Rolling
  - Canary
  - Blue-Green
  - A/B Testing
