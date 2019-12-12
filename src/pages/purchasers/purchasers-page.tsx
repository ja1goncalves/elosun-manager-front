import React from 'react';
import { StyledCard } from '../../components/page-card';
import { TableComponent } from '../../components/table-card/table';
import { PurchaserService } from '../../services/purchaser';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Documento legal', field: 'cpf_cnpj' },
        { headerName: 'Celular', field: 'cellphone' },
        { headerName: 'Código do comprador', field: 'number' },
    ]

    return (
        <StyledCard>
            <TableComponent
                columnDefs={columnDefs}
                service={new PurchaserService()} />
        </StyledCard>
    )
}