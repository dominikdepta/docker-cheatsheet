
# Compose

## `docker compose up`
Creates and starts containers defined in `docker-compose.yml`.
```sh
docker compose up # starts all services
docker compose up -d # starts services in detached mode
```

## `docker compose down`
Stops and removes containers, networks, and volumes created by `docker compose up`.
```sh
docker compose down # Stop and remove containers and networks
docker compose down --volumes # Stop and remove containers, networks, and volumes
```

## `docker compose build`
Builds or rebuilds services specified in `docker-compose.yml`.
```sh
docker compose build # Build all services
docker compose build <service> # Build a specific service
```

## `docker compose logs`
Shows logs from containers defined in `docker-compose.yml`.
```sh
docker compose logs # View logs for all services
docker compose logs <service> # View logs for a specific service
```

## `docker compose start`
Starts existing containers for services defined in `docker-compose.yml`.
```sh
docker compose start # Start all stopped services
docker compose start <service> # Start a specific stopped service
```

## `docker compose stop`
Stops running containers without removing them.
```sh
docker compose stop # Stop all running services
docker compose stop <service> # Stop a specific running service
```

## `docker compose restart`
Restarts running containers for services.
```sh
docker compose restart # Restart all running services
docker compose restart <service> # Restart a specific service
```

## `docker compose exec`
Executes a command in a running container.
```sh
docker compose exec <service> <command> # Run a command in a specific service container
docker compose exec <service> /bin/sh # Run a shell in a specific service container
```

## `docker compose run`
Runs a one-time command against a service. Creates a new container and runs the command.
```sh
docker compose run <service> <command> # Run a command in a new container for a service
docker compose run <service> /bin/sh # Run a shell in a new container for a service
```

## `docker compose ps`
Lists containers related to the services defined in `docker-compose.yml`.
```sh
docker compose ps # List all containers
```

## `docker compose config`
Validates and views the configuration in `docker-compose.yml`.
```sh
docker compose config # View the configuration
```
