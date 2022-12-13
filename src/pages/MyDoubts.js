import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Id, OrderId, PaymentId, Amount, Created, User) {
  return { Id, OrderId, PaymentId, Amount, Created, User };
}

const rows = [
  { Topic: 'sosin', About: 'Anthropology', Query: 'What is Anthroplogy?', Status: 'Answered', Created: '12-12-2000' },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 170 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="fw-bolder" align="col">Topic</TableCell>
            <TableCell className="fw-bolder" align="col">About</TableCell>
            <TableCell className="fw-bolder" align="col">Query</TableCell>
            <TableCell className="fw-bolder" align="col">Status</TableCell>
            <TableCell className="fw-bolder" align="col">Created</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Topic}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{row.Topic}</TableCell>
              <TableCell align="left">{row.About}</TableCell>
              <TableCell align="left">{row.Query}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align="left">{row.Created}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}