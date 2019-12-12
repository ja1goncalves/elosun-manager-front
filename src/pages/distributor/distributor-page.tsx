import React from 'react';
import { TableComponent } from '../../components/table';
import { StyledCard } from '../../components/page-card';
import { DistributorService } from '../../services/distributor';

export default () => {
    const columnDefs = [
        { headerName: 'Nome', field: 'name' },
        { headerName: 'Site', field: 'site' },
        { headerName: 'Sigla', field: 'initials' },
    ];

    return (
        <StyledCard className="row w-100">
            <div className="row w-100">
                <h4>Listagem de fornecedores da anael</h4>
            </div>
            <hr className="row w-100" />
            {/* <div className="row w-100">
                <h4>Filtragem</h4>
            </div>
            <hr className="row w-100" /> */}
            <div className="row w-100">
                <TableComponent
                    columnDefs={columnDefs}
                    service={new DistributorService()}
                />
            </div>
        </StyledCard>
    )
}