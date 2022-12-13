import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextareaAutosize, Grid, Paper, DialogActions, Dialog, DialogContent, DialogContentText, Typography } from '@mui/material';
import { Button, Box } from '@mui/material';
import { AttachFile } from "@mui/icons-material";
import { TextField } from '@mui/material';
const rows = [
    { Name: 'akjjndc ', Document: 'ads', Solution: 'jdhdh', },
];
const MyAssignment = () => {
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);

    };
    function createData(Name, Document, Solution) {
        return { Name, Document, Solution };
    }






    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 170 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="fw-bolder" align="col">Name</TableCell>
                            <TableCell className="fw-bolder" align="col">Document</TableCell>
                            <TableCell className="fw-bolder" align="col">Solution</TableCell>
                            <TableCell align="col"></TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Topic}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='left'>{row.Name}</TableCell>
                                <TableCell align="left">{row.Document}</TableCell>
                                <TableCell align="left">{row.Solution}</TableCell>
                                <TableCell>
                                    <Button sx={{
                                        color: "grey",
                                        "&:hover": {
                                            bgcolor: '#ED7633',
                                            color: "white",

                                        },
                                    }}><DeleteIcon />
                                    </Button>
                                    <Button variant="outlined" size="small" onClick={handleClickOpen} sx={{
                                        color: "grey",
                                        "&:hover": {
                                            bgcolor: '#ED7633',
                                            color: "white",

                                        },
                                    }}>Create Solution</Button>
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogContent sx={{ border: 5, color: '#ED7633' }} >
                    <DialogContentText>


                        <Typography className="fw-bolder">Comments</Typography>
                        <TextareaAutosize aria-label="minimum height" minLength={500} minRows={5} placeholder="please enter comments" style={{ width: 500 }} />
                        <Typography className="fw-bolder">Rejection Comment</Typography>
                        <TextField margin="normal" placeholder="please enter Rejection comments" sx={{ width: 500 }} />
                        <Box sx={{ bgcolor: ' rgb(254, 247, 243)', textAlign: 'center' }} >
                            <p><AttachFile />AttachFile</p>
                            <p>File size should not exceed 30MB</p>
                            <Button variant='Filled' component="label" sx={{ bgcolor: '#ED7633', color: 'white' }}>Choose File<input type="file" hidden /></Button>
                        </Box>
                    </DialogContentText>
                    <DialogActions>

                        <Button sx={{ bgcolor: '#ED7633', }} variant="contained">Add Assignment Solution</Button>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>


                    </DialogActions>
                </DialogContent>
            </Dialog>
        </Grid>
    );
}
export default MyAssignment;