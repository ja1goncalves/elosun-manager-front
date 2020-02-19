import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { PaginateDatabaTable, ITableData, TableDataParams } from '../../utils/app-models.utils';

class StationService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async getDistributorData(distriibutorId: string) {
        return this.http.get(`admin/distributors/${distriibutorId}`).then(res => Promise.resolve(res.data));
    }

    /**
     * @description 
     * @param {TableDataParams} param0
     *  - page é a página
     *  - custom é o id do distribuidor
     */
    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        console.log(custom)
        if(custom.buscar === true){
            return this.http.post(`/admin/stations/search?id=${custom.id}` + (page ? `&page=${page}` : ''), custom).then(res => res.data);
        }else{
            return this.http.get(`/admin/stations?distributor_id=${custom.id}` + (page ? `&page=${page}` : '')).then(res => res.data.data);
        }
    }
}

let stationService: StationService | null = null;

export default (() => {

    const getInstance = () => {

        if (!stationService)
        stationService = new StationService();

        return stationService;

    }

    return {
        getInstance,
    }

})()