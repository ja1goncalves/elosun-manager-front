import React from 'react';
import { DistributorService } from '../../services/distributor';
import { TableCardComponent } from '../../components/table-card';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Sigla', field: 'initials' },
        { headerName: 'Estações', field: 'total_stations' },
        { headerName: 'Potência (kW)', field: 'potency_kW' },
    ];

    return (
        <TableCardComponent
            service={new DistributorService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'fornecedores'} />
    )
}
