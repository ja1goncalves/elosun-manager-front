import React from 'react';
import { TableCardComponent } from '../../components/table-card';
import { OrderService } from '../../services/order';

export default () => {
    const columnDefs = [
        { headerName: 'Gasta de (kw)', field: 'start_watts' },
        { headerName: 'Gasta até (kw)', field: 'end_watts' },
        { headerName: 'Tipo da venda', field: 'type_order' },
        { headerName: 'Data de criação', field: 'created_at' },
        { headerName: 'Status', field: 'order_status_id' },
    ]

    return (
        <TableCardComponent
            service={new OrderService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'ordens de pagamento'} />
    )
}