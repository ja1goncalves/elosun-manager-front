import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';

class LeadPurchaserService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        if(custom.buscar === true){
            return this.http.post(`/admin/clients/lead/search` + (page ? `?page=${page}` : ''), custom).then(res => res.data);
        }else{
            return this.http.get(`/admin/clients/lead` + (page ? `?page=${page}` : '')).then(res => res.data.data);
        }
    }
}

let leadPurchaserService: LeadPurchaserService | null = null;

export default (() => {

    const getInstance = () => {

        if (!leadPurchaserService)
        leadPurchaserService = new LeadPurchaserService();

        return leadPurchaserService;

    }

    return {
        getInstance,
    }

})()