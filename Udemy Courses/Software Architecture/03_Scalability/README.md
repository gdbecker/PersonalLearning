## Section 03 - Scalability

### Table of Contents
- [Section 03 - Scalability](#section-03---scalability)
  - [Table of Contents](#table-of-contents)
  - [Performance vs Scalability](#performance-vs-scalability)
  - [Vertical and Horizontal Scaling](#vertical-and-horizontal-scaling)
  - [Reverse Proxy](#reverse-proxy)
  - [Scalability Principle](#scalability-principle)
  - [Modularity](#modularity)
  - [Replication](#replication)
  - [Web Stateful Replication](#web-stateful-replication)
  - [Web Stateless Replication](#web-stateless-replication)
  - [Service Replication](#service-replication)
  - [Database Replication](#database-replication)
  - [Need for Specialized Services](#need-for-specialized-services)
  - [Specialized Services (SOAP/REST Services)](#specialized-services-soaprest-services)
  - [Asynchronous Services](#asynchronous-services)
  - [Asynchronous Processing and Scalability](#asynchronous-processing-and-scalability)
  - [Caching](#caching)
  - [Vertical Partitioning (Micro-Services)](#vertical-partitioning-micro-services)
  - [Horizontal Scaling Methods](#horizontal-scaling-methods)
  - [Load Balancing](#load-balancing)
  - [Discovery Service and Load Balancing](#discovery-service-and-load-balancing)
  - [Load Balancer Discovery](#load-balancer-discovery)
  - [HLB and SLB](#hlb-and-slb)
  - [DNS as Load Balancer](#dns-as-load-balancer)
  - [Global Server Load Balancing](#global-server-load-balancing)
  - [Global Data Replication](#global-data-replication)
  - [Auto Scaling](#auto-scaling)
  - [Service Oriented Architecture](#service-oriented-architecture)
  - [Micro-Services Architecture Style](#micro-services-architecture-style)
  - [Micro-Services Transactions](#micro-services-transactions)
  - [Compensating Transactions - SAGA Pattern](#compensating-transactions---saga-pattern)
  - [Micro-Services Communication Model](#micro-services-communication-model)
  - [Extreme Scalability with NoSQL and Kafka](#extreme-scalability-with-nosql-and-kafka)
  - [Summary](#summary)

---

### Performance vs Scalability
- Performance
  - Low latency
  - High throughput
    - Concurrency
      - Single machine - multi-threading
      - Multi machine - multi threading + multi processing = distributed processing
- Scalability
  - High throughput
    - Ability of a system to increase its throughput by adding more hardware capacity
  - Both ways - UP and DOWN

### Vertical and Horizontal Scaling
- Vertical
  - Easier to achieve
  - Limited scalability
- Horizontal
  - Hard to achieve
  - Unlimited scalability

### Reverse Proxy
- Client needs to know only about the address of the reverse proxy
- Reverse proxy can also act as a load balancer

### Scalability Principle
- Decentralization: Monolith if an anti-pattern for scalability
  - More workers - instances, threads
  - Specialized workers - services
- Independence
  - Multiple workers are as good as a single worker if they can't work independently 
    - They must work concurrently to max extent
  - Independent is impeded by
    - Shared resources
    - Shared mutable data

### Modularity
- Scalable architecture starts with modularity
  - Provides the foundation for breaking an application into more specialized functions/services

### Replication
- For handling increasing workloads
  - Stateless
    - Code replication
  - Stateful
    - Code and data replication

### Web Stateful Replication
- When low latency is required
  - Sticky sessions/Session affinity
  - Sessions occupy memory
  - Session clustering for reliability

### Web Stateless Replication
- For higher scalability at the expense of higher latency
- Session data can be stored on
  - Client side in cookies
  - Server side in shared cache

### Service Replication
- Stateless replication - same as web stateless

### Database Replication
- For higher read scalability
- For high availability
- Master-Slave (primary-secondary)
  - Details
    - High read scalability
    - High read availability
    - No write conflicts
  - Asynchronous
    - Low latency writes
    - Eventually consistent
    - Data loss
  - Synchronous
    - Consistent
    - High latency writes
    - Low write available
  - Master-Master (no-master/peer-to-peer)
    - Details
      - Multi-geography
      - High read scalability
      - High read availability
      - No write conflicts
    - Asynchronous
      - Write conflicts
      - High availability

### Need for Specialized Services
- Service Modules
  - User, Catalog, Order, Inventory, Notification

### Specialized Services (SOAP/REST Services)
- Partially independent development and deployment
- Independent scalability
- Independent technology

### Asynchronous Services
- Async services effectively reduces write load from a database

### Asynchronous Processing and Scalability
- Async services require infrastructure for average load as opposed to peak load

### Caching
-Caching reduces latency and reduces overall read load

### Vertical Partitioning (Micro-Services)
- Micro-services completely decouples services and databases for higher scalability
  - Can no longer do inter service ACID transactions and need to deal with eventual consistency 

### Horizontal Scaling Methods
- Services
- Replication
  - Stateful: they are managing data
  - Stateless
- Partitioning
  - Vertical/functionality partitioning
  - Database partitioning
- Asynchronous calls
- Caching

### Load Balancing
- Single IP address for a component
- Load distribution

### Discovery Service and Load Balancing
- Discovery - registry for IP of healthy instances

### Load Balancer Discovery
- External clients: use DNS to discover the external load balancer
- Internal clients: use a local registry/config to discover an internal load balancer

### HLB and SLB
- HLB = hardware based load balancer
  - load distribution for L4 and L7
- SLB = software based load balancer
  - load distribution for L7
  - features
    - content based routing
    - supports SSL termination
    - supports sticky sessions

### DNS as Load Balancer
- Configure DNS records with multiple A records
  - Return single IP in a round-robin fashion
  - Return a list of IP
- Cloud based DNS can be configured along with health checks
- Drawbacks
  - Indefinite caching and not respecting TTLs
  - Low or zero TTLs can create a very high load on DNS

### Global Server Load Balancing
- Scalability
  - Routing for multi-geographic systems
- Performance
  - Locality for multi-geographic users
    - Client to datacenter latency
    - Client to datacenter proximity
    - Datacenter geography
- High availability
  - Multi-region availability
- Disaster recovery

### Global Data Replication
- Active-Active setup
  - All sites active
- Master-Master or Peer-to-Peer replication
  - Mostly asynchronous
- Failover is quick
- Some data loss is a possibility

### Auto Scaling
- Monitoring Service
  - Monitor load
    - CPU
    - Network
    - Disk
  - Monitor health
    - Ping
    - Http
- Auto-Scaling Service
  - Configure load thresholds
  - Monitor load
  - Launch new instance
  - Shutdown instance

### Service Oriented Architecture
- Independent
  - Each service can have its own tech stack, libraries, framework, etc
  - Each service can be scaled independently and differently
- Not independent
  - Common interface schema
    - XML schema
  - Common database schema
    - RDBMS schema
- Issues
  - Service development may be independent but not deployment
  - Single database has scalability limitations

### Micro-Services Architecture Style
- Shared nothing architecture
  - Services developed and deployed independently
  - Achieved through vertical partitioning
- Vertical/Domain partitioning
  - Independent schema/database
  - Loosely coupled service interfaces
    - REST interfaces instead of XML/WSDL schemas
  - No reusable libraries except utilities
- Issues
  - Duplicate codebase
  - Transaction failures
  - Transaction rollbacks

### Micro-Services Transactions
- Transaction involves multiple machines
  - Distributed services with their own DB
  - Local transaction not possible
- Options
  - Distributed ACID transactions
    - 2PC/3PC
    - Completely ACID
  - Compensating transactions
    - SAGA pattern
    - Eventually consistent model
      - Relaxes consistency and isolation

### Compensating Transactions - SAGA Pattern
- 'Logical Undo' of a partially committed transaction
  - Flow of reversal may not be exactly opposite, and some steps can be executed in parallel
  - Compensation itself can fail. Should be able to restart itself andretry
- Asynchronous processing for reliability

### Micro-Services Communication Model
- Synchronous processing
  - Immediate response
  - For read/query loads
- Asynchronous processing
  - Deferred response
  - For write/transaction loads
  - Higher scalability
  - Higher reliability

### Extreme Scalability with NoSQL and Kafka
- Micro-services transactions
  - ACID within Service
  - Compensating transaction across services
    - Eventually consistent
- NoSQL DB
  - ACID transaction at aggregate level
  - Eventually consistent transactions across aggregates
  - Low latency operations
    - Multiple nodes
  - High scalability
    - Horizontal partitioning
- Kafka
  - Horizontal partitioning of topics

### Summary
- Scalable systems are decentralized and their components function independently
- To make a system scalable:
  - Cache frequently read and rarely mutating data to reduce load on the backend
  - Asynchronous or event driven processing for distributing load over time
  - Vertical partitioning of functionality into independent, stateless, replicated services
  - Partitioning and replication of state for extreme scalability
- Scalable systems require infrastructure:
  - Load balancers: hardware base (L4 and L7) and software based (L7)
  - Discovery services for service discovery and health checks
  - DNS as load balancers at global scale
- Micro-services for extreme scalability
  - Fully vertically partitioned services and databases leads to eventual consistency