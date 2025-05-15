## 07_ Deploying Airflow on AWS EKS with Kubernetes Executors and Rancher

### AWS EKS
- AWS EKS = Elastic Kubernetes Service
- Makes it easy to deploy, manage and scale containerized apps
- Orchestrate your containers
- Still need to configure subnets, VPS, IAM roles, SSH keys ...
- Integrated with AWS services (like ECR, ELB, IAM ...)

### Steps
- Make sure that AWS CLI v2 tools are installed on my Mac
- Make sure that an AWS EC2 instance is up and going
- Add a new user in AWS IAM (airflow-user) and set up an access key
- Run `aws configure` and use the access key info from a downloaded .csv file to make sure this new user is able to use AWS CLI on my Mac
- Set up a new repo in AWS ECR (airflow-aws)
  - Click on "Push Commands" and go through the steps
  - I used `astro dev init` to get a generic project going, just for this purpose of practicing deployment to AWS EKS
- Getting Rancher installed in the EC2 cloudshell
  - `docker run -d --restart=unless-stopped --name rancher --hostname rancher -p 80:80 -p 443:443 rancher/rancher:v2.4.1`