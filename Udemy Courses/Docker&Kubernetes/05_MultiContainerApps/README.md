## 05_ Building Multi-Container Applications with Docker

### Dockerizing each section, first step
- MongoDB service
  - Container: `docker run --name mongodb --rm -d -p 27017:27017 mongo`
- Node.js backend
  - Image: `docker build -t goals-node .`
  - Container: `docker run --name goals-backend --rm -d -p 80:80 goals-node`
- React frontend
  - Image: `docker build -t goals-react`
  - Container: `docker run --name goals-frontend --rm -p 3000:3000 -it goals-react`

### Adding Docker networks for more efficient cross-container communication
- New network: `docker network create goals-net`
- MongoDB service
  - Container: `docker run --name mongodb -v data:/data/db --rm -d --network goals-net -e MONGO_INITDB_ROOT_USERNAME=garrett -e MONGO_INIT_ROOT_PASSWORD=secret mongo`
- Node.js backend
  - Container: `docker run --name goals-backend -v logs:/app/logs -v /Users/garrettbecker/GitHub/PersonalLearning/Udemy Courses/Docker&Kubernetes/05_MultiContainerApps/multi/backend:/app -v /app/node_modules --rm -d -p 80:80 --network goals-net goals-node`
- React frontend
  - Container: `docker run -v /Users/garrettbecker/GitHub/PersonalLearning/Udemy Courses/Docker&Kubernetes/05_MultiContainerApps/multi/frontend/src:/app/src --name goals-frontend --rm -p 3000:3000 -it goals-react`
  - The React frontend is running in the browser and doesn't need our Docker network "goals-net"