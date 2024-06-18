## 02_ IAM - Identity and Access Management

### IAM Intro
- IAM: Users and Groups
- IAM = Identity and Access Management (global service)
- Root account created by default, shouldn't be used or shared
- Users are people within your organization,and can be grouped
- Groups can only contain users, not other groups
- Users don't have to be in a group, but they can belong in multiple groups
- IAM Permissions
  - Users or groups can be assigned JSON documents called policies
  - These policies define the users' permissions
  - In AWS you apply the least privilege principle: don't give more permissions than a user needs 

### IAM Policies
- IAM policies inheritance
  - You can assign policies per group or for a specific user
- IAM policies structure
  - Consists of:	
    - Version: policy language version, always include "2012-10-17"
    - Id: identifier for the policy (optional)
    - Statement: one or more individual statements (required)
  - Statements consist of
    - Sid: identifier for the statement (optional)
    - Effect: whether the statement allows or denies access (Allow, Deny)
    - Principal: account/user/role to which this policy applied to
    - Action: lit of actions this policy allows or denies
    - Resource: list of resources to which the actions applied to
    - Condition: conditions for when this policy is in effect (optional)

### IAM MFA
- IAM - password policy
  - Strong passwords = higher security for your account
  - You can set up a password policy
    - Set a min password length
    - Require specific characters
    - Allow all IAM users to change their own passwords
    - Require users to change their password after some time (expiration)
    - Prevent password re-use
  - MFA = multi factor authentication
    - Users have access to your account and can possibly change configurations or delete resources in your AWS account
    - You want to protect your Root Accounts and IAM users
    - MFA = password you know + security device you own
  - MFA device options in AWS
    - Virtual MFA device (like Authy or Google Authenticator apps)
    - Universal 2nd Factor (U2F) Security Key (physical device, like a YubiKey)
    - Hardware key fob MFA device (like Gemalto)
    - Hardware key fob MFA device for AWS GovCloud (US) (like SurePassID)

### AWS Access Keys and SDK
- How can users access AWS? 3 options:
  - AWS Management Console (protected by password + MFA)
  - AWS Command Line Interface (CLI): protected by access keys
  - AWS Software Developer Kit (SDK): for code, protected by access keys
- Access Keys are generated through the AWS Console
- Users manage their own access keys
- Access Keys are secret, like a password. Don't share them
- Access Key ID ~= username
- Secret Access Key ~= password
- AWS Software Developer Kit (SDK)
  - Software development kit
  - Language-specific APIs (set of libraries)
  - Enables you to access and manage AWS services programmatically
  - Embedded in your app
  - Supports 
    - SDKs (JavaScript, Python, PHP, etc)
    - Mobile SDKs (Android, iOS, etc)
    - IoT device SDKs (Embedded C, Arduino, etc)

### AWS CLI
- A tool that enables you to interact with AWS services using commands in your command-line shell
- Direct access to the public APIs of AWS services
- You can develop scripts to manage your resources
- It's open source (https://github.com/aws/aws-cli)
- Alternative to using AWS Management Console

### AWS CloudShell
- Terminal within the AWS cloud

### IAM Roles for AWS Services
- Some AWS services will need to perform actions on your behalf
- To do so, we wil assign permissions to AWS services with IAM Roles
- Common roles
  - EC2 Instance Roles
  - Lambda Function Roles
  - Roles for CloudFormation

### IAM Security Tools
- IAM Credentials Report (account-level)
  - A report that lists all your account's users and the status of their various credentials
- IAM Access Advisor (user-level)
  - Access Advisor shows the service permissions granted to a user and when those services were last accessed
  - You can use this information to revise your policies

### IAM guidelines and best practices
- Don't use the root account except for AWS account setup
- One physical user = One AWS user
- Assign users to groups and assign permissions to groups
- Create a strong password policy
- Use and enforce the use of MFA
- Create and use Roles for giving permissions to AWS services
- Use Access Keys for Programmatic Access (CLI/SDK)
- Audit permissions of your account using IAM Credentials Report and IAM Access Advisor
- Never share IAM users and Access Keys

### IAM Shared Responsibility Model
- You
  - Users, Groups, Roles, Policies management and monitoring
  - Enable MFA on all accounts
  - Rotate all your keys often
  - Use IAM tools to apply appropriate permission
  - Analyze access patterns and review permissions
- AWS
  - Infrastructure (global network security)
  - Configuration and vulnerability analysis
  - Compliance validation

### IAM summary
- Users: mapped to a physical user, has a password for AWS Console
- Groups: contains users only (not other groups)
- Policies: JSON docs that outline permissions for users or groups
- Roles: for EC2 instances or AWS services
- Security: MFA + Password Policy
- AWS CLI: manage your AWS services using the command-line
- AWS SDK: manage your AWS services using a programmatic language
- Access Keys: access AWS using the CLI or SDK
- Audit: IAM Credential Reports and IAM Access Advisor