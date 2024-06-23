## 11_ Cloud Integrations

### Overview
- When we start deploying multiple apps, they will inevitably need to communicate with one another
- There are two patterns of application communication:
  - Synchronous communications (application to application)
  - Asynchronous/event based (application to queue to application)
- Synchronous between apps can be problematic if there are sudden spikes of traffic
- What if you suddenly encode 1000 videos but usually it's 10?
- In that case, it's better to decouple your apps:
  - using SQS: queue model
  - using SNS: pub/sub model
  - using Kinesis: real-time data streaming model
- These services can scale independently from our app

### SQS (Simple Queue Service)
- Amazon SQS - Standard Queue
  - Oldest AWS offering (over 10 years old)
  - Fully managed service (serverless), use the decouple apps
  - Scales form 1 message per second to 10,000s per second
  - Default retention of messages: 4 days, max of 14 days
  - No limit to how many messages can be in the queue
  - Messages are deleted after they're read by consumers
  - Low latency (< 10 ms on publish and receive)
  - Consumers share the work to read messages and scale horizontally
- SQS to decouple between application tiers
- Amazon SQS - FIFO
  - FIFO = First In First Out (ordering of messages in the queue)
  - Messages are processed in order by the consumer

### Kinesis
- For the exam: Kinesis = real-time big data streaming
- Managed service to collect, process, and analyze real-time streaming data at any scale
- Too detailed for this exam, but good to know:
  - Kinesis Data Streams: low latency streaming to ingest data at scale from hundreds of thousands of sources
  - Kinesis Data Firehose: load streams into S3, Redshift, ElasticSearch, etc...
  - Kinesis Data analytics: perform real-time analytics on streams using SQL
  - Kinesis Video Streams: monitor real-time video streams for analytics or ML

### SNS
- What if you want to send one message to many receivers?
- Instead of direct integration, use Pub/Sub
- SNS = Simple Notification Service
- The "event publishers" only sends message to one SNS topic
- As many "event subscribers" as we want to listen to the SNS topic notifications
- Each subscriber to the topic will get all the messages
- Up to 12,500,000 subscriptions per topic, 100,000 topics limit

### Amazon MQ
- SQS, SNS are "cloud-native" services: proprietary protocols from AWS
- Traditional apps running from on-prem may use open protocols such as: MQTT, AMQP, STOMP, OpenWire, WSS
- When migrating to the cloud, instead of re-engineering the app to use SQS and SNS, we can use Amazon MQ
- Amazon MQ is a managed message broker service for
  - RabbitMQ
  - ActiveMQ
- Doesn't "scale" as much as SQS/SNS
- Runs on servers, can run in multi-AZ with failover
- Has both queue feature (~SQS) and topic features (~SNS)

### Summary
- SQS
  - Queue service in AWS
  - Multiple producers, messages are kept up to 14 days
  - Multiple consumers share the read and delete messages when done
  - Used to decouple apps in AWS
- SNS
  - Notification service in AWS
  - Subscribers: email, Lambda, SQS, HTTP, Mobile...
  - Multiple subscribers, send all messages to all of them
  - No message retention
- Kinesis
  - Real-time data streaming, persistence and analysis
- Amazon MQ
  - managed message broker for ActiveMQ and RabbitMQ in the cloud (MQTT, AMQT, protocols)