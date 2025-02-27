## 12_ Modularize Code and Link Notebooks

### Running a Notebook from Another Notebook
- [Orchestrate notebooks and modularize code in notebooks](https://learn.microsoft.com/en-us/azure/databricks/notebooks/notebook-workflows)
- The "exit" command should be in the last cell of the notebook. This is because it 'exits' the notebook after the cell has run, so any code below will not get executed

### Defining Functions to Store Reusable Logic
- [Comparison of %run and dbutils.notebook.run()](https://learn.microsoft.com/en-us/azure/databricks/notebooks/notebook-workflows#comparison-of-run-and-dbutilsnotebookrun)
- Break down complex tasks into smaller, manageable units

### Registering Functions for SQL
- [Registering Functions](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.UDFRegistration.register.html)

### Python User Defined Functions (UDFs)
- [What are user-defined functions (UDFs)?](https://learn.microsoft.com/en-us/azure/databricks/udf/)
- [Spark length function](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.functions.length.html)
- [Python len function](https://docs.python.org/3/library/functions.html)