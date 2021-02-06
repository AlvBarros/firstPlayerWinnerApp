import axios from 'axios';
import { IJsonTransformer } from './types';

export const postRequest = <T extends IJsonTransformer>(path: string, body: IJsonTransformer): Promise<T> => {
    return new Promise((res, rej) => {
        axios.post(path, body.toJson(), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            if (result.status >= 200 && result.status < 300) {
                res(result.data as T);
            }
        }).catch((error) => rej(error));
    });
}
