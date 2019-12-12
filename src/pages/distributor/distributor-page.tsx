import React from 'react';
import { DistributorService } from '../../services/distributor';
import { TableCardComponent } from '../../components/table-card';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Site', field: 'site' },
        { headerName: 'Sigla', field: 'initials' },
    ];

    return (
        <TableCardComponent
            service={new DistributorService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'fornecedores'} />
    )
}