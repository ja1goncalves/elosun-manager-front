export type TableComponentProps = {
    columnDefs: TypeColumnDefs[];
    rowData: TypeRowData[];
    pageCount: number;
    handlePagination: (selectedItem: TypeSelectedPagination) => void;
};

export type TypeSelectedPagination = {
    selected: number
};

export type TypeTableComponentConfig = {
    columnDefs: TypeColumnDefs[];
    rowData: TypeRowData[];
    pageCount: number;
}

type TypeColumnDefs = {
    headerName: string;
    field: string;
    sortable?: boolean;
    filter?: boolean;
};

type TypeRowData = {
    [key: string]: number | string | boolean
};