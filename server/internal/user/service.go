package user

import (
	"regexp"

	appErr "myledgr-server/pkg/errors"
	"myledgr-server/pkg/utils"
)

type Service struct {
	repo *Repository
}

func NewService(repo *Repository) *Service {
	return &Service{repo: repo}
}

func isValidEmail(email string) bool {
	re := regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	return re.MatchString(email)
}

func (s *Service) GetUser(id string) (*UserDetail, error) {
	uid, err := utils.ParseId(id)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid ID", err)
	}

	user, err := s.repo.GetUser(uid)
	if err != nil {
		return nil, appErr.NewInternal("Failed to get the user details", err)
	}

	var profile = &UserDetail{
		Username: user.Username,
		Email:    user.Email,
		Bio:      user.Bio,
		Role:     Role(user.Role),
	}

	return profile, nil
}

func (s *Service) GetAllUsers() ([]UserDetail, error) {
	users, err := s.repo.GetAllUsers()
	if err != nil {
		return nil, appErr.NewInternal("Failed to query all users", err)
	}

	var profiles []UserDetail
	for _, user := range users {
		profiles = append(profiles, UserDetail{
			Username: user.Username,
			Email:    user.Email,
			Bio:      user.Bio,
			Role:     Role(user.Role),
		})
	}

	return profiles, nil
}

func (s *Service) UpdateUser(req UpdateUserRequest, id string) (*UpdateUserResponse, error) {
	uid, err := utils.ParseId(id)
	if err != nil {
		return nil, appErr.NewBadRequest("Invalid ID", err)
	}

	if req.Email != nil && !isValidEmail(*req.Email) {
		return nil, appErr.NewBadRequest("Invalid email format", nil)
	}

	updatedUser, err := s.repo.UpdateUser(uid, req)
	if err != nil {
		return nil, appErr.NewInternal("Failed to update the user", err)
	}

	var newUser = &UpdateUserResponse{
		ID: updatedUser.ID.String(),
	}

	return newUser, nil
}

func (s *Service) DeleteUser(id string, email string) error {
	uid, err := utils.ParseId(id)
	if err != nil {
		return appErr.NewBadRequest("Invalid ID", err)
	}

	user, err := s.repo.FindUserByID(uid)
	if err != nil {
		return appErr.NewNotFound("User not found", err)
	}

	if user.Email != email {
		return appErr.NewBadRequest("Email does not match", nil)
	}

	if err := s.repo.DeleteUser(uid); err != nil {
		return appErr.NewInternal("Failed to delete the user", err)
	}

	return nil
}
