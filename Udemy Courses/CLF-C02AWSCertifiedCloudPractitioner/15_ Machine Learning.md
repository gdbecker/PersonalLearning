## 15_ Machine Learning

### Rekognition
- Find objects, people, text, scenes in images and videos using ML
- Facial analysis and facial search to do user verification, people counting
- Create a database of "familiar faces" ot compare against celebrities
- Use cases
  - Labeling
  - Content moderation
  - Text detection
  - Face detection and analysis (gender, age range, emotions...)
  - Face search and verification
  - Celebrity recognition
  - Pathing (for sports games analysis)

### Transcribe
- Automatically convert speed to text
- Uses a deep learning process called automatic speech recognition (ASR) to convert speech to text quickly and accurately
- Automatically remove Personally Identifiable Information (PII) using Redaction
- Supports Automatic Language Identification for multi-lingual audio
- Use cases
  - Transcribe customer service calls
  - Automate closed captioning and subtitling
  - Generate metadata for media assets to create a fully searchable archive

### Polly
- Turn text into lifelike speech using deep learning
- Allowing you to create apps that talk

### Translate
- Natural and accurate language translation
- Allows you to localize content, such as websites and apps, for international users, and to easily translate large volumes of text efficiently

### Lex + Connect
- Amazon Lex: same technology that powers Alexa
  - Automatic Speech Recognition (ASR) to convert speech to text
  - Natural Language Understanding to recognize the intent of text, callers
  - Helps build chatbots, call center bots
  - For ASR
- Amazon Connect
  - Receive calls, create contact flows, cloud-based virtual contact center
  - Can integrate with other CRM systems or AWS
  - No upfront payments, 80% cheaper than traditional contact center solutions
  - For contact centers

### Comprehend
- For Natural Language Processing (NLP)
- Fully managed and serverless service
- Uses ML to find insights and relationships in text
  - Language of the text
  - Extracts key phrases, places, people, brands, or events
  - Understands how positive or negative the text is
  - Analysis text using tokenization and parts of speech
  - Automatically organizes a collection of text files by topic
- Sample use cases
  - Analyze customer interactions (emails) to find what leads to a positive or negative experience
  - Create and group articles by topics that Comprehend will uncover

### SageMaker
- Fully managed service for developers/data scientists to build ML models
- Typically difficult to do all the processes in one place + provision servers
- ML process (simplified): predicting your exam score
  - Gather historical data
  - Label that data - factors feeding into the variable to predict: scores
  - Build the ML model - how can I predict scores from the data I have?
  - Train the tune the model
  - Deploy the model
  - Get new data, apply the deployed model
  - Deployed model makes a prediction

### Forecast
- Fully managed service that uses ML to deliver highly accurate forecasts
- Example: predict the future sales of a raincoat
- 50% more accurate than looking at the data itself
- Reduce forecasting time from months to hours
- Use cases: Product demand planning, financial planning, resource planning...

### Kendra
- Fully managed document search service powered by ML
- Extract answers from within a document (text, pdf, HTML PowerPoint, MS Word, FAQs...)
- Natural language search capabilities
- Learn from the user interactions/feedback to promote preferred results (incremental learning)
- Ability to manually fine-tune search results (importance of data, freshness, custom...)

### Personalize
- Fully managed ML service to build apps with real-time personalized recommendations
- Example: personalized product recommendations/re-ranking, customized direct marketing
- Example: user bought gardening tools -> provide recommendations on the next one to buy
- Same technology used by Amazon.com
- Integrates into existing websites, apps, SMS, email marketing systems...
- Implement in days, not months (you don't need to build, train, and deploy ML solutions)
- Use cases
  - Retail stores
  - Media and entertainment

### Textract
- Automatically extracts text, handwriting and data from any scanned documents using AI and ML
- Extract data from forms and tables
- Read and process any type of document (PDFs, images...)
- Use cases
  - Financial services (invoices, financial reports)
  - Healthcare (medical records, insurance claims)
  - Public Sector (tax forms, ID documents, passports)

### Summary
- Rekognition: face detection, labeling, celebrity recognition
- Transcribe: audio to text (like subtitles)
- Polly: text to audio
- Translate: translations
- Lex: build conversational bots - chatbots
- Connect: cloud contact center
- Comprehend: natural language processing
- SageMaker: ML for every developer and data scientist
- Forecast: build highly accurate forecasts
- Kendra: ML-powered search engine
- Personalize: real-time personalized recommendations