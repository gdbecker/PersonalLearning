## 09_ Azure Governance and Compliance

### Azure Governance and Compliance
- Governance, within an company, are the leaders/processes that set the rules
  - Examples: Board of directors, CEO, SVP of Technology
- Can also be a formal group like IT Security Committee, or Architecture Review
- Types of rules examples:
  - All servers must be running software within Microsoft Extended Support guidelines
  - All servers must be backed up every 24 hours at a minimum
  - Firewalls must block all inbound ports from the internet except 443
  - Only Operations Support can reboot a production server
- How do you enforce the rules you establish?
  - Can either just post the rules somewhere, or get the platform to audit or enforce the rules
  - Where governance goes from people to the platform handling it
- Governance and compliance in Azure
  - Azure Blueprints will be retired
  - Template Specs is replacing the above
  - Deployment Stacks
  - Azure Policy
  - Resource Locks
  - Microsoft Purview (data governance)
  - Good ol' fashioned RBAC (role-based access control)

### Azure Policy
- Create rules for some or all of your Azure resources and groups
- Evaluate compliance of those rules
- Enforce the rules
- Examples of policies
  - Require SQL Server 12.0
  - Allowed Storage Account SKUs
  - Allowed deployment locations
  - Allowed VM SKUs
  - Automatically apply tagging
  - Not allowed resource types
- You can create a custom policy using JSON

### Resource Locks
- Types
  - Read Only - see that it exists and its properties
  - Can Not Delete - only blocks deletions, you can make property changes
- RBAC can restrict who can unlock

### Microsoft Purview
- Data governance tool and dashboard
- Features
  - Auditing
  - Communication compliance
    - SEC compliance
    - FINRA
    - Sensitive or confidential info
    - Harassing or threatening language
    - Sharing of adult content
  - Data Map and Data Catalog
  - eDiscovery
  - Information protection
    - Know your data - what sensitive info is stored where
    - Protect your data - sensitivity labels, encryption
    - Prevent data loss - browser extensions, pop-up tips, block sharing, hide from chat
  - Insider risk management
    - Identify potential malicious or inadvertent insider risks
    - IP theft
    - Data leakage
    - Security violations
    - Data theft by departing employees
    - Risky browser usage
    - Repeated security policy violations
      - Install malware
      - Disable important security features
    - Usual export of patient data
  - Data lifecycle management
  - Data loss prevention
  - Compliance manager