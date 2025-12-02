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
	Username *string
	Email *string
	Bio *string
}

type UpdateUserResponse struct {
	ID string `json:"id"`
	Role string `json:"role"`
}