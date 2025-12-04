package transaction

import (
	"myledgr-server/models"
	"myledgr-server/pkg/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) CreateTransaction(transaction *models.Transaction) (*models.Transaction, error) {
		newTransaction := r.db.Create(transaction)
		if newTransaction.Error != nil {
			return nil, newTransaction.Error
		}

		return transaction, nil
}

func (r *Repository) GetTransactionsByUser(userId uuid.UUID) ([]models.Transaction,error) {
	var items []models.Transaction
	err := r.db.Where("user_id = ?", userId).Order("created_at DESC").Find(&items).Error

	return items,err
}

func (r *Repository) GetTransactionSummaryByUser(userId uuid.UUID) (float64, float64, error) {
	var debitSum float64
	var creditSum float64

	if err := r.db.Model(&models.Transaction{}).
		Where("user_id = ? AND category = ?", userId).
		Select("COALESCE(SUM(amount),0)").Scan(&debitSum).Error; err != nil {
		return 0,0, err
	}

	if err := r.db.Model(&models.Transaction{}).
		Where("user_id = ? AND category = ?", userId).
		Select("COALESCE(SUM(amount),0)").Scan(&creditSum).Error; err != nil {
		return 0,0,err
	}

	return debitSum, creditSum, nil
}

func (r *Repository) FindTransactionById (trId uuid.UUID) (*models.Transaction, error) {
	var transactionItem models.Transaction
	err := r.db.First(&transactionItem, "id = ?", trId).Error
	return &transactionItem, err
}

func (r *Repository) UpdateTransaction(trId uuid.UUID, req TransactionItem) (*models.Transaction, error) {
	var transaction models.Transaction

	if err := r.db.First(&transaction,"id = ?", trId).Error; err != nil {
		return nil, err
	}

	if err := utils.Patch(&transaction, &req); err != nil {
		return nil, err
	}

	if err := r.db.Save(&transaction).Error; err != nil {
		return nil,err
	}

	return &transaction, nil
}

func (r *Repository) DeleteTransaction(trId uuid.UUID) error {
	if err := r.db.Delete(&models.Transaction{},"id = ?",trId).Error;
	err != nil {
		return err
	}

	return nil
}