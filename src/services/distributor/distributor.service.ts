import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { PaginateDatabaTable } from '../../utils/app-models.utils';

export default class DistributorService {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    tableData = async (): Promise<PaginateDatabaTable> => {
        return this.http.get('/admin/distributors').then(res => res.data);
    }
}