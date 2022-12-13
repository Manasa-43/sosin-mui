import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, TextField } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
// import { useHistory } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';


function TablePaginationActions(props) {

  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;



  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

  };
  // const history = useHistory()

  return (

    <Box sx={{ flexShrink: 0, ml: 1 }}>

      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>

    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name) {
  return { name };
}

const rows = [
  { name: "EKLAVYA SCHOOLS(15-11-2022)", url: "/EklavyaSchools" },
  { name: '2020 RANKERS', url: "/Rankers" },
  { name: 'TEST', url: "/Test" },
  { name: 'DND 15-11-2022', url: "/Dnd" },
  { name: 'METANE ALERT AND RESPONSE SYSTEM', url: "/Metane" },
  { name: 'DND 12-11-2022', url: "/Dnd" },
  { name: 'Iorem', url: "/Iorem" },
  { name: 'Indian Biological Data Center', url: "/Indian" },


].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [selectedRow, setSelectedRow] = React.useState({});
  console.log({ selectedRow });
  // const SearchBar = ({setSearchQuery}) => (

  // );
  return (
    <TableContainer component={Paper} md={8}  >
     <Box  sx={{textAlign:'center', flexDirection: 'row'}} pt={1} ><h3>Current Affairs</h3>
     <Box style={{float:'right'}} pb={2}>
     <TextField id="standard-bare"
                variant="outlined"
               label="search"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
               </Box>
               </Box>
      <Table row   sx={{ textAlign: 'center'}}  > 
        <Table aria-label="custom pagination table"  >
          <TableHead>
            <TableRow >
              <TableCell sx={{ bgcolor: '#ED7633', color: '#ffffff', textAlign: 'center' }}>Daily News Dairy</TableCell>
            </TableRow>

          </TableHead>
          <TableBody >
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            )

              .map((rows, index) => (
                <TableRow component={Link} to={rows.url} style={{ textDecoration: 'none' }}
                   key={rows.name} onClick={(handleClose) => setSelectedRow(rows)}
                  sx={{
                    "&:hover": {
                      bgcolor: "rgba(237, 119, 51, 0.15)",
                      color: "black",
                      
                    },
                  }}
                >
                  
                    <TableCell component="th" scope="row" >
                    {rows.name}
                    </TableCell>
                    
                </TableRow>

              ))
            }
            {emptyRows > 0 && (
              <TableRow style={{ height: 45 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </Table>
    </TableContainer>
  );
}