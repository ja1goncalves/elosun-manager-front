import React from 'react';
import { StyledCard } from '../page-card';
import { TableComponent } from './table';
import { TableCardComponentProps } from './table-card-types';

export default ({ className, columnDefs, service, listName, cellClicked, customReqParams, onTableRequisition, pathToList }: TableCardComponentProps) => {
    return (
        <StyledCard className={`text-secondary ${className}`}>
            <div className="row w-100">
                <h2>Listagem de {listName}</h2>
            </div>
            <hr className="row w-100" />
            <div className="row w-100">
                <TableComponent
                    service={service}
                    columnDefs={columnDefs}
                    cellClicked={cellClicked}
                    customReqParams={customReqParams}
                    onTableRequisition={onTableRequisition}
                    pathToList={pathToList}
                />
            </div>
        </StyledCard>
    )
}