**Run a container**
```sh
docker run \
  -d \
  -p 8088:3000 \
  --name <container> \
  --env PORT=3000 \
  --env-file ./.env \
  <image-name>
# -d, --detach        Run container in background and print container ID
# -e, --env list      Set environment variables
#     --name string   Assign a name to the container
# -p, --publish list  Publish a container's port(s) to the host
#     --rm            Automatically remove the container when it exits
# -v, --volume list   Bind mount a volume
```

**List containers**
```sh
docker ps

CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS         PORTS                                       NAMES
53e6336c8097   getting-started   "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   crazy_dirac
```

**Stop a container**
```sh
docker stop <container>
```

**Remove a container**
```sh
docker rm <container>
```

**Start an existing container in the interactive mode**
```sh
docker start -a -i <container>
```

**Stop and remove a container (force)**
```sh
docker rm -f <container>
```
