**Create and start containers**
```sh
docker compose up
# --build                   Build images before starting containers
# -d, --detach              Detached mode: Run containers in the background
# --force-recreate          Recreate containers even if their configuration and image haven't changed
# -V, --renew-anon-volumes  Recreate anonymous volumes instead of retrieving data from the previous containers
```


**Watch build context for service and rebuild/refresh containers when files are updated**
```sh
docker compose watch
```

**Stop and remove containers, networks**
```sh
docker compose down
# -rmi string     Remove images used by services. "local" remove only images that don't have a custom tag ("local"|"all")
# -v, --volumes   Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers
```
