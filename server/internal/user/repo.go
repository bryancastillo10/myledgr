package user

import (
	"errors"
	"myledgr-server/models"
	appErr "myledgr-server/pkg/errors"

	"github.com/google/uuid"

	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) GetUser(uid uuid.UUID) (*models.User, error) {
	var user models.User
	if err := r.db.First(&user, "id = ?",uid).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, appErr.NewNotFound("User not found", err)
		}
		return nil, appErr.NewInternal("Failed to get the user details",err)
	}
	return &user, nil
}

func (r *Repository) GetAllUsers() ([]models.User, error) {
	var users []models.User
	if err := r.db.Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

func (r *Repository) UpdateUser() {

}

func (r *Repository) DeleteUser() {

}