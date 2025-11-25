package routes

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)


func RegisterRoutes(r *gin.Engine, DB *gorm.DB) {
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message":"📖 Myledgr Server is running. Server developed by Bryan Castillo"})
	})
}