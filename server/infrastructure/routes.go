package infrastructure

import (
	"myledgr-server/internal/auth"
	"myledgr-server/internal/transaction"
	"myledgr-server/internal/user"
	"myledgr-server/middleware"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func RegisterRoutes(r *gin.Engine, db *gorm.DB) {
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "📖 Myledgr Server is running. Server developed by Bryan Castillo"})
	})

	authHandler := auth.NewHandler(db)
	userHandler := user.NewHandler(db)
	transactionHandler := transaction.NewHandler(db)

	authGroup := r.Group("/auth")
	{
		authGroup.POST("/signin", authHandler.SignIn)
		authGroup.POST("/signup", authHandler.SignUp)
		authGroup.POST("/signout", authHandler.SignOut)
	}

	resetPasswordGroup := r.Group("/reset-password")
	{
		resetPasswordGroup.POST("/request")
		resetPasswordGroup.POST("/verify-code")
		resetPasswordGroup.PUT("/update")
	}

	transactionGroup := r.Group("/transaction", middleware.JWTAuthMiddleware())
	{
		transactionGroup.POST("/", transactionHandler.CreateTransaction)
		transactionGroup.GET("/", transactionHandler.GetTransactionsByUser)
		transactionGroup.GET("/summary", transactionHandler.GetTransactionSummaryByUser)
		transactionGroup.PUT("/:id", transactionHandler.UpdateTransaction)
		transactionGroup.DELETE("/:id", transactionHandler.DeleteTransaction)
	}

	userGroup := r.Group("/user", middleware.JWTAuthMiddleware())
	{
		userGroup.GET("/", userHandler.GetUser)
		userGroup.GET("/all", middleware.RequireRoles("ADMIN"), userHandler.GetAllUsers)
		userGroup.PUT("/", userHandler.UpdateUser)
		userGroup.DELETE("/", userHandler.DeleteUser)
	}
}
