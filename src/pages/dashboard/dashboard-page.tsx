import React from 'react';
import { UserService } from '../../services/user';
import { TableCardComponent } from '../../components/table-card';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
    ]

    return (
        <TableCardComponent
            service={new UserService()}
            columnDefs={columnDefs}
            className={'row w-100'}
            listName={'usuários'} />
    )
}