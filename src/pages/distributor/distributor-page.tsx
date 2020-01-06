import React from 'react';

import { DistributorService } from '../../services/distributor';
import { TableCardComponent } from '../../components/table-card';
import { useHistory } from 'react-router-dom';

export default () => {

    const history = useHistory();

    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Sigla', field: 'initials' },
        { headerName: 'Estações', field: 'total_stations' },
        { headerName: 'Potência (kW)', field: 'potency_kW' },
    ];

    const cellClicked = (event: any) => {
        const { data: { initials, name } } = event;

        history.push({
            pathname: 'distributors/stations',
            search: `?initials=${initials}&name=${name}`,
        })
    }

    return (
        <TableCardComponent
            service={new DistributorService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'fornecedores'}
            cellClicked={cellClicked} />
    )
}
