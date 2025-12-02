package user

type Service struct {
	repo *Repository
}

func NewService(repo *Repository) *Service {
	return &Service{repo: repo}
}

func (s *Service) GetUser(id string) (*UserDetail, error){
		return nil, nil
}

func (s *Service) GetAllUsers (id string) ([]UserDetail, error) {
	return nil, nil
}

func (s *Service) UpdateUser(req UpdateUserRequest) {

}

func (s *Service) DeleteUser(id string) {

}