package transaction

type Service struct {
	repo *Repository
}

func NewService(repo *Repository) *Service {
	return &Service{repo: repo}
}

func (s *Service) CreateTransaction() {

}

func (s *Service) GetTransactionsByUser() {

}

func (s *Service) GetTransactionSummaryByUser() {

}

func (s *Service) UpdateTransaction() {

}

func (s *Service) DeleteTransaction() {

}