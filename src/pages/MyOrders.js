import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const rows= [
    { OrderId:'1423es45tg',PaymentId:12356788, Amount:3456,Created:'sunday',User:'sowji' }
]

function MyOrders() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 170 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">#</TableCell>
                        <TableCell align="right">Order Id</TableCell>
                        <TableCell align="right">Payment Id</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">User</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[rows].map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{row.Id}</TableCell>
                            <TableCell align="right">{row.Id}</TableCell>
                            <TableCell align="right">{row.Id}</TableCell>
                            <TableCell align="right">{row.Id}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};
export default MyOrders;