**Run a container**
```sh
docker run -d -p 8088:3000 --name <container> <image-name>
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
