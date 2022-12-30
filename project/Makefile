## up: starts all containers in the background
up:
	@echo "Starting Docker images..."
	docker-compose up -d
	@echo "Docker images started!"

## up: builds and starts all containers in the background
up_build:
	@echo "Building and starting Docker images..."
	docker-compose up --build -d
	@echo "Docker images started!"

## down: stop docker compose
down:
	@echo "Stopping docker compose..."
	docker-compose down
	@echo "Done!"

## build_backend: builds the necessary things for the backend
build_backend:
	@echo "Building Prisma client..."
	cd ../backend/app && 
	@echo "Done!"
