import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';

export default class SellerService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_ELOSUN_API_URL,
    });

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }


    async tableData({ page }: TableDataParams): Promise<PaginateDatabaTable> {
        if (page)
            return this.http.get(`/admin/providers?page=${page}`).then(res => res.data);
        else
            return this.http.get('/admin/providers').then(res => res.data);
    }
}