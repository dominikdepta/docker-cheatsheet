**Run a container**
```sh
docker run -d -p 8088:3000 --name <container-name> <image-name>
```

**List containers**
```sh
docker ps

CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS         PORTS                                       NAMES
53e6336c8097   getting-started   "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   crazy_dirac
```

**Stop a container**
```sh
docker stop <container-id>
```

**Remove a container**
```sh
docker rm <container-id>
```

**Stop and remove a container (force)**
```sh
docker rm -f <container-id>
```

**Copy a file to a container**
```sh
docker cp ./file.conf CONTAINER:/app
```

**Copy a file from a container**
```sh
docker cp CONTAINER:/app/file.conf ./
# or
docker run --rm -i --entrypoint=cat nginx /etc/nginx/nginx.conf > ./nginx.conf
```

**Mount a (configuration) file**
```sh
docker run -v ./nginx.conf:/etc/nginx/nginx.conf:ro -d nginx
```
