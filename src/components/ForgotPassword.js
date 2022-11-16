import React from "react";
import { Grid, Box, List, ListItem, ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';
export default function ForgotPassword() {
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  return (
    
    
    <div>
<List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    </div>
    // <Grid

    // //   justifyContent="center"
    // >
    //   <Grid item container direction="row" alignItems="flex-end" justifyContent="flex-end">
    //     <Box direction="row" alignItems="flex-end" justifyContent="flex-end">
    //       <h1>col1</h1>
    //       <h1>col2</h1>
    //       <h1>col3</h1>
    //     </Box>
    //     <Box direction="row" alignItems="flex-end" justifyContent="flex-end">
    //       <h1>col1</h1>
    //       <h1>col2</h1>
    //       <h1>col3</h1>
    //     </Box>
    //   </Grid>
    // </Grid>




//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//   <Grid item xs={6}>
//     <Box>1</Box>
//   </Grid>
//   <Grid item xs={6}>
//     <Box>2</Box>
//   </Grid>
//   <Grid item xs={6}>
//     <Box>3</Box>
//   </Grid>
//   <Grid item xs={6}>
//     <Box>4</Box>
//   </Grid>
// </Grid>



/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box>xs=2</Box>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Divider />
      <Divider />
    </Box>
     */


     
  );
}
