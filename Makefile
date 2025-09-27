.DEFAULT_GOAL := start-api

# Constants --------------
API_PORT := 3000
DB_PATH := ./data/db/
DB_FILE := api-db.json

create-database:
	mkdir -p $(DB_PATH)
	cp $(DB_FILE) $(DB_PATH)

reset-database:
	rm -rf $(DB_PATH)

start-api: create-database
	@echo "--------------------------------"
	@echo "🧙 Spell API"
	@echo "--------------------------------"
	npx json-server "$(DB_PATH)/$(DB_FILE)" --port $(API_PORT)

.PHONY: create-database reset-database start-api
