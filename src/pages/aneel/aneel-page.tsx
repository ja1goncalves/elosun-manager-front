import React from 'react';
import { TableCardComponent } from '../../components/table-card';
import { AneelService } from '../../services/aneel';

export default () => {
    const columnDefs = [
        { headerName: 'Distribuidora', field: 'name' },
        { headerName: 'Quantidade', field: 'email' },
        { headerName: 'Quantidade de UCs que recebem os créditos', field: 'email' },
        { headerName: 'Potência Instalada (kW)', field: 'email' },
    ]

    const aneelService = AneelService.getInstance();


    return (
        <TableCardComponent
            service={aneelService}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'usuários'} />
    )
}