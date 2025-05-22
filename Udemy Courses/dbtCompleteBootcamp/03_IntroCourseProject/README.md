## 03_ Intro to the Practical Sessions: dbt and the Airbnb Use Case

### dbt Overview
- Transforms the raw data you have in your warehouse
- Use tools such as
  - Snapshots, transformations, testing, deployment, and documentation
  - Versioning control, alerting, and logging
- Results in transformed data ready to go for other use cases, such as
  - BI reporting
  - Data science analysis

### Course project overview
- You will act as an analytics engineer at Airbnb
- Loading, cleansing, and exposing data
- Writing tests, automations and documentation
- Data source: Inside Airbnb Berlin
  - Downloaded and ready for this project
- Tech stack
  - dbt
  - Snowflake
  - Preset (BI tool)
- Requirements
  - Modeling changes are easy to follow and revert
  - Explicit dependencies between models
  - Explore dependencies between models
  - Data quality tests
  - Error reporting
  - Incremental load of fact tables
  - Track history of dimension tables
  - Easy to access documentation