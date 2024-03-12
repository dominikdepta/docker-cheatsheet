Docker isolates all content, code, and data in a container from your local filesystem. When you delete a container, Docker deletes all the content within that container.

Sometimes, you may want to persist the data that a container generates. To do this, you can use volumes.

```yaml
todo-database:
    # ...
    volumes:
      - database:/data/db

# ...
volumes:
  database:
```

**Create a volume**
```console
$ docker volume create my-vol
```

**List volumes**
```console
$ docker volume ls
```

**Inspect a volume**
```console
$ docker volume inspect my-vol
[
    {
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/my-vol/_data",
        "Name": "my-vol",
        "Options": {},
        "Scope": "local"
    }
]
```

**Mount a volume**
```console
$ docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
```

**Remove a volume**
```console
$ docker volume rm myvol2
```
