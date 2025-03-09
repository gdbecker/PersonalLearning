## 05_ Seeds & Analyses

### Seeds
- [Seeds](https://docs.getdbt.com/docs/build/seeds)
- [Seed configurations](https://docs.getdbt.com/reference/seed-configs)
- Seeds = csv files you can uploaded directly to your data lakehouse as tables
  - Allow you to quickly load in static data without writing SQL or ETL code
- `dbt seed` will load in all csv files in your "seeds" folder to your data lakehouse
  - You can specify the schema where these go with your `dbt_project.yml` file

### Analyses
- [Analyses](https://docs.getdbt.com/docs/build/analyses)