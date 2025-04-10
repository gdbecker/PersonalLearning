## 03_ Managing Data and Working with Volumes

### Images, Containers, and Volumes
- When images are created, they have their own file system that's separate from your local file system
- Without volumes, data is locked into the container where it's created - so if the container is deleted, then all the data is as well
- Volumes will persist even when a container is shut down
- A container can read + write data to/from a container
- docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes
- Anonymized volumes are closely attached to one container
- Named volumes are not linked to just one container

### Docker Toolbox Folder Sharing
- https://headsigned.com/posts/mounting-docker-volumes-with-docker-toolbox-for-windows/

### Bind Mounts - Shortcuts
- Use these instead of typing out the full absolute path
- Mac: `-v $(pwd):/app`
- Windows: `-v "%cd%":/app`

### .dockerignore file
- Generally, include items here that you don't need to get your apps to successfully run