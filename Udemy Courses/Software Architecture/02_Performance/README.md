## Section 02 - Performance

### Table of Contents
- [Section 02 - Performance](#section-02---performance)
  - [Table of Contents](#table-of-contents)
  - [What is performance?](#what-is-performance)
  - [Performance Problems](#performance-problems)
  - [Performance Principles](#performance-principles)
  - [System Performance Objectives](#system-performance-objectives)
  - [Performance Measurement Metrics](#performance-measurement-metrics)
  - [Network Latency](#network-latency)
  - [Memory Latency](#memory-latency)
  - [Disk Latency](#disk-latency)
  - [CPU Latency](#cpu-latency)
  - [Contention](#contention)
  - [Minimize Lock Contention](#minimize-lock-contention)
  - [Pessimistic Locking](#pessimistic-locking)
  - [Optimistic Locking](#optimistic-locking)
  - [Compare and Swap](#compare-and-swap)
  - [Deadlocks](#deadlocks)
  - [Coherence Delays](#coherence-delays)
  - [HTTP Caching for Static Data](#http-caching-for-static-data)
  - [Caching Dynamic Data](#caching-dynamic-data)
  - [Caching Challenges](#caching-challenges)
  - [Summary](#summary)

---

### What is performance?

- Measure of how fast or responsive a system is under
  - A given workload
    - Backend data
    - Request volume
  - A given hardware
    - Kind
    - Capacity

### Performance Problems
- How to spot a performance problem? What does it look like?
- Every performance problem is the result of some queue building up somewhere
  - such as network socket queue, DB IO queue or OS run queue, etc
- Reasons for queue build up
  - Inefficient slow processing
  - Serial resource access
  - Limited resource capacity

### Performance Principles
- Efficiency
  - Efficient resource utilization
    - IO - memory, network, disk
    - CPU
  - Efficient logic
    - Algorithms
    - DB queries
  - Efficient data storage
    - Data structures
    - DB schema
  - Caching
- Concurrency
  - Hardware
  - Software
    - Queuing
    - Coherence
- Capacity

### System Performance Objectives
- Minimize request-response latency
- Latency is measured in "time units"
- Depends on
  - Wait/idle time
  - Processing time
- Maximize throughput
- Throughput is measured as rate of request processing
- Depends on
  - Latency
  - Capacity 
- Focus is on reducing latency

### Performance Measurement Metrics
- Latency
  - Affects: user experience
  - Desired: as low as possible
- Throughput
  - Affects: number of users that can be supported
  - Desired: greater than the request rate
- Errors
  - Affects: functional correctness
  - Desired: none
- Resource Saturation
  - Affects: hardware capacity required
  - Desired: efficient utilization of all system resources
- Tail latency is an indication of queuing of requests
  - Gets worse with higher workloads
- Average latency hides the effects of tail latency
  - Also measures 99 (or 99.9) percentile latency
- Two types of latency
  - Serial request latency
  - Parallel request latency

### Network Latency
- Network over wired connection has data transfer latency
- SSL = secure socket layer
- There can be latencies associated with:
  - Data transfer (global/regional/local network)
  - TCP connection
  - SSL/TLS connection

### Memory Latency
- Problems to deal with
  - Finite heap memory
  - Large heap memory
  - GC algorithm (GC = garbage collection)
  - Finite buffer memory
- Approaches to solve
  - Avoid memory bloat
  - Weak/soft references
  - Multiple smaller processes
  - Improve garbage collection algorithm
  - Normalization for the finite buffer memory problem
    - Also focus on computing over storage

### Disk Latency
- Occurs in these areas:
  - Web content filed
  - Logging
  - DB disk access
- Approaches to solving issues
  - web content filed
    - Web content caching
    - Page cache, zero copy
  - Logging
    - Asynchronous logging
    - Sequential and batch IO
    - Query optimization
    - Data caching
  - DB disk access
    - Schema optimization
    - Higher IOPS, RAID, SSD disk

### CPU Latency
- Issues that arise:
  - Inefficient algorithms
  - Context switching
- Approaching to remedy these:
  - Inefficient algorithms and context switching
    - Batch/async IO
    - Single threaded model
    - Thread pool size
    - Multi-process in virtual env
    - Efficient algorithms
    - Efficient queries

### Contention
- Causes of contention:
  - Connection pool
  - Thread pool
  - Listen/accept queue
  - CPU/disk/network
  - Locks
- Minimizing shared resource contention
  - Listen queue
  - Conn pool size
  - Thread pool size 
  - Vertical scaling
  - Locking
    - Lock splitting
    - Lock striping
    - Lock frequency
    - Read write locks
    - Opt/pessimistic locking
    - CAS
  - RAID disk

### Minimize Lock Contention
- Reduce the duration for which a lock is held
  - Move out the code, out of synchronization block, that doesn't require a lock (especially an IO)
  - Lock splitting - split locks into lower granularity locks that are experiencing moderate contention
  - Lock striping - split locks for each partition of data like in Concurrent HashMap
- Replace exclusive locks with coordination mechanisms
- Use ReadWriteLock/Stamped Locks
- Use Atomic Variables (protected by CAS)

### Pessimistic Locking
- Threads must wait to acquire a lock
- Used when contention is high
- May result in deadlocks
  - One of the participating thread is backed up by receiving an exception

### Optimistic Locking
- Threads do not wait for a lock
- Threads backup when they discover contention
- Use when contention is between low to moderate
- May result in starvation
  - Switch to pessimistic locking

### Compare and Swap
- CAS is an optimistic locking system
- All modern hardware (CPU) support it
- Java implements support of CAS through Atomic (java.util.concurrent.atomic*) classes

### Deadlocks
- Lock ordering related
  - Result of threads trying to acquire multiple locks
    - Simultaneous money transfer from X and Y accounts by threads T1 and T2
    - T1: from X to Y
    - T2: from Y to X
  - Acquire locks in a fixed global order
    - Acquire locks only in the sort order of account numbers: X and then Y
- Request load related
  - Threads waiting for connections to multiple databases
    - May run ot of enough connections resulting in deadlocks
  - Threads waiting for other threads to be spawned and perform some work
    - May run out of enough threads resulting in deadlocks

### Coherence Delays
- Visibility (volatile)
  - Java guarantees that a volatile object is always read from main memory and written back to main memory when updated in a processor
- Locking (synchronized)
  - All variables accessed inside a sync block are read from the main memory at the start of the sync block
  - All variables modified in a ync block are flushed to the main memory when the associated thread exists in the sync block
  - Synchronized ensures locking and visibility
  - Volatile only ensures visibility
- These guarantees are provided using memory barriers which may result in invalidating or flushing caches

### HTTP Caching for Static Data
- GET method responses are important and hence good candidates for caching
- Headers
  - Cache-control: if a resource can be cached
    - No-cache: do not use cache without validating with origin server
    - Must revalidate: like no-cache but need to validate only after its max-age (even if client is ready to accept stale data)
    - No-store: do not cache at all
    - Public: any shared cache can cache
    - Private: only a client cache can cache
    - Max-age: maximum age of a resource in cache, relative to resource request time
  - ETAG: a hash code for indicating version of a resource
    - Invalidates previous version cache

### Caching Dynamic Data
- Exclusive cache
  - Has low latency
  - Without routing can lead to duplication
    - Useful for smaller datasets
  - With routing can lead to uneven load balancing
    - Session cache
- Shared cache
  - Higher latency due to an extra hop
  - Can scale out to a distributed cache
    - Memcache
    - Redis
  - For large datasets

### Caching Challenges
- Limited cache space results in early evictions
  - Prefer caching for frequently accessed objects
    - Cache fast-moving consumer goods vs slow moving goods
  - Average size of cached objects should be as small as possible
    - Large sized objects results in cache getting full too soon causing evictions
- Cache invalidation and cache inconsistency
  - Required update/deletion of cached value upon update
    - Not an option when a cache is outside of a system
    - No cache inconsistency 
  - TTL value can be used to remove aged data
    - High TTL results in more cache hits
      - Inconsistency interval increases
    - Low TTL decreases inconsistency interval
      - Cache hits go down

### Summary
- Performance problems are a result of request/job queue building up in a system
- Performance measuremen - latency, throughput, and resource saturation
  - Watch out tail latency for hidden problems or future problems
- Improving latency
  - Reduce request response time of serial requests by improving resource utilization
    - CPU, network, memory, disk
  - Caching - minimize fetching frequently read rarely mutated data from disk or network
- Improving throughput
  - Import concurrency of concurrent jobs/requests
  - Miniize job/request serialization
    - Reduce lock contention by reducing lock granularity, lock striping, lock splitting, and CAS
    - Prefer optimistic locking over pessimistic locking when lock contention is low
    - Eliminate deadlocks when using pessimistic locking