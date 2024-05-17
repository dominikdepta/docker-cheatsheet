# Volumes

**Create a volume**
```sh
docker volume create myapp_data
```

**List volumes**
```sh
docker volume ls
```

**Inspect a volume**
```sh
docker volume inspect myapp_data
[
    {
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/myapp_data/_data",
        "Name": "myapp_data",
        "Options": {},
        "Scope": "local"
    }
]
```

**Mount a volume**
```sh
docker run -d \
  --name devtest
  -v myapp_data:/app
```
```sh
docker run -d \
  --name devtest \
  --mount source=myapp_data,target=/app/data \
  nginx:latest
```

**Remove a volume**
```sh
docker volume rm myapp_data
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
