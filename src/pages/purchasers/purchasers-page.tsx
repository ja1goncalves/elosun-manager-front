import React from 'react';
import { PurchaserService } from '../../services/purchaser';
import { TableCardComponent } from '../../components/table-card';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Documento legal', field: 'cpf_cnpj' },
        { headerName: 'Celular', field: 'cellphone' },
        { headerName: 'Código do comprador', field: 'number' },
    ]

    return (
        <TableCardComponent
            service={new PurchaserService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'compradores'} />
    )
}