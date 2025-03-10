## 07_ Materializations

### Overview of Materializations
- [Materialiations](https://docs.getdbt.com/docs/build/materializations#table)
- [Available materializations](https://docs.getdbt.com/best-practices/materializations/2-available-materializations)
- 5 main types of materializations:
- Views
  - When you materialize your model as a view, dbt creates a virtual tables by running a "CREATE VIEW AS" statement
  - The view is rebuilt on each run, so it always shows the latest data
  - ✅ No additional storage costs required, as views don't store data
  - ✅ They always show the latest records from the source
  - ❌ Views can be slow to query
- Tables
  - A tables is created with the "CREATE TABLE AS" statement
  - This means your model is rebuilt as a table on each run from scratch, and the data is physically stored in the database
  - ✅ Faster to query than views
  - ❌ Rebuilding a table can take time
  - ❌ New records are not added unless table is rebuilt
- Incremental Tables
  - Are stored as tables, and allow you to update only the new or updated records since the last run, which can dramatically reduce build times
  - ✅ Same pros as tables
  - ✅ You only need to process new records, faster to run
  - ❌ Requires extra configuration
- Ephemeral
  - These are models that don't persist data in your lakehouse. Instead, they get compiled into a subquery wherever they are referenced
  - ✅ Re-use login without storing intermediate results
  - ✅ Reduce the number of physical tables
  - ❌ You can't query an ephemeral model directly
  - ❌ Overuse can make queries hard to debug/slow down execution
- Snapshots
  - Allow you to track changes over time
  - This is important for slowly changing dimensions (SCD)
  - ✅ Maintain historical records of data and track changes over tme
  - ❌ Require extra storage
  - ❌ Require additional configuration

### Incremental Tables
- [Incremental models](https://docs.getdbt.com/docs/build/incremental-models)

### Common Table Expressions (CTEs)
- [CTEs](https://www.getdbt.com/blog/guide-to-cte)

### Ephemeral Materializations
- [Ephemeral materializations](https://docs.getdbt.com/docs/build/materializations#ephemeral)

### Snapshots and SCD Type 2
- [Snapshots](https://docs.getdbt.com/docs/build/snapshots)
- [dbt build command](https://docs.getdbt.com/reference/commands/build)
- [dbt snapshot command](https://docs.getdbt.com/reference/commands/snapshot)
- SCD Type 1 = overwrites old data with new data, so no history is kept
- SCD Type 2 = keeps historical data by creating new rows for each change, with timestamps for validity periods

### Databricks Specific Table Configurations
- [Databricks configurations](https://docs.getdbt.com/reference/resource-configs/databricks-configs)

