## 12_ Kubernetes in Action: Diving into the Core Concepts

### Installing Kubernetes
- Minikube setup instructions: https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Fx86-64%2Fstable%2Fbinary+download
- kubectl setup instructions: https://kubernetes.io/docs/tasks/tools/
- Hypervisors
  - VirtualBox is a good option, works for both Mac and Windows

### What you will do (what Kubernetes requires)
- Create the cluster and node instances
- Setup API server, kubelet, and other Kubernetes services/software on nodes
- Create other cloud services as needed (like load balancers and file systems)

### What Kubernetes will do
- Responsible for managing your deployed app and making sure it has everything it needs to run
- Create your objects and manage them (like pods)
- Monitor pods and re-create them, scale them as needed
- Kubernetes utilizes the provided cloud resources to apply your resources and goals