import React, { useEffect, useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import ReactPaginate from 'react-paginate';
import { TableComponentProps, TypeTableComponentConfig, TypeSelectedPagination } from './table-types';
import { StyledReactPaginateBox } from './table-styles';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

export default ({ columnDefs, service }: TableComponentProps, ref: any) => {
    const [tableInfo, setTableInfo] = useState<TypeTableComponentConfig>({ rowData: [], pageCount: 0 });

    useEffect(() => {
        (async () => {
            const tableInfo = await service.tableData({});

            if (tableInfo) {
                setTableInfo({
                    rowData: tableInfo.data,
                    pageCount: tableInfo.last_page,
                });
            }
        })()
    }, [service]);

    const handlePagination = async ({ selected }: TypeSelectedPagination): Promise<void> => {
        const tableInfo = await service.tableData({ page: selected + 1 });

        if (tableInfo) {
            setTableInfo({
                rowData: tableInfo.data,
                pageCount: tableInfo.last_page,
            });
        }
    }

    // Documentação de reinderizar colunas do agGrid:
    // https://www.ag-grid.com/javascript-grid-resizing/
    const onGridReady = (params: any) => {
        const gridApi = params.api;
        gridApi.sizeColumnsToFit();
    }

    return (
        <>
            <div className="ag-theme-balham" style={ {height: '300px', width: '100%'} }>
                <AgGridReact
                    defaultColDef={{ resizable: true }}
                    columnDefs={columnDefs}
                    rowData={tableInfo.rowData}
                    modules={AllCommunityModules}
                    onGridReady={onGridReady}>
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