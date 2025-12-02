package user

import (
	appErr "myledgr-server/pkg/errors"
	"myledgr-server/pkg/utils"
)

type Service struct {
	repo *Repository
}

func NewService(repo *Repository) *Service {
	return &Service{repo: repo}
}

func (s *Service) GetUser(id string) (*UserDetail, error){
		uid, err := utils.ParseId(id)
		if err != nil {
			return nil, appErr.NewBadRequest("Invalid ID", err)
		}

		user, err := s.repo.GetUser(uid)
		if err != nil {
			return nil, appErr.NewInternal("Failed to get the user details",err)
		}

		var profile = &UserDetail{
			Username: user.Username,
			Email: user.Email,
			Bio: user.Bio,
			Role: Role(user.Role),
		}

		return profile, nil
}

func (s *Service) GetAllUsers (id string) ([]UserDetail, error) {
	return nil, nil
}

func (s *Service) UpdateUser(req UpdateUserRequest) {

}

func (s *Service) DeleteUser(id string) {

}