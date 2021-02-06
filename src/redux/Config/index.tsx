import axios from "axios";
import { KeyboardAvoidingViewBase } from "react-native";
import { HerokuEnvironment } from "../../environments/heroku";
import { Environments, getEnvironment } from "../../environments/types";
import { ConfigState } from "./states";
import { ConfigAction, ConfigActions } from "./types";

const herokuEnvironment = new HerokuEnvironment();

const InitialConfigState = {
    environment: herokuEnvironment,
}

export const ConfigReducer = (state:ConfigState = InitialConfigState, action:ConfigAction) => {
    switch(action.type) {
        case(ConfigActions.SetEnvironment):
            console.warn('set environment!');
            let key = action.payload.environment as keyof typeof Environments;
            state.environment = getEnvironment(Environments[key]);
            break;
    }
    axios.defaults.baseURL = state.environment.getUrl();
    axios.defaults;
    return state;
}