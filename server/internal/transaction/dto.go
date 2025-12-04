package transaction

type TransactionCategory string

const (
	Debit  TransactionCategory = "DEBIT"
	Credit TransactionCategory = "CREDIT"
)

type TransactionItem struct {
	Title string 	`json:"title"`
	Amount float64	`json:"amount"`
	Category TransactionCategory `json:"category"`
}


type MutateTransactionResponse struct {
	ID string `json:"id"`
	TransactionOwner string `json:"transactionOwner"`
}