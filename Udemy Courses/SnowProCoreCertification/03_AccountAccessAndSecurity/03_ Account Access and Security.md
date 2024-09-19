## 03_ Account Access and Security

### Access Control Overview
- Who can perform what operations on what objects
- Two access control frameworks
  - Role-Based Access Control (RBAC)
    - Access privileges are assigned to roles and in turn assigned to users
  - Discretionary Access Control (DAC)
    - Snowflake combines RBAC with Discretionary Access Control in which each object has an owner, who can in turn grant access to that object
- Securable Objects
  - Every securable object is owned by a single role which can be found by executing a SHOW <object> command
  - The owning role:
    - Has all privileges on the object by default
    - Can grant or revoke privileges on the object to other roles
    - Transfer ownership to another role
    - Share control of an object if the owning role is shared
  - Access to objects is also defined b privileges granted to roles:
    - Ability to create a warehouse
    - Ability to list tables contained in a schema
    - Ability to add data to a table
  - Unless allowed by a grant, access to a securable object will be denied

### Roles
- A role is an entity in which privileges on securable objects can be granted or revoked
- Roles are assigned to users to give them the authorization to perform actions
- A user can have multiple roles and switch between them within a Snowflake session
- Roles can be granted to other roles creating a role hierarchy
- Privileges of child roles are inherited by parent roles

### System-Defined Roles
- ORGADMIN
  - Manages operations at organizational level
  - Can create account in an organization
  - Can view all accounts in an organization
  - Can view usage information across an organization
- ACCOUNTADMIN
  - Top-level and most powerful role for an account
  - Encapsulates SYSADMIN and SECURITYADMIN
  - Responsible for configuring account-level parameters
  - View and operate on all objects in an account
  - View and manage Snowflake billing and credit data
  - Stop any running SQL statements
- SYSADMIN
  - Can create warehouses, databases, schemas, and other objects in an account
- SECURITYADMIN
  - Manage grants globally view MANAGE GRANTS privilege
  - Create, monitor, and manage users and roles
- USERADMIN
  - User and Role management via CREATE USER and CREATE ROLE security privileges
  - Can create users and roles in an account
- PUBLIC
  - Automatically granted to every user and every role in an account
  - Can own securable objects, however objects owned by PUBLIC role are available to every other user and role in an account

### Custom Roles
- Allows you to create a role with custom and fine-grained security privileges defined
- Allow admins working with system-defined roles to exercise the security principle of least privilege
- Can be created by the SECURITYADMIN and USERADMIN roles as well by any role to which the CREATE ROLE privilege has been granted
- It's recommended to create a hierarchy of custom roles with the top-most custom role assigned to the SYSADMIN role
- If custom roles are not assigned to the SYSADMIN role, system admins will not be able to manage the objects owned by the custom role

### Privileges
- Defines a level of access to an object
- For each object there is a set of security privileges that can be granted on it
- There are 4 categories:
  - Global Privileges
  - Privileges for account objects
  - Privileges for schemas
  - Privileges for schema objects
- Managed by using the GRANT and REVOKE commands
- Future grants allow privileges to be defined for objects not yet created

### User Authentication
- The process of authenticating with Snowflake via user provided username and password credentials
- User authentication is the default method of authentication
- Users with the USERADMIN role can create additional Snowflake users, which makes user of the CREATE USER privilege
- Passwords
  - Can be any case-sensitive string up to 256 characters
  - Must be at least 8 characters long
  - Must have at least 1 digit
  - Must contain at least 1 uppercase letter and 1 lowercase letter

### Multi-Factor Authentication
- MFA is an additional layer of security, requiring the user to prove their identity not only with a password by with an additional piece of information (or factor)
- MFA in Snowflake is powered by a service called Duo Security
- MFA is enabled on a per-user basis and only via the UI
- Snowflake recommends that all users with the ACCOUNTADMIN role by required to use MFA
- MFA properties
  - MINS_TO_BYPASS_MFA
    - Specifies the number of minutes to temporarily disable MFA for the user so that they can log in
  - DISABLE_MFA
    - Disables MFA for the user, effectively cancelling their enrollment. to use MFA again, the user must re-enroll
  - ALLOWS_CLIENT_MFA_CACHING
    - MFA token caching reduces the number of prompts that must be acknowledged while connecting and authenticating to Snowflake

### Federated Authentication
- Enables users to co connect Snowflake using secure SSO (single sign-on)
- Snowflake can delegate authentication responsibility to an SAML 2.0 compliant external identity number (IdP) with native support for Okta and ADFS IdPs
- An IdP is an independent service responsible for creating and maintaining user credentials as well as authenticating users for SSO access to Snowflake
- In a federated environment, Snowflake is referred to as a Service Provider (SP)
- Properties
  - SAML_IDENTITY_PROVIDER
    - How to specify an IdP during the Snowflake setup of Federated Authentication
  - SSO_LOGIN_PAGE
    - Enable button for Snowflake-initiated SSO for your identity provider (as specified in SAML_IDENTITY_PROVIDER) in the Snowflake main login page

### Key Pair Authentication
- Process
  - Generate Key-Pair using OpenSSL
  - Assign Public Key to Snowflake User
  - Configure Snowflake Client
  - Configure Key-Pair Rotation
- OAuth and SCIM
  - Snowflake supports the OAuth 2.0 protocol
  - OAuth is an open-standard protocol that allows supported clients authorized access to Snowflake without sharing or storing user login credentials
  - Snowflake offers two OAuth pathways: Snowflake OAuth and External OAuth
  - System for Cross-Origin Identity Management (SCIM) can be used to manage users and groups (Snowflake Roles) in cloud apps using RESTful APIs

### Network Policies
- Provide the user with the ability to allow or deny access to their Snowflake account based on a single IP address or list of addresses
- Network Policies are composed of an allowed IP range and optionally a blocked IP range. Blocked IP ranges are applied first
- Network Policies currently support only IPv4 addresses
- Network Policies use CIDR notation to express an IP subnet range
- Network Policies can be applied on the account level or to individual users
- If a user associated to both an account-level and user-level network policy, the user-level policy takes precedence
- ACCOUNT
  - Only one network policy can be associated with an account at any one time
  - SECURITYADMIN or ACCOUNTADMIN system roles can apply policies. Or custom role with the ATTACH POLICY global privilege
- USER
  - Only one network policy can be associated with a user at any one time
  - SECURITYADMIN or ACCOUNTADMIN system roles can apply policies. Or custom role with the ATTACH POLICY global privilege

### Data Encryption
- Data is encrypted at rest in Snowflake
  - Table data
  - Internal stage data
  - AES-256 strong encryption
- Encryption in transit
  - ODBC, JDBC, Web UI, SnowSQL -> via HTTPS protocol
- Heirarchical Key Model
  - Root Key
  - Account Master Keys
  - Table Master Keys
  - File Keys
- Key Rotation
  - Practice of transparently replacing existing account and table encryption keys every 30 days with a new key
- Re-Keying
  - Once a retired key exceeds 1 year, Snowflake automatically creates a new encryption key and re-encrypts all data previously protected by the retired key using the new key 

### Column Level Security
- Dynamic Data Masking
  - Applied dynamically at query run time
  - Sensitive data in plain text is loaded into Snowflake, and it is dynamically masked at the time of query for unauthorized users
- Masking Policies
  - Are schema-level objects, like tables and views
  - Creating and applying data masking policies can be done independently of object owners
  - Masking policies can be nested, existing in tables and views that reference those tables
  - A masking policy is applied no matter where the column is referenced in a SQL statement
  - A data masking policy can be applied either when the object is created or after the object is created
- External Tokenization
  - Tokenized data is loaded into Snowflake, which is de-tokenized at query run-time for authorized users via masking policies that call an external tokenization service using external functions

### Row Level Security
- Row access policies enable a security team to restrict which rows are returned in a query
- Similarities to column level security policies
  - Schema-level object
  - Segregation of duties
  - Creation and applying workflow
  - Nesting policies

### Secure View
- Type of vew designed to limit access to the underlying tables or internal structural details of a view
- Both standard and materialized view can be designated as secure
- A secure view is created by adding the keyword SECURE in the view DDL
- The definition of a secure view is only available to the object owner
- Secure views bypass query optimizations which may inadvertently expose data in the underlying table

### Account Usage
- Snowflake provide a shared read-only database called SNOWFLAKE, imported using a Share object called ACCOUNT_USAGE
- It's comprised of 6 schemas, which contain many views providing fine-grained usage metrics at the account and object level
- By default, only users with the ACCOUNTADMIN role can access the SNOWFLAKE database
- Account usage views record dropped objects, not just those that are currently active
- There is latency between an event and when that event is recorded in an account usage view
- Certain account usage views provide historical usage metrics. The retention period for these views is 1 year

### Information Schema
- Each database created in an account automatically includes a built-in, read-only schema named INFORMATION_SCHEMA based on the SQL-92 Information Schema
- Each one contains:
  - Views displaying metadata for all objects contained in the database
  - Views displaying metadata for account-level objects (non-database objects such as roles, warehouses, and databases)
  - Table functions displaying metadata for historical and usage data across an account
- The output of a view of table function depends on the privileges granted to the user's current role

### Account Usage vs Information Schema
| Property | Account Usage | Information Schema |
|--|--|--|
| Includes dropped objects | Yes | No |
| Latency of data | 45 minutes to 3 hours (varies by view) | None |
| Retention of historical data | 1 year | 7 days to 6 months (varies by view/table function) |