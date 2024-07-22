import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'firstName', headerName: 'First name', width: 160 },
  { field: 'lastName', headerName: 'Last name', width: 160 },
  { field : 'Email' , headerName: 'Email Id ' ,width:160 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Email:"snow@gmail.com", age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',Email:"lannister@gmail.com", age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',Email:"pawan@gmail.com", age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', Email:"stark@gmail.com", age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Email:"targaryen@gmail.com", age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, Email:"melisandre@gmail.com", age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Email:"clifford@gmail.com", age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Email:"frances@gmail.com", age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Email:"rosie@gmail.com", age: 65 },
];

export default function DataGridComponent() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
