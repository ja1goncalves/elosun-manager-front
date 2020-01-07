import { ITableData } from "../../../utils/app-models.utils";

export type TableComponentProps = {
    columnDefs: TypeColumnDefs[];
    service: ITableData;
    cellClicked?: (...params: any) => void;
    onTableRequisition?: (response: any) => void;
    customReqParams?: any;
};

export type TypeSelectedPagination = {
    selected: number;
};

export type TypeTableComponentConfig = {
    rowData: TypeRowData[];
    pageCount: number;
}

export type TypeColumnDefs = {
    headerName: string;
    field: string;
    sortable?: boolean;
    filter?: boolean;
};

type TypeRowData = {
    [key: string]: number | string | boolean
};