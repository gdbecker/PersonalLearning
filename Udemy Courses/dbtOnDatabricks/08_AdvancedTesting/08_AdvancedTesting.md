## 08_ Advanced Testing

### Recap and Overview
- [Generic and singular tests](https://docs.getdbt.com/docs/build/data-tests#singular-data-tests)

### Test Selection
- [Test selection](https://docs.getdbt.com/reference/node-selection/test-selection-examples?indirect-selection-mode=eager)

### Additional Test Configurations
- [Data test configurations](https://docs.getdbt.com/reference/data-test-configs)

### Custom Generic Tests
- [Custom generic tests](https://docs.getdbt.com/best-practices/writing-custom-generic-tests)

### Testing with dbt_utils
- [dbt_utils](https://hub.getdbt.com/dbt-labs/dbt_utils/latest/)

### Testing with dbt_expectations
- [dbt_expectations](https://hub.getdbt.com/calogica/dbt_expectations/latest/)

### Intro to Unit Testing in dbt
- [Unit tests](https://docs.getdbt.com/docs/build/unit-tests)
- Unit Testing = software development practice
- Tests individual pieces of code (like functions or modules) in isolation
- Purpose: ensure components work correctly before integration
- Helps catch errors eagerly, ensuring reliable code
- dbt deals with SQL and data transformations, not procedural code
- Unit Tests in dbt validate specific login within data models
- Focus on ensuring transformations behave as expected

| Generic Tests | Singular Tests | Unit Tests |
|--|--|--|
| Predefined tests | Custom SQL queries for specific business logic | Isolate and test specific transformations or model logic |
| Applied at the column level | Tailored to specific conditions and edge cases | Validate components in isolation |
| Ensure basic data quality | Focused on catching complex logic errors | Ensure accuracy before integrating into broader workflows |
| Broad and reusable across multiple models |  | Enforce before model materializes |