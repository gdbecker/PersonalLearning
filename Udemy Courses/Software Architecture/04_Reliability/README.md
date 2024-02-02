## Section 04 - Reliability

### Table of Contents
- [Section 04 - Reliability](#section-04---reliability)
	- [Table of Contents](#table-of-contents)
	- [Failures in Large-Scale Systems](#failures-in-large-scale-systems)
	- [Partial Failures](#partial-failures)
	- [Reliability](#reliability)
	- [Availability](#availability)
	- [High Availability](#high-availability)
	- [Fault Tolerance](#fault-tolerance)
	- [Redundancy](#redundancy)
	- [Types of Redundancy](#types-of-redundancy)
	- [Datacenter Redundancy](#datacenter-redundancy)
	- [Fault Models](#fault-models)
	- [Health Checks](#health-checks)
	- [External Monitoring Service](#external-monitoring-service)
	- [Internal Cluster Monitoring](#internal-cluster-monitoring)
	- [Stateless Recovery](#stateless-recovery)
	- [Database Recovery - Hot Standby](#database-recovery---hot-standby)
	- [Database Recovery - Warm Standby](#database-recovery---warm-standby)
	- [Database Recovery - Cold](#database-recovery---cold)
	- [Failover Best Practices](#failover-best-practices)
	- [Timeouts](#timeouts)
	- [Retries](#retries)
	- [Circuit Breaker](#circuit-breaker)
	- [Fail Fast and Shed Load](#fail-fast-and-shed-load)
	- [Summary](#summary)

---

### Failures in Large-Scale Systems
- Large scale systems are generally distributed systems
  - Large number of components
  - Large number of component instances
- Failures can be
  - Partial
  - Independent
  - Single point of failures
- Increased chance of partial failures
- Partial failures can lead to complete system failures

### Partial Failures
- Network failure - LAN, WAN, Load Balancer
- Machine failure - CPU, Disk, Memory
- Software failure - process
- Disaster - datacenter
- Operations
  - Deploymeny failure
  - Configuration failure
  - Load induced failure
  - External service failure
- After a point, it's much more economical to recover from a failure instead of preventing it altogether
- No matter how hard we try
  - Hardware and networks will fail
  - A changing software will fail
  - Disasters will happen

### Reliability
- A system is said to be reliable if it can continue to function correctly and remain available for operations even in the presence of partial failures
- It's measured as the probability of a system working correctly in a given time interval

### Availability
- It's the probability of a system working correctly at any given time and being available for operations
- There can be downtime but the system is expected to recover from the same in a quick time

### High Availability
- Availability requirements should come from the impact of availability on a business
Beyond business, availability is at the cost of
	- New features
	- Operational costs
- The system should use downtimes permitted by SLA/SLO for rollout of new features
  - New feature rollouts invariably cause disruptions

### Fault Tolerance
- Fault tolerance is a technique to improve Availability and/or Reliability of a system
- It's commonly referred to as an ability of a system to automatically
  - Detect partial failures
  - Handle partial failures
  - Recover from partial failures
- Serviceability
  - The ease with which a system can be serviced in the event of a failure also determines the availability of a system

### Redundancy
- Replication/duplication of critical components or functions of a system in order to increase its reliability
- A secondary capacity is kept ready as a backup, over and above the primary capacity, in case the primary is not available

### Types of Redundancy
- Active redundancy - Hot Spare
  - All nodes do the processing
  - Ideal for providing highest availability
- Passive redundancy - Warm Spare
  - Only active nodes do the processing
  - Ideal for quick recovery
- Cold redundancy - Spare (Backup)
  - Spare nodes are brought up only on a failover
  - It's not a high availability option

### Datacenter Redundancy
- Fault isolation
  - Independent infrastructure
- Zonal redundancy
  - High availability
  - Active-Active setup
- Regional redundancy
  - Disaster recovery
  - Active-Passive setup

### Fault Models
- Response Failure
  - A server fails to receive or respond to incoming messages
- Timeout Failure
  - A server response duration is longer than timeout duration
- Incorrect Response Failure
  - A server's response is incorrect
- Crash Failure
  - A server halts but is working correctly until it halts
- Arbitrary Response Failure
  - A server's response is incorrect because its security is compromised

### Health Checks
- External Monitoring Service
  - Ping based
- Internal Cluster Monitoring
  - Heart-beat based

### External Monitoring Service
- Health check service generates
  - Alerts - for recovery
  - Events - for scaling
- Application health checks
  - HTTP response
  - TCP response
- Periodic health checks
  - Response code
  - Response time
  - Number of retries
    - Up
    - Down

### Internal Cluster Monitoring
- Periodic exchange of heartbeats between redundancy cluster nodes
  - Requires protocols for communication and recovery
- Useful for stateful cluster components
  - Examples are NoSQL DB cluster and load balancers

### Stateless Recovery
- Can use existing scalability mechanism for recovery
- Hot standby
  - Have active redundant instances up and running
- Warm standby
  - Bring up new instances as and when needed
  - Terminate unhealthy instances if not dead already
  - Launch a new instance

### Database Recovery - Hot Standby
- Synchronous replication
- Almost no downtime
- No data loss
- Proximity needed
- Slow DB writes

### Database Recovery - Warm Standby
- Asynchronous replication
- Catchup before recovery
- Possibility of lost updates
- High performance
- Disaster recovery

### Database Recovery - Cold
- Based on DB backups
  - Cost effective
- Significant downtime
  - Recovery from backups
- DB corruption
  - Replication does not help
- Process
  - Log updates
  - Backups
    - Checkpoint
  - Import
  - Apply updates

### Failover Best Practices
- Failover automation
- Regular failover testing in production

### Timeouts
- Client components
  - Use interfaces
  - Service clients
- Timeouts prevents call to integration points from becoming blocked threads
  - Averts cascading failures

### Retries
- Client components
- For transient failures
  - Not for permanent failures
- For system errors
  - Not for application errors
- Retries with exponential back-off
- Return HTTP 503
  - Clients can decide if and when to callback again
- Use Idempotent tokens
  - For unacknowledged failed requests
  - At least once guarantee instead of exactly once

### Circuit Breaker
- Client components
- Deliberate service degredation when a system is under stress and a problem is detected
- Process
  - Keep track of successes and failures
  - In the event of too many failures, fallback t
    - Default values
    - Cached values
    - Error messages
  - Resume when stress dissipates

### Fail Fast and Shed Load
- Server components
- Fail fast
  - Triggered due to component's inability to process any request
    - Validation error
    - Missing parameters/env variables
    - Service timeouts (when circuit breaker is open)
  - Return error as soon as a component discovers it
- Shed load
  - Failing fast due to external load on a system as a result of which excess requests cannot be processed
    - Concurrency limits - threads, connections, request count
    - SLAs - if SLAs are not met, block/reject incoming requests
- Back pressure
  - Shedding load for slowing down clients within a system

### Summary
- Highly available and highly reliable systems are fault-tolerant by design
- Fault tolerance is achieved by
  - Provisioning redundancy for every SPOF
    - Hot/Active, Warm/Passive, Cold/Bakcups
    - Stateless redundancy and stateful redundancy
  - Building automated mechanism to detect faults
  - Building automated failover mechanism to recover from faults
    - Failover of stateless components
    - Failover of stateful components
- Stability patterns
  - Clients - timeouts, retries, circuit breaker
  - Server - fail fast, shed load, back-pressure