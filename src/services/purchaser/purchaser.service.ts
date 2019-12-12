import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable } from '../../utils/app-models.utils';

export default class PurchaserService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData(): Promise<PaginateDatabaTable> {
        return this.http.get('/admin/clients').then(res => res.data);
    }
}