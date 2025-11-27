package infrastructure

import (
	"myledgr-server/internal/auth"
	"myledgr-server/internal/transaction"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func RegisterRoutes(r *gin.Engine, db *gorm.DB) {
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "📖 Myledgr Server is running. Server developed by Bryan Castillo"})
	})

	authHandler := auth.NewHandler(db)
	transactionHandler := transaction.NewHandler(db)

	authGroup := r.Group("/auth")
	{
		authGroup.POST("/signin", authHandler.SignIn)
		authGroup.POST("/signup", authHandler.SignUp)
		authGroup.POST("/signout", authHandler.SignOut)
	}

	transactionGroup := r.Group("/transaction")
	{
		transactionGroup.POST("/", transactionHandler.CreateTransaction)
		transactionGroup.GET("/", transactionHandler.GetTransactionsByUser)
		transactionGroup.GET("/summary", transactionHandler.UpdateTransaction)
		transactionGroup.PUT("/:id", transactionHandler.UpdateTransaction)
		transactionGroup.DELETE("/:id", transactionHandler.DeleteTransaction)
	}
}
