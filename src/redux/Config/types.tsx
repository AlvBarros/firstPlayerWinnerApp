import { Environments } from "../../environments/types";

export enum ConfigActions {
    SetEnvironment = "SET_ENVIRONMENT",
}

export class ConfigPayload {
    environment: string;
    constructor(env: string) {
        this.environment = env;
    }
}

export type ConfigAction = {
    type: ConfigActions,
    payload: ConfigPayload
}

export class SetEnvironmentPayload implements ConfigPayload {
    type = ConfigActions.SetEnvironment;
    environment: string;
    payload: ConfigPayload;

    constructor(env: string) {
        if (env in Environments) {
            this.environment = env;
            this.payload = new ConfigPayload(env);
        } else {
            throw new Error("Invalid environment.");
        }
    }
}