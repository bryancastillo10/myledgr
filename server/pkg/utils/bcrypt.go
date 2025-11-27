package utils

import (
	appErr "myledgr-server/pkg/errors"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
	hashedBytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", appErr.NewInternal("Failed to hash password %v", err)
	}
	hashedPassword := string(hashedBytes)

	return hashedPassword, nil
}

func ValidatePassword(hashedPassword, plainPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(plainPassword))
}
