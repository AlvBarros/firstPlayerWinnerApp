import { AuthState } from "../Auth/states";
import { ConfigState } from "../Config/states";

export type RootState = {
    config: ConfigState,
    auth: AuthState
}