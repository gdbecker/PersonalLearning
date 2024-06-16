## 08_ Cost Management in Azure

### Factors that Affect Cost
- One of the benefits of cloud computing is the flexibility in pricing options
- You can choose to have relative certainty over the monthly bill
- Or choose to (possibly) save money by paying only for what you use
- Factors
  - Time
  - Consumption (storage, compute, bandwidth)
  - Service tier - like basic, standard, or premium
  - Computing power (vCPU/RAM/CPU type)
  - Software licenses
  - Bandwidth (Egress from Azure)
  - Bandwidth (between Azure regions)
  - IP addresses
  - Reservations
  - Per transaction
- Caveats
  - Ingress bandwidth is free
  - First 5 GB outbound is free
  - There are free and cheap options for many things (i.e. free distros from Linux and paid distros of Linux)
  - There are DEV software licenses for some things (like SQL server)
  - There are usually 4 or 5 ways to implement a technique with tradeoffs for SLA and latency
  - Many services have multiple pricing options (monthly or consumption)
  - Play with the pricing calculator to understand more
  - Pricing estimates are difficult to make accurate since there are so many factors

### [Azure Pricing Calculator - Click Here](https://azure.microsoft.com/en-us/pricing/calculator/?ef_id=_k_CjwKCAjwmrqzBhAoEiwAXVpgogb-wf7QsWECThU3qzPLSyveU3vejZKB2geqgISCwMPe-KD66NBEwBoCuKMQAvD_BwE_k_&OCID=AIDcmm5edswduu_SEM__k_CjwKCAjwmrqzBhAoEiwAXVpgogb-wf7QsWECThU3qzPLSyveU3vejZKB2geqgISCwMPe-KD66NBEwBoCuKMQAvD_BwE_k_&gad_source=1&gclid=CjwKCAjwmrqzBhAoEiwAXVpgogb-wf7QsWECThU3qzPLSyveU3vejZKB2geqgISCwMPe-KD66NBEwBoCuKMQAvD_BwE)

### [Total Cost of Ownership Calculator - Click Here](https://azure.microsoft.com/en-us/pricing/tco/calculator/)

### Azure Cost Management
- A free tool inside Azure Portal to analyze spending
- Primary purpose: analyze spending over time
- Ability to track against budgets
- See all of your past invoices
- You can schedule reports
- Help track your spending if your resources are properly tagged

### Resource Tags
- Metadata you can add to resources 
- Helps to dig into more detail or organize spending reports in customized ways