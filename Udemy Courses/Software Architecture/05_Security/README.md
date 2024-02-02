## Section 05 - Security

### Table of Contents
- [Section 05 - Security](#section-05---security)
  - [Table of Contents](#table-of-contents)
  - [Symmetric Key](#symmetric-key)
  - [Public Key Encryption](#public-key-encryption)
  - [Secure Network Protocol (SSL/TLS)](#secure-network-protocol-ssltls)
  - [Hashing](#hashing)
  - [Digital Signature](#digital-signature)
  - [Digital Certificates](#digital-certificates)
  - [Firewalls](#firewalls)
  - [Authentication and Authorization](#authentication-and-authorization)
  - [Credentials Transfer](#credentials-transfer)
  - [Credentials Storage and Verification](#credentials-storage-and-verification)
  - [Stateful Architecture](#stateful-architecture)
  - [Stateless Authentication](#stateless-authentication)
  - [Role Based Access Control (RBAC)](#role-based-access-control-rbac)
  - [Authorization](#authorization)
  - [OAuth2 Token Grant](#oauth2-token-grant)
  - [OAuth2 Grant - Auth Code Flow](#oauth2-grant---auth-code-flow)
  - [OAuth2 Grant - Password Flow](#oauth2-grant---password-flow)
  - [OAuth2 Token Types](#oauth2-token-types)
  - [JSON Web Tokens](#json-web-tokens)
  - [Token Storage](#token-storage)
  - [Securing Data at Rest](#securing-data-at-rest)
  - [Summary](#summary)

---

### Symmetric Key
- A "key" is a string of characters used in combination with an encryption algorithm to transform plain text into an encrypted text and vice versa (decryption)

### Public Key Encryption
- Authentication: prove one's identity
- Non-Repudiation: only the sender (private key holder) could have sent this message

### Secure Network Protocol (SSL/TLS)
- Transfer public key
- Generate and transfer symmetric key
- Use symmetric key for encryption and decryption

### Hashing
- Generates a value or values from a string of text using a mathematical function
  - MD-5 (message digest)
    - 128 bits
    - Has collision vulnerability
  - SHA-1 (secure hash algorithm)
    - 160 bits
  - SHA-2
    - 256, 512 bits
- Generates same output for same text
- Hashing is a one-way algorithm
- Slightest change in the text changes the hash value drastically

### Digital Signature
- Encrypted hash of a message
- Encrypted using signer's private key
- Verified using public key of signer
- Message is hashed independently, and compared with the hash present in the signature

### Digital Certificates
- Way of sharing public key with the world, in a trusted manner
  - Any client should be able to verify who the public key owner is

### Firewalls
- Function
  - Allow
  - Deny
- Ingress Config
  - Source IP (range)
  - Target IP (range)
  - Target port
  - Protocol
- Egress config
  - Destination IP (range)
  - Target IP
  - Target port
  - Protocol

### Authentication and Authorization
- Authentication
  - Proving an identity
    - ID, Name, Organization, etc
- Authorization
  - Proving right to access
    - Functions/services
    - Data

### Credentials Transfer
- HTML Forms
  - HTTP POST method over SSL/TLS
- HTTP Basic
  - Based on Challenge-Response
  - HTTP Methods over SSL/TLS
  - Base 64 encoded <UserId>:<Password>
- Digest Based
  - Like Basic but uses hashed password
  - Hash = MD5(username:realm:password)
- Certificate Based
  - Private-Public key-based certificates exchanged

### Credentials Storage and Verification
- File Storage
  - Not scalable
- Database
  - RDBMS
  - NoSQL
- LDAP/Directory Server
  - Architecture
    - Hierarchical database designed for reading, browsing, searching organization data
    - High scalability and high performance for read loads
  - Environment
    - Enterprise environment with multiple applications
    - Interoperability with all LDAP clients
    - Distributed/federated storage

### Stateful Architecture
- Limited scalability due to Sessions and Centralized Authentication
- Sessions can be revoked by removing it from session storage

### Stateless Authentication
- Signed or encrypted tokens with {Id, Name, Role, ...}
- Decentralized Authentication leads to better scalability
- Requires centralized store for immediate token revocation

### Role Based Access Control (RBAC)
- Identity
  - User Id
- Identity Group
  - Set of User Ids
- Permission
  - Allowed Operation
- Role
  - Set of Permissions
- Resources
  - Service API

### Authorization
- OAuth2
  - Token Grant
    - OAuth2 grant allows clients to access a protected resource on behalf of a resource owner 
    - Specifications do not specify how Authentication is done
  - Token Types - Bearer, MAC
  - Token format types - JWT, SAML
- API key
  - Mostly used by server applications
  - Provides access to APIs of other services
    - Purpose is to identify the origin of a request
      - Valid only for a Domain or IP
    - Doesn't matter who the user is
  - Example - API key for Google Maps

### OAuth2 Token Grant
- Resource Owner
  - User with access to resources
- User Agent
  - User's HTTP Browser
- Client
  - Application that needs access to user's resources
- Authorization Server
  - Identity Provider
- Resource Server
  - Host's user's resources
  - Any client with user access token can access user's resources

### OAuth2 Grant - Auth Code Flow
- Authorization Request - with redirect URL
- Authentication is outside of spec scope
- Authorization Response - with auth code
- Access Token Request - with auth code
- Access Token Response

### OAuth2 Grant - Password Flow
- Client is trusted to receive user (resource owner) credentials
- Client passes user credentials to authorization server
- Client receives access token that has authorization info

### OAuth2 Token Types
- Bearer Token
  - Any who has the token client can use it
  - Only integrity protection
  - Requires TLS for confidentiality
- MAC token (holder of the key)
  - Integrity protection and data origin protection
    - A client for which this token was issued can only use it
  - Can work without TLS
    - Requires TLS for getting access token from auth server
  - Both client and server needs to possess a secret symmetric key
  - Auth server and Resource server agree on a token encryption key

### JSON Web Tokens
- JSON based token specification
  - Compact and URL safe
- Carries info about
  - A subject or principal
  - The party that issued the assertion
  - When it was issued
  - When and where it can be used
- Format is
  - {Header}.{Payload}.{Signature}
  - Signature of Identity Provider
    - HS256 -> HMAC with SHA256
    - RS256 -> RSA with SHA256
  - May or may not be encrypted
  - Other alternative is SAML tokens

### Token Storage
- Web Clients
  - Browser cookies
    - Can be made HTTP only
      - Not accessible to JavaScript
    - Vulnerable to CSRF attacks
      - Web frameworks can prevent it
  - Browser local storage
    - Accessible to JavaScript
      - Vulnerable to XXS
    - Should not be used
- Single Page Applications
  - No safe place to store tokens for SPA
    - Local storage is unsafe
  - Use username/password to authenticate and then store token temporarily in memory
- Mobile Applications
  - Mobile apps can use KeyChain on iOs and KeyStore on Android

### Securing Data at Rest
- Hashed Passwords
  - Protects user passwords from leaking
- Transparent data encryption
  - Encryption of data on hard drive
  - Backups are protected
  - Data can be viewed through queries
- Client data encryption
  - Extra layer of security
  - Data cannot be viewed by queries
  - Queries cannot be used to filter or directly update data

### Summary
- Encryption
  - Symmetric
  - Public key
  - Hashing
  - Digital signatures and certificates
- Secure data transfer over network - HTTPS with SSL/TLS
- Identify management
  - Authentication
    - Credentials - storage, transfer, verification
  - Authorization
    - Role based authorization
    - OAuth2
- Common vulnerabilities

