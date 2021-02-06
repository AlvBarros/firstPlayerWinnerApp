import { IJsonTransformer, IResponseBody } from "../Http/types";

export class GenerateKeysRequest implements IJsonTransformer {
    encryptedRsaKey: string;
    
    constructor(json: any | null) {
        this.encryptedRsaKey = "";
        if (this.validateJson(json)) {
            this.fromJson(json);
        } else {
            throw new Error("Invalid JSON format");
        }
    }

    validateJson(json: any): boolean {
        throw new Error("Method not implemented.");
    }
    fromJson(json: any): void {
        throw new Error("Method not implemented.");
    }
    toJson(): string {
        throw new Error("Method not implemented.");
    }
}

export class GenerateKeysResponse implements IJsonTransformer {
    sessionId: string;
    publicApiKey: string;

    constructor(json: any | null) {
        this.sessionId = "";
        this.publicApiKey = "";
        if (this.validateJson(json)) {
            this.fromJson(json);
        } else {
            throw new Error("Invalid JSON format");
        }
    }
    validateJson(json: any): boolean {
        return json !== null && json['sessionId'] !== undefined && json['publicApiKey'] !== undefined;
    }
    fromJson(json: any): void {
        if (json['sessionId'] !== undefined) {
            this.sessionId = json['sessionId'];
        }
        if (json['publicApiKey'] !== undefined) {
            this.publicApiKey = json['publicApiKey'];
        }
    }
    toJson(): string {
        return JSON.stringify({sessionId: this.sessionId, publicApiKey: this.publicApiKey});
    }
}

