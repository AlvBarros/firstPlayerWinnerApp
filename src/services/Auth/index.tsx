import { postRequest } from "../Http";
import { AuthPaths } from "./paths";
import { SignUpRequest, SignUpResponse } from "./types/signup";
import { LogInRequest, LogInResponse } from "./types/login";

export const signUp = (request: SignUpRequest) : Promise<SignUpResponse> => {
    return postRequest<SignUpResponse>(AuthPaths.SIGN_UP, request);
}

export const logIn = (request: LogInRequest) : Promise<LogInResponse> => {
    return postRequest<LogInResponse>(AuthPaths.LOG_IN, request);
}