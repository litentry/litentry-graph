deploy:
	@git pull \
		&& docker-compose -f docker-compose.prod.yml -p api-gateway_$$(git rev-parse --short HEAD) up api-gateway --build -d \
		&& make go-live

go-live:
	@make reload-nginx \
		&& docker ps --filter "label=com.docker.compose.project" -q | xargs docker inspect --format='{{index .Config.Labels "com.docker.compose.project"}}'| sort | uniq | grep -v api-gateway_$$(git rev-parse --short HEAD) | xargs -I{} docker-compose -f docker-compose.prod.yml -p {} down \
		&& make reload-nginx

reload-nginx:
	@docker exec $$(docker ps -f name=nginx --quiet) /usr/sbin/nginx -s reload