import * as Keychain from 'react-native-keychain';

const SESSION = 'session';

const storeSession = async (session:any) => {
    return new Promise<boolean>((resolve, reject) => {
        Keychain.setGenericPassword(SESSION, session).then((value) => {
            resolve(value ? true : false);
        }).catch((reason) => {
            reject(reason);
        });
    });
}

const getSession = async () => {
    return new Promise<String>((resolve, reject) => {
        Keychain.getGenericPassword().then((value) => {
            if (value === false) {
                throw value;
            } else {
                resolve(value.password);
            }
        }).catch((reason) => {
            reject(reason);
        })
    });
}

export { storeSession, getSession };