interface AuthDto {
  email: string
  password: string
}

export interface RegisterDto extends AuthDto {}

export interface LoginDto extends AuthDto {}
