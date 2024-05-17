# Volumes

**Create a volume**
```sh
docker volume create myapp_data
```

**List volumes**
```sh
docker volume ls
```

**Mount a volume**
```sh
docker run -d \
  --name devtest \
  -v myapp_data:/app \
  -v ./dir:/app/dir
```

**Remove a volume**
```sh
docker volume rm myapp_data
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
