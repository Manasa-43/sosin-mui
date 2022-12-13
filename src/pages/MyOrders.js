import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
function createData(Id, OrderId, PaymentId, Amount, Created, User) {
  return { Id, OrderId, PaymentId, Amount, Created, User };
}

const rows = [
  { Id: '1', OrderId: '123453456', PaymentId: '29838302', Amount: '3456', Created: '12-12-2000', User: 'sowji' },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 170 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="fw-bolder" align="col">#</TableCell>
            <TableCell className="fw-bolder" align="col">Order Id</TableCell>
            <TableCell className="fw-bolder" align="col">Payment Id</TableCell>
            <TableCell className="fw-bolder" align="col">Amount</TableCell>
            <TableCell className="fw-bolder" align="col">Created</TableCell>
            <TableCell className="fw-bolder" align="col">User</TableCell>
            <TableCell className="fw-bolder" align="col"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{row.Id}</TableCell>
              <TableCell align="left">{row.OrderId}</TableCell>
              <TableCell align="left">{row.PaymentId}</TableCell>
              <TableCell align="left">{row.Amount}</TableCell>
              <TableCell align="left">{row.Created}</TableCell>
              <TableCell align="left">{row.User}</TableCell>
              <TableCell>
                <Button sx={{
                  color: "grey",
                  "&:hover": {
                    bgcolor: '#ED7633',
                    color: "white",

                  },
                }}><VisibilityIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}