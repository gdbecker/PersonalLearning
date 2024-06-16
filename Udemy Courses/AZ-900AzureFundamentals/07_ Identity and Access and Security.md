## 07_ Identity, Access, and Security

### Identity and Microsoft Entra ID (formerly Azure Active Directory)
- The concept of identity
  - In computing, an "identity" is a representation of a person, application or device
- Examples of identity
  - John Henry Doe
  - johndoe@example.com
  - Time entry application
  - The laser printer on the 6th floor
- For authentication, it usually requires a password, a secret key or a certificate as proof
- Many apps require you to log in to use some of its functionality
- You don't want to be responsible for your own security management, like hashing passwords to a db
- "Identity Systems" get hacked all the time
  - Storing password in plain test
  - Using outdated (easily broken) encryption like MD5
  - Storing the salt with the data
  - Not enforcing proper password complexity
  - Not enforcing password change policies
- Microsoft is a worldwide leader in enterprise identity management with: Active Directory
- They extend their lead in the cloud with Entra ID
  - Formerly: Azure Active Directory
- Active Directory and Microsoft Entra are not direct replacements of each other
- Active Directory uses protocols such as LDAP and Kerberos for communication
- Entra ID uses protocols such as SAML and Oauth for communication
- Instead of coding your own security backend (bad practice), you can use APIs to Entra ID to handle authentication and authorization

### Benefits of Microsoft Entra ID
- Security
- Reduced development time and easier support
- Additional features
  - Use AI to look at login patterns and see if they match existing threats
  - Conditional access rules (work laptop inside the network, personal laptop outside of the network for example)
- Centralized administration
- Single sign-on
- Integrates with other Azure services

### Authentication vs Authorization
- Authentication
  - Is a user proving who they are - user id and password
  - Can also use multi-factor authorization
- Authorization
  - Is ensuring that a user is permitted to perform an action
- Move away from all authenticated users having admin access

### Azure AD Conditional Access
- Not all attempts to log into a system are equally safe
- You decide what is deemed as a safe login attempt
- Example situations:
  - When someone logs in to an app from inside your office building as they do everyday...
  - When someone logs in to an app from a country they're not known to work from...
  - When someone who hasn't logged in for months logs in...
  - When someone logs in from a device they've never used before...

### Multi-Factor Authentication (MFA or 2FA)
- Require 2 or more pieces of evidence (factors) in order to log in
- What are factors?
  - Something you know (password)
  - Something you have (authentication app on your phone)
  - Something you are (fingerprint)
- A username is not a factor as it can be public info, like an email address
- A password is "something you know", if kept private
- Your mobile phone could be "something you have" - SMS, authentication app
  - SMS way could be spoofed and hacked
- Your fingerprint or face scan can be "something you are"
- Entra ID Global Administrator accounts can be configured to use MFA for free
- Available methods in Entra ID:
  - Microsoft Authenticator App
  - Authenticator Life (in Outlook)
  - Windows Hello for Business
  - FIDO2 security key
  - OATH hardware token (in preview)
  - OATH software token
  - SMS
  - Voice call

### Passwordless
- Examples
  - Using gestures to sign-in
  - Using a PIN or biometric recognition with Windows devices (Iris, face, fingerprint)
  - Auto-lock the device when you are away (via Bluetooth)

### Role-Based Access Control (RBAC)
- Create role types within your organization, then assign users to those roles
- Microsoft's preferred solution for authorization
- Example roles: Developer, Operations, IT Security
- You try to get granular with the assignments. AKA the Principle of Least Privilege
  - You don't want everyone to have admin access - what if credentials get leaked?
- Try to avoid exceptions where User X has admin privileges that you don't expect
- Three basic roles, very common in Entra:
  - Reader - only read the resource, cannot change it
  - Contributor - full access to a resource, but can't share permissions to that resource
  - Owner - full access to that resource or all resources

### Zero-Trust Model of Security
- At one point in time...
  - IT security was focused on protecting "the border" - the boudnary between the company and the public internet (DMZ)
  - Everything inside the corporate network was assumed safe
- And now:
  - Can't trust any connection regardless of where it comes from
  - Force everyone to prove their identity
- Zero Trust Principles
  - Verify explicitly
  - Use least privileged access
  - Assume breach
- Use every available method to validate identity and authorization
- Just-in-time (JIT)
- Just-enough-access (JEA)
- Security even inside the network; encryption, segmentation, threat detection
- Identity: verify and secure each identity
- Devices: ensure compliance and health status
- Applications: appropriate in-app permissions, monitor user actions
- Data: data-driven protection, encrypt and restrict access
- Infrastructure: robust monitoring to detect attacks, block and flag risky behavior
- Network: encrypt all communications

### Defense in Depth
- Security layers
  - Data: i.e. virtual network endpoint
  - Application: i.e. API management
  - Compute: i.e. limit remote desktop access, Windows update
  - Network: i.e. NSG, use of subnets, deny by default
  - Perimeter: i.e. DDoS, firewalls
  - Identity and access: i.e. Entra ID
  - Physical: i.e. door locks and key cards
- More is better when it comes to defense

### Microsoft Defender for Cloud
- Paid product
- Security posture management and threat detection
- Enhances security on your resources