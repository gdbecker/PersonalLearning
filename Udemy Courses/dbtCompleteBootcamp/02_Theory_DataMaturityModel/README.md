## 02_ Theory - The Data Maturity Model

### Maslow's Pyramid of Data
- From bottom to top:
  - Data collection
    - Extraction of data from different sources
    - Could be batch or streaming, depends on the source and what you need
    - Different formats and frequencies
  - Data wrangling
    - Find inconsistencies and missing data
    - Clean things up as much as possible
    - Fixing errors and wrong formats
  - Data integration (stopping here for this course, from the top)
    - Writing data to the target location (typically the data warehouses)
    - Analytics workload performed at this stage
  - BI and analytics
  - Artificial intelligence

### ETL and ELT
- ETL = extract, transform, load
  - Lower storage requirement
- ELT = extract, load, transform
  - Some warehouses are better equipped to handle transformation steps
  - High scalability
  - Easier testing and debugging
  - Higher flexibility