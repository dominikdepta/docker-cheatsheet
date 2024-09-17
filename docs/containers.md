
# Docker Commands

## `docker run`
Runs a new container from a specified image.
```sh
docker run <image> # Run a container from a specified image
docker run -d <image> # Run a container in detached mode
docker run --name <name> <image> # Run a container with a specific name
docker run -p <host_port>:<container_port> <image> # Map host port to container port
docker run --rm <image> # Automatically remove the container when it exits
docker run --volume <host_path>:<container_path> <image> # Mount a volume from the host
docker run --env <key>=<value> <image> # Set an environment variable in the container
docker run --workdir <directory> <image> # Set the working directory inside the container
```

## `docker stop`
Stops one or more running containers.
```sh
docker stop <container_id> # Stop a specific container
docker stop <container_id1> <container_id2> # Stop multiple containers
```

## `docker ps`
Lists all running containers.
```sh
docker ps # List all running containers
docker ps -a # List all containers, including stopped ones
```

## `docker rm`
Removes one or more stopped containers.
```sh
docker rm <container_id> # Remove a specific container
docker rm <container_id1> <container_id2> # Remove multiple containers
```

## `docker container prune`
Removes all stopped containers.
```sh
docker container prune # Remove all stopped containers
```
