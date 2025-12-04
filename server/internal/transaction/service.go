package transaction

import (
	"myledgr-server/models"
	appErr "myledgr-server/pkg/errors"

	"myledgr-server/pkg/utils"
)

type Service struct {
	repo *Repository
}

func NewService(repo *Repository) *Service {
	return &Service{repo: repo}
}

func (s *Service) CreateTransaction(req TransactionItem, userId string) (*models.Transaction, error) {
	uid, err := utils.ParseId(userId)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid User ID",err)
	}

	if req.Title == "" {
		return nil, appErr.NewBadRequest("Missing title field",nil)
	}

if req.Category != models.Credit && req.Category != models.Debit {
		return nil, appErr.NewBadRequest("Category must be DEBIT or CREDIT", nil)
	}

	if req.Amount <= 0 {
		return nil, appErr.NewBadRequest("Positive amount value is required", nil)
	}

	trId := utils.GenerateUUID()
	newItem := &models.Transaction{
		ID: trId,
		UserID:uid,
		Title: req.Title,
		Amount: req.Amount,
		Category: req.Category,
	}

	createdTr, err := s.repo.CreateTransaction(newItem); 
	if err != nil {
		return nil, appErr.NewInternal("Failed to create transaction", nil)
	}

	return createdTr, nil
}

func (s *Service) GetTransactionsByUser(userId string) ([]TransactionItem,error) {
	uid, err := utils.ParseId(userId)
    if err != nil {
        return nil, appErr.NewBadRequest("Invalid User ID", err)
    }

    transactions, err := s.repo.GetTransactionsByUser(uid)
    if err != nil {
        return nil, appErr.NewInternal("Failed to query transactions", err)
    }

	 var items []TransactionItem
    for _, tr := range transactions {
        items = append(items, TransactionItem{
            Title:    tr.Title,
            Amount:   tr.Amount,
            Category: tr.Category,         
            CreatedAt: tr.CreatedAt,
            UpdatedAt: tr.UpdatedAt,
        })	
	}

	return items, nil
}

func (s *Service) GetTransactionSummaryByUser(userId string) (float64, float64, error) {
    uid, err := utils.ParseId(userId)
    if err != nil {
        return 0, 0, appErr.NewBadRequest("Invalid User ID", err)
    }

	debitSum, creditSum, err := s.repo.GetTransactionSummaryByUser(uid)
    if err != nil {
        return 0, 0, appErr.NewInternal("Failed to get transaction summary", err)
    }

	return debitSum, creditSum, nil
}

func (s *Service) UpdateTransaction() {

}

func (s *Service) DeleteTransaction() {

}