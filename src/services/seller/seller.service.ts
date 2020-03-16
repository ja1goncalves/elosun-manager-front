import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';
import { notify } from '../../utils/app.utils';

class SellerService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        return this.http.post(`/admin/providers` + (page ? `?page=${page}` : ''), custom).then(res => res.data);
    }

    /**
     * @description 
     *  - sellerId é o id do Fornecedor para ser pesquisado
     */
    async getSellerData(sellerId: string){
        return await this.http.get(`/admin/providers/${sellerId}`).then(res => res.data.data);
    }

    async updateSeller(sellerData: object){
        let status = await this.http.put('/admin/providers/update', sellerData).then(res => res.data);

        notify({
            type: (status.error ? 'error' : 'success'),
            message: (status.error ? "Ocorreu um erro ao tentar atualizar o fornecedor, tente novamente mais tarde." : status.message)
        });

        return status.error;
    }
}

let sellerService: SellerService | null = null;

export default (() => {

    const getInstance = () => {

        if (!sellerService)
        sellerService = new SellerService();

        return sellerService;

    }

    return {
        getInstance,
    }

})()