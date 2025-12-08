package transaction

import (
	"myledgr-server/models"
	"time"
)

type TransactionItem struct {
	Title    string                     `json:"title"`
	Amount   float64                    `json:"amount"`
	Category models.TransactionCategory `json:"category"`
	Icon     *string                    `json:"icon,omitempty"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

type TransactionItemWithId struct {
	ID string `json:"id"`
	TransactionItem
}

type TransactionSummary struct {
	DebitSum  float64 `json:"debit"`
	CreditSum float64 `json:"credit"`
	Balance   float64 `json:"balance"`
}

type MutateTransactionResponse struct {
	ID               string `json:"id"`
	TransactionOwner string `json:"transactionOwner"`
}

func MapTransactionToResponse(tr models.Transaction) TransactionItemWithId {
	return TransactionItemWithId{
		ID: tr.ID.String(),
		TransactionItem: TransactionItem{
			Title:     tr.Title,
			Amount:    tr.Amount,
			Category:  tr.Category,
			Icon:      tr.Icon,
			CreatedAt: tr.CreatedAt,
			UpdatedAt: tr.UpdatedAt,
		},
	}
}
