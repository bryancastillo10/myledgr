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

func (s *Service) CreateTransaction(req TransactionItem, userId string) (*MutateTransactionResponse, error) {
	uid, err := utils.ParseId(userId)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid User ID", err)
	}

	if req.Title == "" {
		return nil, appErr.NewBadRequest("Missing title field", nil)
	}

	if req.Category != models.Credit && req.Category != models.Debit {
		return nil, appErr.NewBadRequest("Category must be DEBIT or CREDIT", nil)
	}

	if req.Amount <= 0 {
		return nil, appErr.NewBadRequest("Positive amount value is required", nil)
	}

	trId := utils.GenerateUUID()
	newItem := &models.Transaction{
		ID:       trId,
		UserID:   uid,
		Title:    req.Title,
		Amount:   req.Amount,
		Category: req.Category,
	}

	createdTr, err := s.repo.CreateTransaction(newItem)
	if err != nil {
		return nil, appErr.NewInternal("Failed to create transaction", nil)
	}

	transactionOwner, err := s.repo.FindUsernameById(createdTr.UserID)
	if err != nil {
		return nil, appErr.NewInternal("Failed to find the transaction owner", nil)
	}

	transResp := &MutateTransactionResponse{
		ID:               createdTr.ID.String(),
		TransactionOwner: transactionOwner,
	}

	return transResp, nil
}

func (s *Service) GetTransactionsByUser(userId string) ([]TransactionItemWithId, error) {
	uid, err := utils.ParseId(userId)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid User ID", err)
	}

	transactions, err := s.repo.GetTransactionsByUser(uid)
	if err != nil {
		return nil, appErr.NewInternal("Failed to query transactions", err)
	}

	var items []TransactionItemWithId
	for _, tr := range transactions {
		items = append(items, MapTransactionToResponse(tr))
	}

	return items, nil
}

func (s *Service) GetTransactionSummaryByUser(userId string) (*TransactionSummary, error) {
	uid, err := utils.ParseId(userId)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid User ID", err)
	}

	debitSum, creditSum, err := s.repo.GetTransactionSummaryByUser(uid)
	if err != nil {
		return nil, appErr.NewInternal("Failed to get transaction summary", err)
	}

	summary := &TransactionSummary{
		DebitSum:  debitSum,
		CreditSum: creditSum,
		Balance:   debitSum - creditSum,
	}

	return summary, nil
}

func (s *Service) UpdateTransaction(id string, req TransactionItem) (*MutateTransactionResponse, error) {
	trId, err := utils.ParseId(id)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid ID", err)
	}

	if req.Title == "" {
		return nil, appErr.NewBadRequest("Missing title field", nil)
	}

	if req.Category != models.Credit && req.Category != models.Debit {
		return nil, appErr.NewBadRequest("Category must be DEBIT or CREDIT", nil)
	}

	if req.Amount <= 0 {
		return nil, appErr.NewBadRequest("Positive amount value is required", nil)
	}

	updatedTr, err := s.repo.UpdateTransaction(trId, req)
	if err != nil {
		return nil, appErr.NewInternal("Failed to update the transaction",err)
	}

	transactionOwner, err := s.repo.FindUsernameById(updatedTr.UserID)
	if err != nil {
		return nil, appErr.NewInternal("Failed to find the transaction owner", nil)
	}


	transResp := &MutateTransactionResponse{
		ID: updatedTr.ID.String(),
		TransactionOwner: transactionOwner,
	}

	return transResp, nil
}

func (s *Service) DeleteTransaction() {

}
