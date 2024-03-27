## 01_ Know the OS

### Certificate
!["Certificate"](./01_KnowTheOS.jpg)

### Operating Systems
An operating system is an interface between a computer user and computer hardware. It helps us communicate and work with computers.

### Kali Linux
- Linus is one of the most powerful operating systems. Android is powered by Linux
- Linux has various open-source distributions such as Ubuntu, Red Hat, Backtrack, Kali, etc
- Kali is an operating system designed by hackers for hackers and something that you might work with regularly in your learning journey
- Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing. It's maintained and funded by Offensive Security

### Installation
- Two ways to use Kali Linux:
  - Either boot a system with Kali and have a dedicated system
  - Or virtually install Kali in your Windows or Mac system (we'll be using this one)
- VirtualBox download
  - https://www.virtualbox.org/wiki/Downloads
- Kali Linux virtual machine download
  - https://www.kali.org/get-kali/#kali-virtual-machines
- You will get a .ova file -> this is a virtual image file. Double click on it and it will automatically get opened in VirtualBox

### Basic Terminal Commands
|Command|Description|
|--|--|
|pwd|It prints the current working directory|
|ls|This command is used to list information or content in a particular file/folder|
|cd|It's used to change the current working directory -> ex: cd Desktop|
|mkdir|Create a new folder|
|man|Displays the help manual for a particular command -> ex: man ls|
|shutdown|Shutdown or restart your system|
|rmdir|Used to remove/delete a directory/folder|
|clear|Clear the terminal|
|apt-get update|Update Kali Linux|
|apt-get install|To install a new program -> ex: apt-get install leafpad|

### Common Networking Commands
|Command|Description|
|--|--|
|ifconfig|It's similar to the Windows command ipconfig. It shows basic network details such as IP addresses, broadcast address, mac address, and much more|
|iwconfig|It's similar to the ifconfig command, but more focused on only wireless network interfaces|
|ping|It's usually used as a simple way to verify that a computer can communicate over the network with another computer or network device|
|arp|It's used to find IP to MAC address mappings. ARP, which stands for Address Resolution Protocol, is a protocol used to map a MAC address (or hardware address) to an IP address|
|netstat|It delivers basic stats on all network activities and informs users on which ports and addresses the corresponding connections (TCP, UDP) are running and which ports are open for tasks|
|route|It fetches the routing table. It basically tells where all the network is actually routed|

### Getting Ready for Scripting
|Command|Description|
|--|--|
|grep|It's used to search a given file for patterns specified by the user. Basically 'grep' lets you enter a pattern of text and then it searches for this pattern within the text that you provide it|
|tr|The tr command is used for translating or deleting characters|
|cat|The cat command allows us to create single or multiple files, the view containing the file, concatenate files, and redirect output in terminal or files|
|cut|It's used to extract sections from each line of input - usually from a file|
|echo|It's used to print anything on the console|

### IP Sweeper Bash Script Example
```bash
#!/bin/bash
for ip in `seq ;`do
ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d":" &
done 
```

#### Breaking it down
|Item|What it Does|
|--|--|
|ping|To ping the IP address|
|-c 1|Ping one IP at a time|
|$1.$ip|$1 will be the user input. We will input the first three ranges of the IP and the last range will be taken from the for loop -> ex: if user input was 192.68.1 then in the first run of the for loop $ip will be 1. Thus $1.$ip will result in 192.68.1.1 it will ping this IP|
|grep "64 bytes"|Try running a ping command to an IP. If the IP responds, the result will be "64 bytes from (given IP)". Thus if the IP is active, it will respond and the response will contain the term "64 bytes". Thus, grep "64 bytes" will simply filter out the IPs that responded from a total of 254 IP addresses|
|cut -d " " -f 4|This command basically does the same thing. It cuts the whole response with the delimiter (-d) whitespace(" ") and picks the fourth term (-f 4) from it, that will be the IP|
|tr -d ":"|Here we pass colon(:) as a delimiter and tr command deletes it|
|&|Allows the thread to work simultaneously|
| (pipe)|Basically joins all the above commands as a single command|
