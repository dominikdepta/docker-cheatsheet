**Run a container**
```console
$ docker run -d -p 8088:3000 --name <container-name> <image-name>
```

**List containers**
```console
$ docker ps
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
