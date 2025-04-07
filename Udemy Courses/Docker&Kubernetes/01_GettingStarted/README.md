## 01_ Getting Started

### Installing Docker
- Linux: https://docs.docker.com/engine/install/
- Mac: https://docs.docker.com/desktop/setup/install/mac-install/
- Older systems
  - https://github.com/docker-archive/toolbox/blob/master/docs/toolbox_install_mac.md
  - https://github.com/docker-archive/toolbox/blob/master/docs/toolbox_install_windows.md

### Commands: Running your first Docker container
- Make sure Docker Desktop is open and running in the background
- Drop the Dockerfile in the same directory as the entry point to your app "such as app.js"
- Open a new terminal
- Run the command: docker build ."
- Copy the "writing image" id
- Run this command: "docker run -p 3000:3000 <writing image>"
  - This lets you publish the container to your localhost:3000
- To stop this container
  - Open a new terminal
  - Run the command: "docker ps" to see all containers running
  - Copy the name of the container you want to stop
  - Run: "docker stop <name>"
  - Might take a couple of seconds