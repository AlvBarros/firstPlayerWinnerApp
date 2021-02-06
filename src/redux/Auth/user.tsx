export default class User {
    token: string;

    email: string;
    name: string;
    profile: string;

    constructor(token: string, email: string, name: string, profile: string) {
        this.token = token;
        
        this.email = email;
        this.name = name;
        this.profile = profile;
    }
}