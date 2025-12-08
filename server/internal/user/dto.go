package user

type Role string

const (
	Admin  Role = "ADMIN"
	Public Role = "PUBLIC"
)

type UserDetail struct {
	Username string  `json:"username"`
	Email    string  `json:"email"`
	Bio      *string `json:"bio"`
	Address  *string `json:"address"`
	Theme    *string `json:"theme"`
	Role     Role    `json:"role"`
}

type UpdateUserRequest struct {
	Username *string `json:"username,omitempty"`
	Email    *string `json:"email,omitempty"`
	Bio      *string `json:"bio,omitempty"`
	Address  *string `json:"address,omitempty"`
	Theme    *string `json:"theme,omitempty"`
}

type UpdateUserResponse struct {
	ID       string  `json:"id"`
	Username *string `json:"username,omitempty"`
	Email    *string `json:"email,omitempty"`
	Bio      *string `json:"bio,omitempty"`
	Address  *string `json:"address,omitempty"`
	Theme    *string `json:"theme,omitempty"`
}
