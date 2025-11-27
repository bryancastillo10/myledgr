package auth

import (
	http_helper "myledgr-server/pkg/http"
	"myledgr-server/pkg/utils"

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

func (h *Handler) SignUp(c *gin.Context) {
	req, err := http_helper.BindJSON[SignUpRequest](c)
	if err != nil {
		c.Error(err)
		return
	}

	newUser, token, err := h.service.SignUp(*req)
	if err != nil {
		c.Error(err)
		return
	}

	utils.SetCookie(c, token, 3600*5)

	c.JSON(200, gin.H{
		"message": "A new user has been created",
		"user":    newUser,
	})
}

func (h *Handler) SignIn(c *gin.Context) {

}

func (h *Handler) SignOut(c *gin.Context) {

}