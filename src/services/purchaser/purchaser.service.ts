import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';

class PurchaserService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        return this.http.post(`/admin/clients?page=${page}`, custom).then(res => res.data);
    }
}

let purchaserService: PurchaserService | null = null;

export default (() => {

    const getInstance = () => {

        if (!purchaserService)
        purchaserService = new PurchaserService();

        return purchaserService;

    }

    return {
        getInstance,
    }

})()