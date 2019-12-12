import React from 'react';
import { TableCardComponent } from '../../components/table-card';
import { StockService } from '../../services/stock';

export default () => {
    const columnDefs = [
        { headerName: 'Sei la', field: 'created_at' },
        { headerName: 'Data de criação', field: 'created_at' },
        { headerName: 'Status', field: 'order_status_id' },
    ]

    return (
        <TableCardComponent
            service={new StockService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'estoque'} />
    )
}