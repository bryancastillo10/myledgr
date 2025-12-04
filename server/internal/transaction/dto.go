package transaction

import (
	"myledgr-server/models"
	"time"
)


type TransactionItem struct {
	Title string 	`json:"title"`
	Amount float64	`json:"amount"`
	Category models.TransactionCategory`json:"category"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}


type MutateTransactionResponse struct {
	ID string `json:"id"`
	TransactionOwner string `json:"transactionOwner"`
}