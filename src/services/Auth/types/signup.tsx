import { IJsonTransformer } from "../../Http/types";

export class SignUpRequest implements IJsonTransformer {
    email: string;
    password: string;
    constructor(json: any | null) {
        this.email = "";
        this.password = "";
        if (this.validateJson(json)) {
            this.fromJson(json);
        } else {
            throw new Error("Invalid JSON format");
        }
    }
    
    validateJson(json: any): boolean {
        return json !== null && json['email'] !== undefined && json['password'] !== undefined;
    }
    fromJson(json: any): void {
        this.email = json['email'];
        this.password = json['password'];
    }
    toJson(): string {
        return JSON.stringify({email: this.email, password: this.password});
    }
}

export class SignUpResponse implements IJsonTransformer {
    message: Array<String>;

    constructor(json: any | null) {
        this.message = [];
        if (this.validateJson(json)) {
            this.fromJson(json);
        } else {
            throw new Error("Invalid JSON format");
        }
    }
    
    validateJson(json: any): boolean {
        return json !== null && json['message'] !== undefined;
    }
    fromJson(json: any): void {
        this.message = json['message'];
    }
    toJson(): string {
        return JSON.stringify({message: this.message});
    }
}