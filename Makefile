dev:
	docker compose build flask-app && docker compose up -d && node ./db/dev-seed.js && npm run dev