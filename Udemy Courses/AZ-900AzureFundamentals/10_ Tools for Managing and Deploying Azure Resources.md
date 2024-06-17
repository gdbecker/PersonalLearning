## 10_ Tools for Managing and Deploying Azure Resources

### Azure Portal and Command Line Tools
- Azure Portal: Visual way of managing your Azure resources

### Azure Arc
- Azure Arc -> Cross-Platform VM and Container Management
- Azure Arc features
  - Consistent management for servers across your environment
  - Azure VM extensions allows Azure tools to work for monitoring, security, and updates
  - Supports data services
  - Works with Kubernetes clusters
  - Works with Azure Policy
- Manage Windows and Linux physical servers and VMs outside of Azure
- Install Azure VM extensions on non-Azure Windows and Linux VMs
- What can you do?
  - Collect log data for Log Analytics and Monitor
  - Use VM Insights to analyze performance
  - Download and execute scripts to hybrid connected machines
  - Refresh certification using Key Vault
- Attach and manage Kubernetes clusters running anywhere

### Infrastructure as Code (IaC)
- How do you restore your configuration in Azure?
- Infrastructure (noun): all the servers, storage, database settings, network settings, firewalls, load balancers, etc
- Define your desired infrastructure in a configuration file
- And then you can deploy and redeploy again and again
- Recreate it in another region (duplication)
- Desired State Configuration (DSC)
  - Using automation to ensure your configuration doesn't drift from the original setup
- IaC options
  - ARM Templates (JSON)
  - Bicep
  - Terraform
  - Chef, Puppet
  - PowerShell scripts
  - Other types of code

### ARM Templates
- ARM = Azure Resource Manager
  - The deployment and management service for Azure
  - Management layer that allows you to create, update, and delete resources called "deployments"
  - All actions that you take to manage your Azure resources goes through the ARM layer