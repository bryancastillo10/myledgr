package user

import (
	http_helper "myledgr-server/pkg/http"

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
	userId, err := http_helper.ExtractUserIDFromContext(c)
	if err != nil {
		c.Error(err)
		return
	}

	user, err := h.service.GetUser(userId)
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(200, user)
}

func (h *Handler) GetAllUsers(c *gin.Context) {
	users, err := h.service.GetAllUsers()
	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(200, users)
}

func (h *Handler) UpdateUser(c *gin.Context) {

}

func (h *Handler) DeleteUser(c *gin.Context) {

}