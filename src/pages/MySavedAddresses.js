import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Paper, Typography, Grid, Button, TextField, DialogActions, Dialog, DialogContent, DialogContentText } from "@mui/material";
import { FormControlLabel, TextareaAutosize } from "@mui/material";
import { Checkbox } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
const MySavedAddresses = () => {

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);

    };
    const rows = [
        { Id: '1', Address: "ad cnjfhncjn", Is_Active: 'active' },
    ];

    return (
        <Grid container>
            <Typography variant='h4' pt={5}>My Address</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" pb={5} pt={5} pl={50} >
                <Button sx={{ borderRadius: 10, bgcolor: '#ED7633' }} variant="contained" onClick={handleClickOpen}>Add Address</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 170 }} aria-label="simple table"  >
                    <TableHead >
                        <TableRow>
                            <TableCell className="fw-bolder" align="col">#</TableCell>
                            <TableCell className="fw-bolder" align="col">Address</TableCell>
                            <TableCell className="fw-bolder" align="col">Is_Active</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='left'>{row.Id}</TableCell>
                                <TableCell align="left">{row.Address}</TableCell>
                                <TableCell align="left">{row.Is_Active}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogContent sx={{ border: 5, color: '#ED7633' }} >
                    <DialogContentText>
                        <p><AttachFile />Is Active</p>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Is Active" />
                        <Typography >Address</Typography>
                        <TextareaAutosize aria-label="minimum height" minLength={500} minRows={5} placeholder="please enter address" style={{ width: 500 }} />

                    </DialogContentText>
                    <DialogActions>

                        <Button sx={{ bgcolor: '#ED7633' }} alignItems="center" variant="contained">Add Address</Button>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>


                    </DialogActions>
                </DialogContent>
            </Dialog>

        </Grid>
    );
};
export default MySavedAddresses;