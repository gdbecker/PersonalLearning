## 06_ Node Selection Syntax

### Select
- [dbt article: --select](https://docs.getdbt.com/reference/node-selection/syntax)
- Select resources to build (run, test, seed, snapshot) or check freshness: `--select`, `-s`

### Exclude
- [dbt article: --exclude](https://docs.getdbt.com/reference/node-selection/exclude)
- Models specified with the `--exclude` flag will be removed from the set of models selected with `--select`

### List
- [dbt article: dbt ls](https://docs.getdbt.com/reference/commands/list)
- The `dbt ls` command lists resources in your dbt project. It accepts selector arguments that are similar to those provided in `dbt run`