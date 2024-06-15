## 01_ Describe Cloud Computing

### What is cloud computing?
- Basically renting online services on demand
- Paying for what you use
- Azure has over 1,000 different services available for rental use

### Some Azure services
- Function app: small pieces of code to run often
- Logic app: allows you to connect different apps together, have one process trigger another in a chain
- Different OS's available to choose from
- Lots of AI services available, like Translator. Uses an API to make translation requests
- You can make your own ML data processing components
- Azure Quantum: quantum computer
- Lot of different database types in there, like Oracle and Cassandra
- Marketplace: location where other companies besides Microsoft offering services, both open source and paid-for options
- Identity management services

### Shared Responsibility Model
- How Microsoft and you as the customer have divided responsibilities related to security
- If you have everything on your prem, you are of course responsible for everything: security, user accounts, data, devices, governance, etc
- With Azure, you get to hand off certain responsibilities over to Microsoft - they take some, and you still have some things you watch over
  - Depending on the services you select, the way responsibilities are mixed changes
- Divides security and control responsibilities

### Public cloud
- Cloud platform that's available for the general public
- Computing services offered by third-party providers over the public internet, making them available to anyone who wants to use or purchase them

### Private cloud
- Computing services offered either over the internet or a private internal network, and only to select users instead of the general public

### Hybrid cloud
- Combines a private cloud with public cloud
- Ex: SQL Server stretch database (it's been deprecated however)
  - Starts public, then stretches out to the public when needed

### Cloud pricing
- Potential downsides
  - Can be complicated
  - Can be difficult to predict your monthly bill
  - Can be difficult to understand in advance what a service will really cost
  - Possibility for big savings but you lose predictability
- Factors affecting VM pricing
  - Geographic region
  - Instance size
  - Bandwidth
  - Reservation/savings plan
  - Operating system SKU / license
  - Disk type/size
  - Backup storage
  - Support agreement
- Factors affecting Cosmos DB pricing
  - API choice
  - Standard model/serverless
  - Consumed storage
  - Backup storage
  - Region/regions
  - Number of operations per second
  - Optional dedicated gateway
- Free services
  - 55+ free services that can be used
  - Some paid services have free tiers
  - Some have limits
- Pay for time
  - Some services charge by time used
    - Like VM instances
  - Stop the charge by stop using
- Pay for GB
  - Usually you pay for any data storage used
  - Fairly cheap: $0.03 per GB per month
  - Also pay for network traffic
- Pay for operations
  - You can be charged per operations
    - Read, write, list, delete
  - Pay per message, pay per query, etc
  - Usually very cheap per operation