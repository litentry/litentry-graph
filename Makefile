deploy:
	@git pull \
		&& docker-compose -f docker-compose.prod.yml -p graphql-server_$$(git rev-parse --short HEAD) up --build -d graphql-server \
		&& make -s go-live

go-live:
	@make -s reload-nginx \
		&& sleep 10s \
		&& docker ps --format '{{.ID}},{{.Image}}' | grep "graphql-server_" | grep -v graphql-server_$$(git rev-parse --short HEAD) | awk -F, '{ print $$1 }' | xargs -I@ docker stop @ \
		&& make -s reload-nginx \
		&& docker system prune -a --force

reload-nginx:
	@docker exec $$(docker ps -f name=nginx --quiet) /usr/sbin/nginx -s reload