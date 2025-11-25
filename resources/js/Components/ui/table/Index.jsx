// Table Component
function Table({ children, className = "" }) {
    return <table className={`min-w-full ${className}`}>{children}</table>;
}

// TableHeader Component
function TableHeader({ children, className = "" }) {
    return <thead className={className}>{children}</thead>;
}

// TableBody Component
function TableBody({ children, className = "" }) {
    return <tbody className={className}>{children}</tbody>;
}

// TableRow Component
function TableRow({ children, className = "" }) {
    return <tr className={className}>{children}</tr>;
}

// TableCell Component
function TableCell({ children, isHeader = false, className = "" }) {
    const CellTag = isHeader ? "th" : "td";
    return <CellTag className={className}>{children}</CellTag>;
}

export { Table, TableHeader, TableBody, TableRow, TableCell };
