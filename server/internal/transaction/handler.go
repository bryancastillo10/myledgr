package transaction

import (
	http_helper "myledgr-server/pkg/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Handler struct {
	service *Service
}

func NewHandler(db *gorm.DB) *Handler {
	repo := NewRepository(db)
	service := NewService(repo)
	return &Handler{service: service}
}

func (h *Handler) CreateTransaction(c *gin.Context) {
	req, err := http_helper.BindJSON[TransactionItem](c)
	if err != nil {
		c.Error(err)
		return
	}

	userId, err := http_helper.ExtractUserIDFromContext(c)
	if err != nil {
		c.Error(err)
		return
	}

	newTransaction, err := h.service.CreateTransaction(*req, userId)
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(200, gin.H{
		"message":     "New transaction has been added",
		"transaction": newTransaction,
	})
}

func (h *Handler) GetTransactionsByUser(c *gin.Context) {
	userId, err := http_helper.ExtractUserIDFromContext(c)
	if err != nil {
		c.Error(err)
		return
	}

	transactions, err := h.service.GetTransactionsByUser(userId)
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(200, transactions)
}

func (h *Handler) GetTransactionSummaryByUser(c *gin.Context) {
	userId, err := http_helper.ExtractUserIDFromContext(c)
	if err != nil {
		c.Error(err)
		return
	}

	summary, err := h.service.GetTransactionSummaryByUser(userId)
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(200, summary)
}

func (h *Handler) UpdateTransaction(c *gin.Context) {

}

func (h *Handler) DeleteTransaction(c *gin.Context) {

}
