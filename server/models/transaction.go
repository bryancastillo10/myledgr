package models

import "github.com/google/uuid"

type Transaction struct {
	ID uuid.UUID `gorm:"primaryKey;type:uuid" json:"id"`
	UserID uuid.UUID `gorm:"type:uuid; index" json:"userId,omitempty"`
	Title	string	`gorm:"type:varchar(100)" json:"title"`
	Amount float64 `gorm:"type:decimal(10,2);not null" json:"amount"`
	Category TransactionCategory `gorm:"type:varchar(20)" json:"category"`

	User *User `gorm:"foreignKey:UserID;references:ID;constraint:OnDelete:CASCADE" json:"user,omitempty"`
}