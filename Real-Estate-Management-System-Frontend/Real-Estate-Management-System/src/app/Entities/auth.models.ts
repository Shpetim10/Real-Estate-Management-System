
export interface LoginRequest {
    username: string;
    password: string;
}

export interface SignupRequest {
    username: string;
    password: string;
}

export interface JwtResponse {
    token: string;
    type: string;
}

export interface UserProfile {
    username: string;
    roles?: string[];
}