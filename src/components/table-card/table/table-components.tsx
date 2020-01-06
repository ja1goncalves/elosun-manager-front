import React, { useEffect, useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import { TableComponentProps, TypeTableComponentConfig, TypeSelectedPagination } from './table-types';
import { StyledReactPaginateBox } from './table-styles';


export default ({ columnDefs, service, cellClicked, customReqParams, onTableRequisition, pathToList }: TableComponentProps) => {
    const [tableInfo, setTableInfo] = useState<TypeTableComponentConfig>({ rowData: [], pageCount: 0 });
    const [page, setPage] = useState<number>(1);

    const getArrFromPath = (response: any) => {
        if (pathToList) {

            return pathToList.length === 1 ?
                response[pathToList[0]] :
                pathToList.reduce((path, nextPath: string) => {
                    if (typeof path === 'string')
                        return response[path][nextPath];
                    return path[nextPath];
                });

        }

        return response;
    }

    useEffect(() => {
        (async () => {
            const response = await service.tableData({ page, custom: customReqParams });
            
            if (onTableRequisition)
                onTableRequisition(response);

            const tableInfo = getArrFromPath(response);

            if (tableInfo) {
                setTableInfo({
                    rowData: tableInfo.data,
                    pageCount: tableInfo.last_page,
                });
            }
        })()
    }, [service, page, customReqParams]);

    const handlePagination = async ({ selected }: TypeSelectedPagination): Promise<void> => {
        setPage(selected + 1);
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
                    onGridReady={onGridReady}
                    onRowClicked={cellClicked}>
                </AgGridReact>
            </div>
            <StyledReactPaginateBox
                style={{ flex: 1 }} 
                className="d-flex justify-content-end">
                <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                    nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
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