
# Docker Copy and Mount

## `docker cp`
Copies files or folders between a container and the local filesystem.

### Copy a file to a container
```sh
docker cp ./file.conf CONTAINER:/app # Copy file.conf from the local filesystem to /app in the container
```

### Copy a file from a container
```sh
docker cp CONTAINER:/app/file.conf ./ # Copy file.conf from /app in the container to the local filesystem
# or
docker run --rm -i --entrypoint=cat nginx /etc/nginx/nginx.conf > ./nginx.conf # Copy nginx.conf from the container to the local filesystem
```

## `docker run -v`
Mounts a file or directory from the local filesystem into the container.

### Mount a (configuration) file
```sh
docker run -v ./nginx.conf:/etc/nginx/nginx.conf:ro -d nginx # Mount nginx.conf from the local filesystem to /etc/nginx/nginx.conf in the container
```
