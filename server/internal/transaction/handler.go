package transaction

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Handler struct {
	service *Service
}

func NewHandler (db *gorm.DB) *Handler {
	repo := NewRepository(db)
	service := NewService(repo)
	return &Handler{service: service}
}

func (h *Handler) CreateTransaction(c *gin.Context) {

}

func (h *Handler) GetTransactionsByUser(c *gin.Context) {

}

func (h *Handler) GetTransactionSummaryByUser(c *gin.Context) {

}

func (h *Handler) UpdateTransaction(c *gin.Context) {

}

func (h *Handler) DeleteTransaction(c *gin.Context) {

}