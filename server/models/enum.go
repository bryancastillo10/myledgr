package models

type Role string

const (
	Admin  Role = "ADMIN"
	Public Role = "PUBLIC"
)

type TransactionCategory string

const (
	Debit  TransactionCategory = "DEBIT"
	Credit TransactionCategory = "CREDIT"
)
