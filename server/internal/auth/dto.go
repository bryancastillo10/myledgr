package auth

type SignUpRequest struct {
	Username        string `json:"username"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

type SignInRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type JWTAuthResponse struct {
	ID   string `json:"id"`
	Role string `json:"role"`
}
