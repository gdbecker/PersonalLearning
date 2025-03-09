## 04_ Generic & Singular Tests

### Testing
- Generic tests
  - Pre-built, reusable tests applicable across multiple models or columns
  - Minimal configuration required; no SQL or Python needed
  - Common generic tests:
    - Unique: ensures column values are unique
    - Not Null: checks that columns do not contain null values
    - Accepted Values: validates that the column contains predefined values
    - Relationships: ensures referential integrity between tables
- Singular tests
  - Custom tests for specific login or conditions not covered by generic tests
  - Written in SQL for tailored testing to meet unique data needs
  - Powerful for defining complex conditions or business rules
  - Examples
    - Ensuring quantity is > 0

### (FYI) "tests" vs "data_tests": Different Names, Same Thing
- [New data_tests syntax](https://docs.getdbt.com/docs/build/data-tests#new-data_tests-syntax)

### Generic Tests on Sources
- [Generic tests](https://docs.getdbt.com/docs/build/data-tests#generic-data-tests)

### Generic Tests on Models
- [Generic tests](https://docs.getdbt.com/docs/build/data-tests#generic-data-tests)

### Singular Tests
- [Singular tests](https://docs.getdbt.com/docs/build/data-tests#singular-data-tests)
- These tests pass when 0 rows are returned for the query you write 
  - You don't want anything to come up for these, or else there's an issue

### dbt test
- Use `dbt test` to run all generic and singular tests

### dbt Build
- [dbt Build](https://docs.getdbt.com/reference/commands/build)
- Think of `dbt build` as the combo of `dbt run` and `dbt test`