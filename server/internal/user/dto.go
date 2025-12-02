package user

type Role string 
const (
	Admin  Role = "ADMIN"
	Public Role = "PUBLIC"
)

type UserDetail struct {
	Username string `json:"username"`
	Email string `json:"email"`
	Bio *string `json:"bio"`
	Role Role `json:"role"`
}

type UpdateUserRequest struct {
	Username *string `json:"username,omitempty"`
	Email *string	`json:"email,omitempty"`
	Bio *string	`json:"bio,omitempty"`
}

type UpdateUserResponse struct {
	ID string `json:"id"`
	Username *string `json:"username,omitempty"`
	Email *string `json:"email,omitempty"`
	Bio *string `json:"bio,omitempty"`
}