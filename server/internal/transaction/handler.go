package transaction

import "gorm.io/gorm"

type Handler struct {
	service *Service
}

func NewHandler (db *gorm.DB) *Handler {
	repo := NewRepository(db)
	service := NewService(repo)
	return &Handler{service: service}
}

func (h *Handler) CreateTransaction() {

}

func (h *Handler) GetTransactionsByUser() {

}

func (h *Handler) GetTransactionSummaryByUser() {

}

func (h *Handler) UpdateTransaction() {

}

func (h *Handler) DeleteTransaction() {

}