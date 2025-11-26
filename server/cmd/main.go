package main

import (
	"myledgr-server/config"
	"myledgr-server/infrastructure"
)

func main() {
	config.LoadEnvVariables()

	// add --migrate in running Go if it needs db migration
	config.HandleMigrationFlag()

	infrastructure.ConnectDb()
	infrastructure.RunGin(config.CORS())
}
