import axios from 'axios'
import { AsyncStorage } from 'react-native';
const myAxios = axios.create({
    baseURL: 'https://financeclubevents.dits.cloud/api'
})
myAxios.defaults.headers.post['ClientId'] = '2';
myAxios.defaults.headers.post['ClientSecret'] = 'AWLm7w9Avyfqy25euTZYmzxeA0JftlpYFPzk4QuI';
myAxios.defaults.headers.post['Content-Type'] = 'application/json';

export default myAxios;
// instance.interceptors.request.use(
//     async (config) => {
//         const token = await AsyncStorage.getItem('token')
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// )
// export default instance;