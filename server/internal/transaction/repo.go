package transaction

import "gorm.io/gorm"

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) CreateTransaction() {

}

func (r *Repository) GetTransactionsByUser() {

}

func (r *Repository) GetTransactionSummaryByUser() {

}

func (r *Repository) UpdateTransaction() {

}

func (r *Repository) DeleteTransaction() {

}