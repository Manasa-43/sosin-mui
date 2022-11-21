import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import "../App.css";
const MyDashboard = () =>{
    const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}} alignItems="center"
justifyContent="center">
`;

          
      return (
        <Box
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
  );
}
        
        

export default MyDashboard;