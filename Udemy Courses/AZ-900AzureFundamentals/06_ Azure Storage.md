## 06_ Azure Storage

### Overview
- In general in Azure:
  - Container (blob) storage
  - Disk storage for virtual hard disks (VHDs)
  - Azure file storage
  - Storage tiers
  - Infrastructure as a Service (IaS)
- Azure Storage (GPv2)
  - "Standard storage"
  - Subdivided into four types of data it can store
    - Container, File, Queue, Table
  - Can hold up to 5 petabytes (5PB) = 5 million GB
  - Pay for what you use
  - ~2 cents per GB per month
  - Extremely cheap for cloud storage
  - Not recommended for high-demand workloads
- Data Lake
  - A setting when creating a GPv2 storage account
  - A data lake is extremely large storage
  - Can hold petabytes and exabytes
  - Good for "big data" analytics
- Premium storage options
  - Blob storage - can only hold containers (blobs)
    - Can choose block blobs or page blobs
  - File storage
  - Uses premium SSD (solid state disks)
  - Tripe the "operations per second (OPS)"
  - Lower latency (time to first byte)
  - More expensive of course
- High performance
  - Premium SSD
  - Premium SSD v2
  - Ultra Disk

### Container (Blob) Storage
- Most popular option
- Binary Large Object (BLOB)
  - These are files of any type
  - Stored loosely in a container
  - Public or private
  - "Unstructured data"
- Container storage
  - Create multiple containers
  - Each container can contain blobs
  - Can be organized into folders (yes and no)
  - Only pay for what you use
- A storage account in AWS is called Simple Storage Service (S3)
- Location
  - You can create multiple storage accounts in any region of the world
  - Keep your data close to the person/service consuming it (for access speed reasons)
  - Price varies by region
- Redundancy
  - Azure keeps 3 copies of your data by default
  - Locally or zone-redundant
  - Azure will almost never, ever lose a file once it's successfully received it
- Global redundancy
  - You can choose global redundancy for storage
  - Azure keeps 6 copies of your data
  - 3 locally, and 3 in another region of the "geo"
  - Honors data sovereignty laws
- Access tiers
  - Four access tiers:
    - Hot: the default, balanced access
    - Cool: can be set as default, cheaper storage with more expensive read/write operations
    - Cold: much cheaper storage, more expensive to read/write 
    - Archive: cannot get immediate access to files, cheapest storage, most expensive operations
- Failover
  - Hard disks fail every so often
  - Azure takes care of this without you doing anything
  - 3 copies of your data, they can recreate a hard disk behind the scenes

### AZCOPY
- Allows you to do a mass copy from one storage account to another
- Copying data between blob containers
- Copying files within the Azure network, and avoiding using a massive amount of bandwidth (which would be very expensive - don't download terabytes of data, using bandwidth which you'd be charged for)
- Tool that can be used in the cloud shell or downloaded

### Azure Files and Azure File Sync
- Azure Files
  - True hierarchical structure with folders
  - You can "mount" this storage to a server and use a drive letter with it (i.e "S:drive") - Windows, Linux, MacOS
  - Supports SMB, or NFS (Linux)
- Why?
  - Replace or supplement your on-prem file storage
  - Lift and shift migration to the cloud
  - Adds redundancy, data recovery, failover benefits
- Azure File Sync
  - Hybrid option - on-prem files with cloud option
  - Cloud tiering
  - Distributed access
  - Cloud backup

### Azure Migrate
- Tool that examines your existing environment to make your life easier when moving to the cloud
- A tool to help you discover servers and databases in your environment
- Make plans to migrate into Azure
- Which servers can be migrated as-is and which need upgrades

### Azure Data Box
- It's impractical to upload some quantities of data
- There's a suite of options here
  - Data box
  - Data Box disk
  - Data Box Heavy
- Moving your large quantities of data to the cloud quickly
  - Move your on-prem data into one of these Data Box options
  - Ship it to Microsoft for them to load into your account
  - It travels encrypted