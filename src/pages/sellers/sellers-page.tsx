import React from 'react';
import { TableCardComponent } from '../../components/table-card';
import { SellerService } from '../../services/seller';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Documento legal', field: 'cpf_cnpj' },
        { headerName: 'Celular', field: 'cellphone' },
        { headerName: 'Código do comprador', field: 'number' },
        { headerName: 'Data de criação', field: 'created_at' },
    ]

    return (
        <TableCardComponent
            service={new SellerService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'vendedores'} />
    )
}