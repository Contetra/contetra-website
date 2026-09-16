type DataTableProps = {
  columns: string[];
  rows: string[][];
};

export default function DataTable({ columns, rows }: DataTableProps) {
  const gridStyle = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` };
  const minWidth = columns.length > 2 ? `${columns.length * 220}px` : undefined;

  return (
    <div className="overflow-x-auto rounded-[8px] border border-[#eef1f8] bg-white dark:border-[#1F2937] dark:bg-[#111827]">
      <div style={{ minWidth }}>
        <div
          className="grid gap-2 bg-[#1a1640] px-6 py-4 text-sm font-bold text-white dark:bg-[#172036]"
          style={gridStyle}
        >
          {columns.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div
            key={row[0] + rowIndex}
            className={`grid gap-2 px-6 py-5 ${rowIndex < rows.length - 1 ? "border-b border-[#eef1f8] dark:border-[#1F2937]" : ""}`}
            style={gridStyle}
          >
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={
                  cellIndex === 0
                    ? "text-sm font-semibold leading-6 text-[#1a1640] dark:text-white"
                    : "text-sm leading-6 text-[#25243a] dark:text-[#D1D5DB]"
                }
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
