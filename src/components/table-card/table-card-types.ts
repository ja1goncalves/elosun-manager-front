import { TableComponentProps } from "./table/table-types";

export type TableCardComponentProps = TableComponentProps & {
    className: string;
    listName: string;
    cellClicked?: (...params: any) => void;
    customReqParams?: any;
}