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

## generate_backend_requirements: generates required things for the backend
generate_backend_requirements:
	@echo "Generating Prisma client..."
	cd ../backend && \
		docker build -f builder.dockerfile -t builder . && \
		rm -rf app/generated && \
		docker run --rm -it -v "$(shell pwd)/../backend/app/generated":/deno-dir/generated builder && \
		docker rmi builder
	@echo "Done!"
