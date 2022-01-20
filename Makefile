deploy:
	@docker-compose -f docker-compose.prod.yml stop \
		&& git pull \
		&& docker-compose -f docker-compose.prod.yml up --build -d