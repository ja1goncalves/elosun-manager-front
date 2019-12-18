import React from 'react';
import { TableCardComponent } from '../../components/table-card';
import { AnaelService } from '../../services/anael';

export default () => {
    const columnDefs = [
        { headerName: 'Distribuidora', field: 'name' },
        { headerName: 'Quantidade', field: 'email' },
        { headerName: 'Quantidade de UCs que recebem os créditos', field: 'email' },
        { headerName: 'Potência Instalada (kW)', field: 'email' },
    ]

    return (
        <TableCardComponent
            service={new AnaelService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'usuários'} />
    )
}