export interface IResponseBody {
    json: any;
}

export interface IJsonTransformer {
    validateJson(json: any): boolean;
    fromJson(json: any): void;
    toJson(): string;
}

