import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Cardimg from "../assets/Card img.png";
import Paper from "@mui/material/Paper";
import { Link, Outlet, useParams } from "react-router-dom";
// import { Courses22 } from "./Courses22";
export default function Courses() {
// const {id} = useParams();

// const {courseId, setCourseId} = React.useState()
// console.log(courseId)
  const courseArray = [
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
      path : "/Courses/Courses22",
      label:1
      // path: `/Courses/${id}`
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2021 Foundation Batch",
      path : "/Courses/Courses21",
      label:2
      // path : `/Courses/${id}`

    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2020 Foundation Batch",
      label:3
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2019 Foundation Batch",
      label:4
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2018 Foundation Batch",
      label:5
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2017 Foundation Batch",
      label:6
    },
  ];

  console.log(courseArray.length);

  return (
    <Box sx={{pt: "3rem", mb: "6rem", px:'2rem'}}>
      <Box
        sx={{ fontWeight: "500", fontSize: "2rem", pb: "2rem", px:'4rem' }}
       
      >
        <h2>All Courses</h2>
      </Box>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 2, sm: 3, md: 2 }}        
        sx={{ pt: "2rem" ,alignItems:'center'}}
      >
        {courseArray.length > 0 ? (
          courseArray.map((item, index) => (
            <Grid item display='flex' justifyContent='center' key={index} xs={12} sm={4} md={4}   >
              <Card elevation={3} sx={{ maxWidth: 300, borderRadius: 2 }} >
                <Link to={item.path} className='link'>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      src={item.img}
                      alt="Course image"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))
        ) : (
          <Box sx={{ px: "2rem" }}><h2>No courses available</h2></Box>
        )}
      </Grid>
     
    </Box>
    
  );
}
