import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { PaginateDatabaTable, ITableData, TableDataParams } from '../../utils/app-models.utils';

class AneelService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        if (custom.buscar === true){
            return this.http.get(`/admin/aneel` + (page ? `?page=${page}` : '')).then(res => res.data);
        }else{
            return this.http.get(`/admin/aneel/search` + (page ? `?page=${page}` : '')).then(res => res.data);
        }
    }
}

let aneelService: AneelService | null = null;

export default (() => {

    const getInstance = () => {

        if (!aneelService)
        aneelService = new AneelService();

        return aneelService;

    }

    return {
        getInstance,
    }

})()