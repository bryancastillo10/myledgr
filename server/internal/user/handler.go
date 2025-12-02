package user

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

func (h *Handler) GetUser(c *gin.Context) {

}

func (h *Handler) GetAllUsers(c *gin.Context) {

}

func (h *Handler) UpdateUser(c *gin.Context) {

}

func (h *Handler) DeleteUser(c *gin.Context) {

}