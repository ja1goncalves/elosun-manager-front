import React from 'react';
import { PurchaserService } from '../../services/purchaser';
import { TableCardComponent } from '../../components/table-card';
import moment from 'moment';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Documento legal', field: 'cpf_cnpj' },
        { headerName: 'Celular', field: 'cellphone' },
        { headerName: 'Código do comprador', field: 'number' },
        { headerName: 'Data de criação', field: 'created_at', cellRenderer({ data: { created_at } }: any) {
            return moment(created_at).format('DD/MM/YYYY');
        } },
    ]

    return (
        <TableCardComponent
            service={new PurchaserService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'compradores'} />
    )
}