import { HerokuEnvironment } from './heroku';

export interface Environment {
    baseUrl: string,
    basePort: string
    
    getUrl(): string;
}

export enum Environments {
    HEROKU = 'Heroku'
}

export const getEnvironment = (env: Environments) => {
    switch (env) {
        case Environments.HEROKU:
            return new HerokuEnvironment();
        default:
            // retornar prod
            return new HerokuEnvironment();
    }
}