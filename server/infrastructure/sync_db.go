package infrastructure

import (
	"log"
	"myledgr-server/models"
)

func SyncDatabaseSchema() {
	log.Println("Syncing declared database schema...")

	err := DB.AutoMigrate(
		&models.User{},
		&models.PasswordReset{},
		&models.Transaction{},
	)

	if err != nil {
		log.Fatalf("Failed to auto-migrate the provided db schema: %v", err)
		return
	}

	log.Println("Database schema migration has been completed")
}
