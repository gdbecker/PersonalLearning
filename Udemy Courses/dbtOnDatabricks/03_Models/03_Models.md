## 03_ Models

### Medallion Architecture
- A medallion architecture is a data design pattern used to logically organize data in a lakehouse, with the goal of incrementally and progressively improving the structure and quality of data as it flows through each layer of the architecture (from Bronze > Silver > Gold layer tables)
- Bronze
  - Raw, ingested data
  - Minimal transformation
  - Primarily for storage and historical tracking
- Silver
  - Cleaned and transformed
  - Enriched and reliable
- Gold
  - Refined
  - Aggregated
  - Reporting and BI ready

### First Look at dbt Models
- [dbt run](https://docs.getdbt.com/reference/commands/run)
- [dbt compile](https://docs.getdbt.com/reference/commands/compile)
- [dbt Materializations](https://docs.getdbt.com/docs/build/materializations)
- dbt models are materialized as views by default, unless specified to be tables or another type in dbt_project.yml

### Cleaning Compiled Code
- [dbt clean](https://docs.getdbt.com/reference/commands/clean)

### Modeling the Bronze Layer and Sources
- [Adding sources to your DAG](https://docs.getdbt.com/docs/build/sources)
- [Source function](https://docs.getdbt.com/reference/dbt-jinja-functions/source)

### Source Freshness
- [freshness](https://docs.getdbt.com/reference/resource-properties/freshness)

### Modeling the Silver Layer
- [ref function](https://docs.getdbt.com/reference/dbt-jinja-functions/ref)
- [date_format function](https://learn.microsoft.com/en-us/azure/databricks/sql/language-manual/functions/date_format)

### Folder Structure and Naming Conventions
- [Folder structure](https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview#guide-structure-overview)
- [Naming conventions](https://docs.getdbt.com/blog/stakeholder-friendly-model-names)
- Staging = Bronze
- Intermediate = Silver
- Marts = Gold

### Intro to Properties and Configurations
- [Model properties](https://docs.getdbt.com/reference/model-properties)
- [Model configurations](https://docs.getdbt.com/reference/model-configs)
- The closest config settings to a model are what get implemented
  - So the config block within a sql model file is ultimately what gets used if present
  - Or the properties.yml file at the folder level for the medallion architecture layer or above at the models folder level
  - Or at the dbt_project.yml file level 

### Custom Schema Configuration
- [Custom schemas](https://docs.getdbt.com/docs/build/custom-schemas#how-does-dbt-generate-a-models-schema-name)

### Node Selection 
- [Node selection syntax](https://docs.getdbt.com/reference/node-selection/syntax)