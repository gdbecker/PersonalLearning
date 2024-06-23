## 12_ Cloud Monitoring

### CloudWatch Metrics & CloudWatch Alarms
- CloudWatch Metrics
  - Provides metrics for EVERY service in AWS
  - Metric is a variable to monitor (CPU Utilization, NetworkIn...)
  - Metrics have timestamps
  - Can create CloudWatch dashboards of metrics
- Important metics
  - EC2 instances: CPU utilization, status checks, network (not RAM)
    - Default metrics every 5 minutes
    - Option for detailed monitoring ($$$): metrics every 1 minute
  - EBS volumes: disk read/writes
  - S3 buckets: BucketSizeBytes, NumberOfObjects, AllRequests
  - Billing: total estimated charge (only in us-east-1)
  - Service limits: how much you've been using a service API
  - Custom metrics: push your own metrics
- CloudWatch Alarms
  - Alarms are used to trigger notifications for any metric
  - Alarms actions...
    - Auto scaling: increase or decrease EC2 instances "desired" count
    - EC2 actions: stop, terminate, reboot, or recover an EC2 instance
    - SNS notifications send a notification into an SNS topic
  - Various options (sampling, %, max, min, etc)
  - Can choose the period on which to evaluate an alarm
  - Example: create a billing alarm on the CloudWatch Billing metric
  - Alarm states: OK, INSUFFICIENT_DATE, ALARM

### CloudWatch Logs
- CloudWatch Logs can collect logs from:
  - Elastic Beanstalk: collection of logs from app
  - ECS: collection from containers
  - AWS Lambda: collection from function logs
  - CloudTrail based on filter
  - CloudWatch log agents: on EC2 machines or on-prem servers
  - Route 53: log DNS queries
- Enables real-time monitoring of logs
- Adjustable CloudWatch logs retention
- CloudWatch Logs for EC2
  - By default, no logs from your EC2 instance will go to CloudWatch
  - You need to run a CloudWatch agent on EC2 to push the log files you want
  - Make sure IAM permissions are correct
  - The CloudWatch log agent can be set up on-prem too

### EventBridge (formerly CloudWatch Events)
- Schedule: Cron jobs (scheduled scripts)
  - Example: schedule every hour, trigger script running on a Lambda function
- Event Pattern: event rules to react to a service doing something
  - Example: IAM root user sign-in event, send SNS topic with email notification
- Trigger Lambda functions, send SQS/SNS messages...
- Can receive events from:
  - Default Event Bus (AWS services)
  - Partner Event Bus (Partners like Zendesk or DataDog)
  - Custom Event Bus (your own custom apps)
- Schema Registry: model event schema
- You can archive events (all/filter) sent to an event bus (indefinitely or a set period)
- Ability to replace archived events

### CloudTrail
- Provides governance, compliance and audit for your AWS account
- CloudTrail is enabled by default!
- Get a history of events/API calls made within your AWS account by:
  - Console, SDK, CLI, AWS Services
- Can put logs from CloudTrail into CloudWatch Logs or S3
- A trail can be applied to All Regions (default) or a Single Region
- If a resource is deleted in AWS, investigate CloudTrail first!

## X-Ray
- Debugging in production, the good old way:
  - Test locally
  - Add log statements everywhere
  - Re-deploy in production
- Log formats differ across apps and log analysis is hard
- Debugging: one big monolith "easy", distributed services "hard"
- No common views of your entire architecture
- Enter: AWS X-Ray!
- You can a visual analysis of your app
- Full picture of what's happening for each service
- Advantages
  - Troubleshooting performance (bottlenecks)
  - Understand dependencies in a microservice architecture
  - Pinpoint service issues
  - Review request behavior 
  - Find errors and exceptions
  - Are we meeting time SLA (service level agreement)?
  - Where am I throttled?
  - Identify users that are impacted

## CodeGuru
- An ML-powered service for automated code reviews and application performance recommendations
- Provides two functionalities:
  - CodeGuru Reviewer: automated code reviews for static code analysis (development)
    - Identify critical issues, security vulnerabilities, and hard-to-find bugs
    - Example: common coding best practices, resource leaks, security detection, input validation
    - Uses ML and automated reasoning
    - Hard-learned lessons across millions of code reviews on 1000s of open-source and Amazon repos
    - Supports Java and Python
    - Integrates with GitHub, Bitbucket, and AWS CodeCommit
  - CodeGuru Profiler: visibility/recommendations about app performance during runtime (production)
    - Helps understand the runtime behavior of your app
    - Example: identify if your app is consuming excessive CPU capacity on a logging routine
    - Features:
      - Identify and remove code inefficiencies
      - Improve app performance (like reducing CPU utilization)
      - Decrease compute costs
      - Provides heap summary (identify which objects using up memory)
      - Anomaly detection
    - Support apps running on AWS or on-prem
    - Minimal overhead on application

### AWS Health Dashboard
- Service History
  - Shows all regions, all services health
  - Shows historical info for each day
  - Has an RSS feed you can subscribe to
  - Previously called AWS Service Health Dashboard
- Your Account
  - Previously called AWS Personal Health Dashboard (PHD)
  - AWS Account Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you
  - While the Service Health Dashboard displays the general status of AWS services, Account Health dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources
  - The dashboard displays relevant and timely info to help you manage events in progress and provides proactive notification to help you plan for scheduled activities 
  - Can aggregate data from an entire AWS organization 
  - Global service
  - Shows how AWS outages directly impact you and your AWS resources
  - Alert, remediation, proactive, scheduled activities

### Summary
- CloudWatch
  - Metrics: monitor the performance of AWS services and billing metrics
  - Alarms: automate notification, perform EC2 action, notify to SNS based on metric
  - Logs: collect log files from EC2 instances, servers, Lambda functions...
  - Events (or EventBridge): react to events in AWS, or trigger a rule on a schedule
- CloudTrail
  - Audit API calls made within your AWS account
- CloudTrail Insights: automated analysis of your CloudTrail Events
- X-Ray: trace requests made through your distributed apps
- AWS Health Dashboard: status of all AWS services across all regions
- AWS Account Health Dashboard: AWS events that impact your infrastructure 
- Amazon CodeGuru: automated code reviews and application performance recommendations