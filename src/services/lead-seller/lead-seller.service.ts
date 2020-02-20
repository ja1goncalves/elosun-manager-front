import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';

class LeadSellerService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }


    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        return this.http.post(`/admin/providers` + (page ? `?page=${page}`: ''), custom).then(res => res.data);
    }
    
}

let leadSellerService: LeadSellerService | null = null;

export default (() => {

    const getInstance = () => {

        if (!leadSellerService)
        leadSellerService = new LeadSellerService();

        return leadSellerService;

    }

    return {
        getInstance,
    }

})()