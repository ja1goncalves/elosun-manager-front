import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { TableComponentProps } from './table-types';
import { StyledReactPaginateBox } from './table-styles';
import ReactPaginate from 'react-paginate';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

export default ({ columnDefs, rowData, pageCount, handlePagination }: TableComponentProps) => {
    return (
        <>
            <div className="ag-theme-balham" style={ {height: '500px', width: '100%'} }>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    modules={AllCommunityModules}>
                </AgGridReact>
            </div>
            <StyledReactPaginateBox
                style={{ flex: 1 }} 
                className="d-flex justify-content-end">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
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