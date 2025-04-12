## 06_ Docker Compose: Elegant Multi-Container Orchestration

### Docker Compose
- Replace all build and run commands with one config file
- Define the orchestration steps
- This does not replace the Dockerfiles for custom images
- It's not good for multi-machine configurations
- Automatically creates a network for all containers specified and puts them all there
- Running the Docker compose config: `docker compose up -d`
- Stop everything: `docker compose down`