## 05_ Theory - Slowly Changing Dimensions (SCD)

### Type 0
- Retain the original
- Not updating the data warehouse table when a dimension changes (so only the source table is changed)

### Type 1
- Overwrite
- Updating the data warehouse table when a dimension changes, overwriting the original data
- Don't need to maintain history of what the value was before

### Type 2
- Add new row
- Keeping the full history: adding additional (historical data) rows for each dimension change
- But data storage also increases

### Type 3
- Add new attribute
- Keeping a limited data history, by adding separate columns for the original and current values