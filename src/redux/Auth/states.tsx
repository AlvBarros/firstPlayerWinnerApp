import User from "./user";

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

export const InitialAuthState = {
    user: null,
    isAuthenticated: false
};
