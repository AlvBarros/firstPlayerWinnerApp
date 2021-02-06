export class HerokuEnvironment {
    baseUrl = 'https://firstplayerwinner.herokuapp.com';
    basePort = '443';
    public getUrl = () => {
        return this.baseUrl+':'+this.basePort;
    }
}