deploy:
	@git pull \
		&& docker-compose -f docker-compose.prod.yml -p api-gateway_$$(git rev-parse --short HEAD) up --build -d api-gateway \
		&& make -s go-live

go-live:
	@make reload-nginx \
		&& sleep 10s \
		&& docker ps --format '{{.ID}} {{.Image}}' | grep "api-gateway_" | grep -v api-gateway_$$(git rev-parse --short HEAD) | awk '{ print $1 }' | xargs -I{} docker stop {} \
		&& make -s reload-nginx

reload-nginx:
	@docker exec $$(docker ps -f name=nginx --quiet) /usr/sbin/nginx -s reload