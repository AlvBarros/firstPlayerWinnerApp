import { AuthState, InitialAuthState } from "./states";
import { AuthAction, AuthActions, AuthPayload, LoginPayload } from "./types";
import * as AuthService from '../../services/Auth';
import User from "./user";
import { SignUpRequest } from "../../services/Auth/types";

export const AuthReducer = (state:AuthState = InitialAuthState, action: AuthAction) => {
    switch(action.type) {
        case (AuthActions.Login):
            console.warn("tried to login!");
            let loginPayload = action.payload as LoginPayload;
            if (loginPayload.email === "teste" && loginPayload.password === "123") {
                state.user = new User("123456", "teste", "Alvaro", "default");
            } else {
                state.user = null;
            }
            break;
    }
    state.isAuthenticated = !(state.user === null);
    return state;
}