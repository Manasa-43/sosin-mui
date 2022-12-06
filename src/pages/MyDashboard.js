import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Sidebar from "../components/Sidebar"
import "../App.css";
// import Sidebar from "../components/Sidebar";

const MyDashboard = () =>{
    const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}} >
`;

          
      return (
        <Box pt={10} pb={20}
          sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            // flexWrap: 'wrap',
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
          <div className="two" >
          <Paper elevation={2}/>
          <h1>0</h1>
          <p>MyTestSeries</p>
          </div>
          <div  className="three">
          <Paper  elevation={2} />
          <h1>0</h1>
          <p>MyDoubts</p>
          </div>
          <div>
          {/* <Sidebar/> */}
        </div>
        </Box>
       
  );
};

export default MyDashboard;
