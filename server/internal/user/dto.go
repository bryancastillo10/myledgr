package user

type Role string 
const (
	Admin  Role = "ADMIN"
	Public Role = "PUBLIC"
)

type UserDetail struct {
	Username string
	Email string 
	Password string
	Bio *string
	Role Role
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