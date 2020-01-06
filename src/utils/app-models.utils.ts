export type PaginateDatabaTable = {
    current_page: number
    data: any[]
    first_page_url: string;
    from: string | null;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: number | null;
    to: string | null;
    total: number;
}


export type TableDataParams = {
    page?: number;
    custom?: any;
}

export interface ITableData {
    tableData: (params: TableDataParams) => Promise<PaginateDatabaTable>;
}