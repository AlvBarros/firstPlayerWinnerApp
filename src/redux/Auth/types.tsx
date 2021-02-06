export enum AuthActions {
    Login = "LOGIN",
    Signup = "SIGNUP",
    Signout = "SIGNOUT"
}

export type AuthAction = {
    type: AuthActions,
    payload: AuthPayload
}

export interface AuthPayload {
    email: string,
    password: string
}

export class LoginPayload implements AuthPayload {
    email: string;
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}