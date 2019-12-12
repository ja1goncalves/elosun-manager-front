import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';

export default class SellerService {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_ELOSUN_API_URL,
    });

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }
}