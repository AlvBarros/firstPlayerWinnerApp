import AsyncStorage from '@react-native-async-storage/async-storage';

const storeValue = async (key: string, value: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        try {
            AsyncStorage.setItem(key, value, (error) => {
                reject(error);
            }).then(() => {
                resolve(true);
            });
          } catch (e) {
            reject(e);
          }
    });
}

const getValue = async (key: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        try {
            AsyncStorage.getItem(key, (error) => {
                reject(error);
            }).then((value) => {
                if (value === null) {
                    reject('Not found');
                } else {
                    resolve(value);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}

export default { storeValue, getValue };