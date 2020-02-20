import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { PaginateDatabaTable, ITableData, TableDataParams } from '../../utils/app-models.utils';

class DistributorService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        return this.http.post(`/admin/distributors` + (page ? `?page=${page}` : ''), custom).then(res => res.data);
    }
    
}

let distributorService: DistributorService | null = null;

export default (() => {

    const getInstance = () => {

        if (!distributorService)
        distributorService = new DistributorService();

        return distributorService;

    }

    return {
        getInstance,
    }

})()