## 03_ Columnstore Indexes

### Rowstore Query
- All the rows are being brought into system memory, even if they're not being used
- Can waste amounts of I/O capacity

### Columnstore on Disk
- Each page contains just one column

### Columnstore Query
- Queries only pull the pages needed
- Queries can return results faster
- Way less wasted I/O capacity

### Columnstore Performance
- Columns of a single data type are highly compressed
- Higher compression increases in-memory utilization
- Smaller subset of columns requested reduce load on system resources
- 