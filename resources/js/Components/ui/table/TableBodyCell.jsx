import { TableCell } from "./Index";

export default function TableBodyCell({ children, className = "" }) {
    return (
        <TableCell
            className={`px-5 py-3 text-gray-600 text-start text-theme-sm dark:text-gray-300 ${className}`}
        >
            {children}
        </TableCell>
    );
}
