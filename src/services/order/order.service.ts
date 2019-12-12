import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { PaginateDatabaTable, ITableData } from '../../utils/app-models.utils';

export default class OrderService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData(): Promise<PaginateDatabaTable> {
        return this.http.get('/admin/orders').then(res => res.data);
    }
}