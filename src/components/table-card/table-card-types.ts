import { ITableData } from "../../utils/app-models.utils"
import { TableComponentProps } from "./table/table-types";

export type TableCardComponentProps = TableComponentProps & {
    className: string;
    listName: string;
}