import { postRequest } from "../Http";
import { SessionPaths } from "./paths";
import { GenerateKeysRequest, GenerateKeysResponse } from "./types"

export const generateKeys = (request: GenerateKeysRequest) : Promise<GenerateKeysResponse> => {
    return postRequest<GenerateKeysResponse>(SessionPaths.GENERATE_KEYS, request);
}