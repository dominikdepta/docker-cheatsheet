**Run a container**
```console
$ docker run -d -p 8088:3000 --name <container-name> <image-name>
```

**List containers**
```console
$ docker ps

CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS         PORTS                                       NAMES
53e6336c8097   getting-started   "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   crazy_dirac
```

**Stop a container**
```console
$ docker stop <container-id>
```

**Remove a container**
```console
$ docker rm <container-id>
```

**Stop and remove a container (force)**
```console
$ docker rm -f <container-id>
```

**Copy a file from a continer**
```console
docker run --rm -i --entrypoint=cat nginx /etc/nginx/nginx.conf > ./nginx.conf
```
