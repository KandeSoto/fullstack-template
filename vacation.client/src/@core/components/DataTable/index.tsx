import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import { useState } from 'react';
import {
  Table,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export const DataTable = <T,>({ data, columns }: DataTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const currentPage = table.getState().pagination.pageIndex;
  const totalPages = table.getPageCount();

  return (
    <>
      <Input
        placeholder="Buscar..."
        value={globalFilter ?? ''}
        onChange={(e) => setGlobalFilter(e.target.value)}        
        className="mb-3 w-25"
      />

      <Table bordered striped hover>
        <thead className="bg-night-sky text-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className={header.column.columnDef.meta?.className ?? ''}
                  style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc' && ' 🔼'}
                  {header.column.getIsSorted() === 'desc' && ' 🔽'}
                  {!header.column.getIsSorted() && header.column.getCanSort() && ' ↕️'}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Página {currentPage + 1} de {totalPages}
        </div>
        <Pagination className="mb-0">
          <PaginationItem disabled={!table.getCanPreviousPage()}>
            <PaginationLink previous onClick={() => table.previousPage()} />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i} active={i === currentPage}>
              <PaginationLink onClick={() => table.setPageIndex(i)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem disabled={!table.getCanNextPage()}>
            <PaginationLink next onClick={() => table.nextPage()} />
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
};
