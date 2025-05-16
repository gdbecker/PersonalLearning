## 09_ Security in Apache Airflow

### Airflow Security Documentation
- https://airflow.apache.org/docs/apache-airflow/stable/security/index.html

### What to Expect from Airflow 2.0
- Scheduler high availability
  - Performance, scalability, and resiliency
  - Active-Active model
  - No new components
- DAG serialization
  - Stateless web server
  - Lazy loading of DAGs
  - Stateless scheduler soon
- DAG versioning
  - Provide maintenance DAGs
  - Storing multiple versions of serialized DAGs
  - Graph view show the DAgs associated with that DAG run
- REST API
  - Stable version
  - Follows Open API 3.0 specification
  - Way more endpoints
- KEDA autoscaling
  - KEDA = Kubernetes event-driven autoscaling
- KEDA queues
  - Queues were expensive (pre-allocation)
  - With KEDA, queues are way cheaper (scale to 0)
  - Kubernetes queues are customizable (worker size, GPU, ...)
- Functional DAGs
  - Easy way to convert functions to tasks
  - Simplified way of writing DAGs
  - Pluggable XCom storage engine
- Smaller changes
  - Connection IDs must be unique
  - Python 3.5 > only
  - RBAC UI only
  - Import of operators has changed