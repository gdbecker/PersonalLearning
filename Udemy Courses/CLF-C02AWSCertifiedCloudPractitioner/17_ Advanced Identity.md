## 17_ Advanced Identity

### Security Token Service (STS)
- Enables you to create temporary, limited-privileges credentials  to access your AWS resources
- Short-term credentials: you configure expiration period
- Use cases
  - Identify federation: manage user identities in external systems, and provide them with STS tokens to access AWS resources
  - IAM roles for cross/same account access
  - IAM roles for Amazon EC3: provide temporary credentials for EC2 instances to access AWS resources

### Cognito
- Provide identity for your web and mobile app users (potentially millions)
- Instead of creating them an IAM user, you create a user in Cognito

### Directory Services
- What is Microsoft Active Directory (AD)?
  - Found on any Windows Server with AD Domain Services
  - Database of objects: user accounts, computers, printers, file shares, security groups
  - Centralized security management, create account, assign permissions
- AWS Directory Services
  - AWS Managed Microsoft AD
    - Create your own AD in AWS, manage users locally, supports MFA
    - Establish "trust" connections with your on-prem AD
  - AD Connector
    - Directory Gateway (proxy) to redirect to on-premise AD, supports MDA
    - Users are managed on the on-prem AD
  - Simple AD
    - AD-compatible managed directory on AWS
    - Cannot be joined with on-prem AD

### AWS IAM Identity Center
- Successor to AWS Single Sign-On)
- One login (single sign-on) for all of your
  - AWS accounts in AWS Organizations
  - Business cloud apps (Salesforce, Box, Microsoft 365...)
  - SAML2.0-enabled apps
  - EC2 Windows instances
- Identity providers
  - Built-in identity store in IAM Identity Center
  - 3rd party: Active Directory (AD), OneLogin, Okta...

### Summary
- IAM
  - Identity and Access Management inside your AWS account
  - For users that you trust and belong to your company
- Organizations: manage multiple accounts
- Security Token Service (STS): temporary, limited-privileges credentials to access AWS resources
- Cognito: create a database of users for your web and mobile apps
- Directory Services: integrate Microsoft Active Directory in AWS
- IAM Identity Center: one login for multiple AWS accounts and apps