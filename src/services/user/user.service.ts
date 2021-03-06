import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';

export default class UserService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page }: TableDataParams): Promise<PaginateDatabaTable> {
        if (page)
            return this.http.get(`/admin/users?page=${page}`).then(res => res.data);
        else
            return this.http.get('/admin/users').then(res => res.data);
    }
}