package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID       uuid.UUID `gorm:"primaryKey;type:uuid" json:"id"`
	Username string    `gorm:"type:varchar(100);not null" json:"username"`
	Email    string    `gorm:"type:varchar(100); not null" json:"email"`
	Password string    `gorm:"not null" json:"password"`
	Bio      *string    `gorm:"type:text" json:"bio,omitempty"`
	Role     Role      `gorm:"type:varchar(20)" json:"role"`

	CreatedAt time.Time `gorm:"autoCreateTime" json:"createdAt"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updatedAt"`

	Transactions []Transaction `gorm:"foreignKey:UserID;constraint:OnDelete:CASCADE"`
}
