package auth

import (
	"myledgr-server/models"

	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) FindUserByEmail(email string) (*models.User, error) {
	var user models.User
	if err := r.db.Where("email = ?",email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, nil
		}
		return nil, err
	}

	return &user, nil
}

func (r *Repository) CreateUser(user *models.User) (*models.User, error) {
	createdUser := r.db.Create(user) 
	if createdUser.Error != nil {
		return nil, createdUser.Error
	}
	return user, nil
}