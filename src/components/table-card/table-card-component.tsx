import React from 'react';
import { StyledCard } from '../page-card';
import { TableComponent } from './table';
import { TableCardComponentProps } from './table-card-types';

export default ({ className, columnDefs, service, listName }: TableCardComponentProps) => {
    return (
        <StyledCard className={className}>
            <div className="row w-100">
                <h4>Listagem de {listName}</h4>
            </div>
            <hr className="row w-100" />
            {/* <div className="row w-100">
                <h4>Filtragem</h4>
            </div>
            <hr className="row w-100" /> */}
            <div className="row w-100">
                <TableComponent
                    columnDefs={columnDefs}
                    service={service}
                />
            </div>
        </StyledCard>
    )
}