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

    /**
     * @description 
     * @param {TableDataParams} param0
     *  - page é a página
     *  - custom é o id da estação 
     */
    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        if (page)
            return this.http.get(`/admin/distributors/stations/${custom}?page=${page}`).then(res => res.data);
        else
            return this.http.get(`/admin/distributors/stations/${custom}`).then(res => res.data);
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