import axios from 'axios';
import { addAuthToken } from '../../utils/axios-interceptors.utils';
import { ITableData, PaginateDatabaTable, TableDataParams } from '../../utils/app-models.utils';
import { notify } from '../../utils/app.utils';

class UserService implements ITableData {
    private readonly http = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request));
    }

    async tableData({ page, custom }: TableDataParams): Promise<PaginateDatabaTable> {
        return this.http.post(`/admin/users` + (page ? `?page=${page}` : ''), custom).then(res => res.data);
    }

    /**
     * @description 
     *  - purchaserId é o id do Cliente para ser pesquisado
     */
    async getUserData(userId: string){
        return await this.http.get(`/admin/users/${userId}`).then(res => res.data.data);
    }

    async updateUser(userData: object){
        let status = await this.http.put('/admin/users/update', userData).then(res => res.data);

        notify({
            type: (status.error ? 'error' : 'success'),
            message: (status.error ? "Ocorreu um erro ao tentar atualizar o cliente, tente novamente mais tarde." : status.message)
        });

        return status.error;
    }
}

let userService: UserService | null = null;

export default (() => {

    const getInstance = () => {

        if (!userService)
        userService = new UserService();

        return userService;

    }

    return {
        getInstance,
    }

})()