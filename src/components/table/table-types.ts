export type TableComponentProps = {
    columnDefs: TypeColumnDefs[];
    rowData: TypeRowData[];
    pageCount: number;
    handlePagination: (selectedPage: number) => void;
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