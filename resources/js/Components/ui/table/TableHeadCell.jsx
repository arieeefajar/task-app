import { TableCell } from "./Index";

export default function TableHeadCell({ children, className = "" }) {
    return (
        <TableCell
            isHeader
            className={`px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 ${className}`}
        >
            {children}
        </TableCell>
    );
}
