import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { PaginateDatabaTable, ITableData, TableDataParams } from '../../utils/app-models.utils';

export default class AnaelService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page }: TableDataParams): Promise<PaginateDatabaTable> {
        if (page)
            return this.http.get(`/admin/anael?page=${page}`).then(res => res.data);
        else
            return this.http.get('/admin/anael').then(res => res.data);
    }
}