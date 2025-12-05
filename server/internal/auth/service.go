package auth

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

func (s *Service) SignUp(req SignUpRequest) (*JWTAuthResponse, string, error) {
	//Missing Field Required Validation
	if req.Username == "" || req.Email == "" || req.Password == "" || req.ConfirmPassword == "" {
		return nil, "", appErr.NewBadRequest("Missing required fields", nil)
	}

	//Existing User Validation
	existingUser, err := s.repo.FindUserByEmail(req.Email)
	if err != nil {
		return nil, "", appErr.NewBadRequest("Failed to verify if the email exists", err)
	}

	if existingUser != nil {
		return nil, "", appErr.NewBadRequest("User with that email already exists", nil)
	}

	// Password and ConfirmPassword Match
	if req.Password != req.ConfirmPassword {
		return nil, "", appErr.NewBadRequest("Password does not match", nil)
	}

	// Hash Password
	hashedPwd, err := utils.HashPassword(req.Password)
	if err != nil {
		return nil, "", appErr.NewInternal("Failed to hash password", err)
	}

	// Generate UserID and Prepare User struct
	uid := utils.GenerateUUID()

	newUser := &models.User{
		ID:       uid,
		Username: req.Username,
		Email:    req.Email,
		Password: hashedPwd,
		Role:     "PUBLIC",
	}

	// Create User at Repo Layer
	createdUser, err := s.repo.CreateUser(newUser)
	if err != nil {
		return nil, "", appErr.NewInternal("Failed to create a new user at the database", err)
	}

	signUpRes := JWTAuthResponse{
		ID:   createdUser.ID.String(),
		Role: string(createdUser.Role),
	}

	token, err := utils.GenerateJWT(createdUser)
	if err != nil {
		return nil, "", appErr.NewInternal("Failed to generate token", err)
	}

	return &signUpRes, token, nil
}

func (s *Service) SignIn(req SignInRequest) (*JWTAuthResponse, string, error) {
	if req.Email == "" || req.Password == "" {
		return nil, "", appErr.NewBadRequest("Missing required fields", nil)
	}

	user, err := s.repo.FindUserByEmail(req.Email)
	if err != nil {
		return nil, "", appErr.NewNotFound("Failed to verify if user exists", err)
	}
	if user == nil {
		return nil, "", appErr.NewBadRequest("Invalid email or password", nil)
	}

	if err := utils.ValidatePassword(user.Password, req.Password); err != nil {
		return nil, "", appErr.NewBadRequest("Invalid email or password", err)
	}

	token, err := utils.GenerateJWT(user)
	if err != nil {
		return nil, "", appErr.NewInternal("Failed to generate token", err)
	}

	userResp := JWTAuthResponse{
		ID:   user.ID.String(),
		Role: string(user.Role),
	}

	return &userResp, token, nil
}
