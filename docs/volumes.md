# Volumes

**Create a volume**
```sh
docker volume create my-vol
```

**List volumes**
```sh
docker volume ls
```

**Inspect a volume**
```sh
docker volume inspect my-vol
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
```sh
docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
```

**Remove a volume**
```sh
docker volume rm myvol2
```

**Docker Compose**
```yaml
# volume
todo-database:
    # ...
    volumes:
      - database:/data/db

# ...
volumes:
  database:
```

```yaml
# bind volume
todo-app:
    # ...
    volumes:
      - ./app:/usr/src/app
      - /usr/src/app/node_modules
```
