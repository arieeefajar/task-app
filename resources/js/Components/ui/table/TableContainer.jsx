export default function TableContainer({ children }) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">
            <div className="max-w-full overflow-x-auto">{children}</div>
        </div>
    );
}
