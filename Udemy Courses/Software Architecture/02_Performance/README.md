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