package user

import "gorm.io/gorm"

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) GetUser() {

}

func (r *Repository) GetAllUsers() {

}

func (r *Repository) UpdateUser() {

}

func (r *Repository) DeleteUser() {

}