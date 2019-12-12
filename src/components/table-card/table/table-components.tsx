import React, { useEffect, useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { TableComponentProps, TypeTableComponentConfig, TypeSelectedPagination } from './table-types';
import { StyledReactPaginateBox } from './table-styles';
import ReactPaginate from 'react-paginate';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

export default ({ columnDefs, service }: TableComponentProps) => {
    const [tableInfo, setTableInfo] = useState<TypeTableComponentConfig>({ rowData: [], pageCount: 0 });

    useEffect(() => {
        (async () => {
            const tableInfo = await service.tableData();

            if (tableInfo) {
                setTableInfo({
                    rowData: tableInfo.data,
                    pageCount: tableInfo.last_page,
                });
            }
        })()
    }, [service]);

    const handlePagination = ({ selected }: TypeSelectedPagination): void => {
        // TODO: Adicionar requisição para coletar os dados da tabela
        console.log('selectedPage: ', selected);
    }

    return (
        <>
            <div className="ag-theme-balham" style={ {height: '500px', width: '100%'} }>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={tableInfo.rowData}
                    modules={AllCommunityModules}>
                </AgGridReact>
            </div>
            <StyledReactPaginateBox
                style={{ flex: 1 }} 
                className="d-flex justify-content-end">
                <ReactPaginate
                    previousLabel={'anterior'}
                    nextLabel={'próximo'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={tableInfo.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePagination}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </StyledReactPaginateBox>
        </>
    )
}