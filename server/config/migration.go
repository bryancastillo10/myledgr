package config

import (
	"flag"
	"myledgr-server/infrastructure"

	"log"
	"os"
)

func HandleMigrationFlag() {
	migrateFlag := flag.Bool("migrate", false, "run db migration and exit")
	flag.Parse()

	if *migrateFlag {
		infrastructure.ConnectDb()

		log.Println("Starting automigrate...")
		infrastructure.SyncDatabaseSchema()

		log.Println("✅ Successful migration, exiting...")
		os.Exit(0)
	} else {
		log.Println("Skipping db migration (flag was not set)")
	}
}