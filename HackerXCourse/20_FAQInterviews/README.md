## 20_ Frequently Asked Interview Questions

### Certificate
!["Certificate"](.)

### General hacking based
1. Can you explain what ethical hacking is?
   1. Ethical hacking is when the individual is allowed to hack the systems with permission of the merchandise owner to search out for weaknesses in an exceedingly system and later fix them
2. What are the hacking stages? Explain each stage
   1. Should consist of these 5 stages:
   2. Surveillance/recon: hacker endeavors to gather as much data as possible about the target
   3. Scanning: includes exploiting the data accumulated amid the surveillance stage and using it to inspect the causality. The hacker can use computerized devices amid the scanning phase which can incorporate port scanners, mappers, and vulnerability scanners
   4. Getting access: this is where the real hacking happens. The hacker attempts to exploit data found amid the surveillance and scanning stage to get access
   5. Access Maintenance: once access is granted, hackers need to keep that access for future exploitation and assaults by securing their exclusive access with backdoors, rootkits, and trojans
   6. Covering tracks: once hackers have possessed the capacity to pick up and maintain access, they cover their tracks and keep away from getting detected
3. What is active and passive reconnaissance?
   1. Passive is nothing but to gain info regarding targeted computers and networks, while not actively participating with the systems
   2. Active is when the attacker engages with the target system, usually conducting a port scan to find any open ports
4. Who is known as a black hat, white hat, or grey hat hackers?
   1. Black hat = one who performs hacking (penetration or exploitation) without authority and with malicious intent
   2. White hat = authorized penetration tester
   3. Grey hat = one who performs hacking (penetration or exploitation) without authority but without malicious intent. They perform the activity for bounty programs or security testing, without getting authorized to do so
5. What is the difference between hacking and ethical hacking?
   1. Hacking = illegal way of accessing the system
   2. Ethical hacking = legal way of accessing the system

### Vulnerability assessment and penetration testing
1. What is the difference between VA and PT?
   1. Vulnerability Assessment (VA) = process to identify the weaknesses and loopholes in the system, server, or asset. Mostly it's an automated process that can be identified with different tools available in the market
   2. Penetration Testing (PT) = process to exploit the vulnerabilities which are identified in VA. It can be performed in both manual and automated ways. Manually we can perform, based on the info gathered of server details, versions framework, etc
2. What is the different between a MAC and an IP address?
   1. All networks across devices are assigned a number that is unique, which is terms as MAC or Media Access Control address. This address may be a personal mailbox on the internet. The network router identifies it. The amount may be modified anytime
   2. All devices get their distinctive information processing address so they can be located easily on a given laptop and network. Whoever is aware of your distinctive information processing address will contact you through it
3. What are the types of penetration testing?
   1. Black box = no previous knowledge of the network
   2. White box = knowledge of remote network
4. Can you name the top 10 vulnerabilities?
   1. Injection
   2. Broken authentication
   3. Sensitive data exposure
   4. XML External Entities (XXE)
   5. Broken Access Control
   6. Security misconfigurations
   7. Cross-site scripting (XSS)
   8. Insecure deserialization
   9. Using components with known vulnerabilities
   10. Insufficient logging and monitoring

### Network attacks
1. How can you avoid ARP poisoning?
   1. ARP poisoning is a type of network attack that can be resolved through these techniques:
   2. Using packet filtering: packet filters can filter out and block packets with clashing source address data
   3. Keeping away from te trust relationship: organizations ought to develop a protocol that depends on trust relationships as little as they can
   4. Utilize ARP spoofing software: some programs assess and certify info before it's transmitted and blocks any info that's spoofed
2. What is network sniffing?
   1. System sniffing includes using sniffer tools that empower real-time monitoring and analysis of data streaming over PC systems. Sniffers can be used for various purposes, regardless of whether it's to steal data or manage systems
   2. Network sniffing is used for ethical and unethical purposes. System admins use these as system monitoring and analysis tools, to analyze and avoid network-related issues such as traffic bottlenecks. Cybercriminals use these devices for untrustworthy purposes such as character usurpation, email, delicate information hijacking, etc
3. What is a firewall?
   1. Could be a device that allows/blocks traffic as per an outlined set of rules. These are placed o the boundary of trusted and untrusted networks
4. What is MAC flooding?
   1. MAC flooding is a kind of technique wherever the protection of a given network switch is compromised
   2. The hacker floods the switch with sizeable amounts of frames than what a switch can handle. This makes the switch behave as a hub and transmits all packets to all the existing ports
   3. Taking advantage of this, attackers can attempt to send packets within the network to steal sensitive information
5. What is meant by a spoofing attack and what are the different types?
   1. A spoofing attack is when a malicious party impersonates another device or user on a network, so as to launch attacks against network hosts, steal data, unfold malware, or bypass access controls. Different spoofing attacks are deployed by malicious parties to achieve this
   2. ARP spoofing attack
   3. DNS spoofing attack
   4. IP spoofing attack 

### Social engineering
1. What is phishing?
   1. The phishing technique involves sending false emails, chats, or websites to real system with the aim of stealing information from the original website
2. What is email spoofing?
   1. It's a way to copy someone's identity and send an email from a copied ID. The receiver won't be able to understand whether this is coming from the right source or the wrong source
3. Give an example of spear phishing
   1. Getting an email from an email that looks legit but isn't: security@instagram.com
   2. Contains a suspicious link they want you to click: www.instagram.com/security-system
4. What is social engineering?
   1. Social engineering is the term used for a broad range of malicious activities accomplished through human interactions. It uses psychological manipulation to trick users into making security mistakes or giving away sensitive info
5. How can one prevent a social engineering attack?
   1. Social engineers manipulate human feelings such as curiosity or fear to carry out schemes and draw victims into their traps. Be wary of whenever you feel alarmed by an email, attracted to an offer displayed on a website, or when you come across stray digital media lying about. Being alert can help protect yourself against most social engineering attacks taking place on the digital realm
   2. Don't open emails and attachments from suspicious sources
   3. Use multi-factor authentication
   4. Be wary of tempting offers
   5. Keep your anti-virus/anti-malware software updated 

### Web hacks
1. What is SQL injection?
   1. SQL injection is one of the techniques used to steal data from organizations; it's fault created in the application code
   2. SQL injection happens when you inject the content into an SQL query string and the result mode of content into an SQL query string, and the result modifies the syntax of your query in the ways you did not intend
2. How can you stop your website from getting hacked?
   1. By adopting the following methods, you can stop your website from getting hacked:
      1. Sanitizing and validating user parameters: sanitize input before submitting them to the database to reduce the chances of being attacked by SQL injection
      2. Using firewalls: can be used to drop traffic from suspicious IP addresses, if the attack is a simple DoS
      3. Encrypting cookies: cookie or session poisoning can be prevented by encrypted the content of cookies, associating cookies with a client IP address and timing out the cookies after some time
      4. Validating and verifying user input: prevent tampering by validating and verifying input before processing it
      5. Validating and verifying headers: these techniques are helpful against XSS and checks the parameters passed via the URL, form parameters and hidden values
3. What are HTTP splitting attacks?
   1. Attackers send multiple requests to the same page
4. If you get a login web page application, what are the things we can perform?
   1. We can perform the following tasks:
      1. We can try user enumeration, including observing the error received from the app when giving input of wrong usernames and passwords
      2. We can perform SQL injection in all entry points
      3. We can perform clickjacking
      4. We can try to login with default usernames and passwords
      5. We can perform a brute force attack to extract a username and password
      6. Check for SSL certificate; if the app is using a weak encrypted certificate, man-in-the-middle attacks can be performed

### Miscellaneous
1. What is SSL and why is it not enough when it comes to encryption?
   1. SSL is identity verification, not hard encryption. It's designed to be able to prove that the person you're engaging with on the other side is who they say they are
   2. SSL and TSL are each used by almost everyone online; however, because of this, it's a huge target and is mainly attacked through its implementation (the Heartbleed bug for example) and it's far-famed methodology
2. Explain the differences between encryption and hashing
   1. Encryption = two-way process that is used to change the data's format from human-readable format to non-human readable format and vice-versa. We use some algorithms to encrypt data
   2. Encryption has two types:
      1. Symmetric = use the same key to encrypt and decrypt data
      2. Asymmetric = use the public key to encrypt and the private key to decrypt
   3. Hashing = unidirectional process which is used to store long string data in short length, mostly hashing algorithms are used to retrieve data in databases
3. What are cross-site scripting attacks?
   1. XSS attacks are client-side attacks in which an attacker tries to inject malicious scripts to the legitimate web app. These attacks will lead to disclosing cookie information, website defacement, etc
   2. Types:
      1. Reflected XSS = the request with malicious scripts sent to the server and reflected into the client-side
      2. Stored XSS = malicious scripts are stored permanently in the server, and whenever any user accesses that part of the app, these malicious scripts get executed
      3. DOM-based XSS = request of the malicious script is not sent to the server, but rather it gets executed on the client-side itself
4. What is a zero-day attack?
   1. The vulnerability of a system that is unknown to the responsible person and that has been exploited by attackers. The time difference in the attack and becoming aware of unknown vulnerability is called zero days
5. What are denial of service attacks and what are their common forms?
   1. DoS attacks = involve flooding servers, systems, or networks with traffic to cause overconsumption of victims' resources. 
   2. This makes it troublesome or not possible for legitimate users to access or use targeted sites
   3. Common DoS attacks:
      1. Butter overflow attacks
      2. ICMP flood
      3. SYN flood
      4. Teardrop attack
      5. Smurf attack
6. What are SQL injections and their types?
   1. If the application doesn't sanitize user input, then SQL injection could happen. A malicious hacker would inject SQL commands to gain unauthorized access and execute admin operations on the database.
   2. Types
      1. Error-based SQL injection
      2. Blind SQL injection
      3. Time-based SQL injection
7. What are the types of password attacks?
   1. Guessing = repeated attempts using common passwords or known facts about the users
   2. Stealing = physically or electronically acquiring users' passwords - can include sniffing of the network communications
   3. Dictionary
   4. Brute force
   5. Rainbow tables
   6. Hybrid password
   7. Birthday
8. What is a keylogger trojan?
   1. Malicious software that can monitor your keystroke, logging them to a file and sending them off to remote attackers
   2. When the desired behavior is observed, it will record a keystroke and capture your login username and password
9. What is a brute force attack?
   1.  Technique for hacking passwords and getting access to a system and network resources
   2.  Takes a long time and the hacker would know about JavaScript
   3.  For this purpose, one can use the tool name "Hydra"
10. What is WiFi hacking, and what are the steps involved?
    1.  WiFi = wireless fidelity; this is a technology used to access communication over a network along with devices
    2.  Steps
        1.  "airmon-ng" = info and detect the WiFi card whether it's capable of hacking or not
        2.  "airodump-ng" = will dump the packets in the air and collect the key (password) to be used later, to know the real WiFi password
        3.  "aircrack-ng" = used to decrypt the key which we got from airodump