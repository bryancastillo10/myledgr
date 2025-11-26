package utils

import (
	"fmt"
	"os"
	"time"

	"myledgr-server/models"
	appErr "myledgr-server/pkg/errors"

	"github.com/golang-jwt/jwt"
)

type UserClaims struct {
	UserID string `json:"userId"`
	Email string `json:"email"`
	jwt.StandardClaims
}

func GenerateJWT(user *models.User) (string, error) {
	claims := jwt.MapClaims{
		"userId": user.ID.String(),
		"role":   user.Role,
		"exp":    time.Now().Add(time.Hour * 5).Unix(), //5 hour token expiration
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	secret := os.Getenv("JWT_SECRET")

	tokenStr, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", err
	}

	return tokenStr, nil
}


func ParseJWT(tokenStr string) (*UserClaims, error) {
	token, err := jwt.ParseWithClaims(tokenStr, &UserClaims{},

		// Token Validation
		func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, appErr.NewUnauthorized("Invalid signing method: %v",
					fmt.Errorf("Unexpected algorithm: %v", token.Header["alg"]))
			}

			return []byte(os.Getenv("JWT_SECRET")), nil
		})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*UserClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, appErr.NewUnauthorized("invalid token: %v", err)
}
