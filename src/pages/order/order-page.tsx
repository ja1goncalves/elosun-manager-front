import React from 'react';
import { TableCardComponent } from '../../components/table-card';
import { OrderService } from '../../services/order';
import moment from 'moment';

export default () => {
    const columnDefs = [
        { headerName: 'Gasta de (kw)', field: 'start_watts' },
        { headerName: 'Gasta até (kw)', field: 'end_watts' },
        { headerName: 'Tipo da venda', field: 'type_order', cellRenderer({ data: { type_order } }: any) {
            return type_order === 'sale' ?
                'venda' :
                'compra'
        } },
        { headerName: 'Data de criação', field: 'created_at', cellRenderer({ data: { created_at } }: any) {
            return moment(created_at).format('DD/MM/YYYY');
        }, suppressSizeToFit: true },
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