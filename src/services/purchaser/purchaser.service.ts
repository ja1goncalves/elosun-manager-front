import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';
import { notify } from '../../utils/app.utils';

class PurchaserService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        return await this.http.post(`/admin/clients?page=${page}`, custom).then(res => res.data);
    }

    /**
     * @description 
     *  - purchaserId é o id do Cliente para ser pesquisado
     */
    async getPurchaserData(purchaserId: string){
        return await this.http.get(`/admin/clients/${purchaserId}`).then(res => res.data.data);
    }

    async updatePurchase(purchaserData: object){
        let status = await this.http.put('/admin/clients/update', purchaserData).then(res => res.data);

        notify({
            type: (status.error ? 'error' : 'success'),
            message: (status.error ? "Ocorreu um erro ao tentar atualizar o cliente, tente novamente mais tarde." : status.message)
        });

        return status.error;
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