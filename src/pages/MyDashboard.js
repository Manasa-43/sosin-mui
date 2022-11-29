import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Sidebar from "../components/Sidebar"
import "../App.css";
import { Typography } from "@mui/material";
const MyDashboard = () => {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  //   const jsx = `
  // <Grid container spacing={${spacing}} alignItems="center"
  // justifyContent="center">
  // `;

  return (
    <div>
    <Sidebar />
    <Box sx={{ ml: "240px" }}></Box>
    <Box
      sx={{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          ml: 2,
          width: 158,
          height: 158,

        },
      }}
    >
      <div className="one" >
      <Paper  elevation={2}/>
      <h1>1</h1>
      <p>MY Courses</p>
      </div>
      <div className="two " >
      <Paper elevation={2}/>
      <h1>0</h1>
      <p>MyTestSeries</p>
      </div>
      <div  className="three">
      <Paper  elevation={2} />
      <h1>0</h1>
      <p>MyDoubts</p>
      </div>
    
    </Box>
    </div>
    // <Box>
    // <Sidebar />
  
    // <Grid container md={4}> 
    //   <Grid container md={4}>
    //     <Paper elevation={3} className="one">
    //       <Typography>1</Typography>
    //     </Paper>
    //   </Grid>

    //   <Grid container md={4}>
    //     <Paper elevation={3} className="one">
    //       <Typography>1</Typography>
    //     </Paper>
    //   </Grid>

    //   <Grid container md={4}>
    //     <Paper elevation={3} className="one">
    //       <Typography>1</Typography>
    //     </Paper>
    //   </Grid>
      
    // </Grid>
    // </Box>
  );
};

export default MyDashboard;
