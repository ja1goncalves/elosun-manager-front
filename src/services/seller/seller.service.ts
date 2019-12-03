import axios from 'axios';

export default class SellerService {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_ELOSUN_API_URL,
    })
}