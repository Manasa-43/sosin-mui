import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Cardimg from "../assets/Card img.png";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
export default function Courses() {
  const courseArray = [
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
      path : "/Courses/Courses22"
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2021 Foundation Batch",
      path : "/Courses/Courses21"

    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2020 Foundation Batch",
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2019 Foundation Batch",
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2018 Foundation Batch",
    },
    {
      img: Cardimg,
      name: " UPSC Anthropology Coaching: Dec 2017 Foundation Batch",
    },
  ];
  // const courseArray =[]

  console.log(courseArray.length);
  return (
    <Box sx={{pt: "3rem", mb: "6rem", px:'2rem'}}>
      <Typography
        sx={{ fontWeight: "500", fontSize: "2rem", pb: "2rem", px:'4rem' }}
        variant="h2"
      >
        All Courses
      </Typography>
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
          <Typography sx={{ px: "2rem" }}>No courses available</Typography>
        )}

        {/* // {courseArray.map((item, index) =>
        //   courseArray.length > 0 ? (
           
        //   ) : (
        //     <Grid item key={index} xs={12} sm={4} md={4}>
        //       <Card elevation={3} sx={{ maxWidth: 300, borderRadius: 2 }}>
        //         <CardActionArea>
        //           <CardMedia
        //             component="img"
        //             height="140"
        //             src={item.img}
        //             alt="Course image"
        //           />
        //           <CardContent>
        //             <Typography
        //               variant="body2"
        //               component="div"
        //               sx={{ fontWeight: "bold" }}
        //             >
        //               {item.name}
        //             </Typography>
        //           </CardContent>
        //         </CardActionArea>
        //       </Card>
        //     </Grid>
        //   )  
        // )}  */}

        {/* <Grid item xs={12} sm={4} md={4}>
          <Card elevation = {3} sx={{ maxWidth: 300, borderRadius:2  }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={Cardimg}
                alt="Course image"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  UPSC Anthropology Coaching: Dec 2022 Foundation Batch
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card elevation = {3} sx={{ maxWidth: 300 , borderRadius:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={Cardimg}
                alt="Course image"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  UPSC Anthropology Coaching: Dec 2022 Foundation Batch
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card elevation = {3} sx={{ maxWidth: 300 , borderRadius:2  }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={Cardimg}
                alt="Course image"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  UPSC Anthropology Coaching: Dec 2022 Foundation Batch
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card  elevation = {3} sx={{ maxWidth: 300 , borderRadius:2  }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={Cardimg}
                alt="Course image"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  UPSC Anthropology Coaching: Dec 2022 Foundation Batch
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card  elevation = {3} sx={{ maxWidth: 300 , borderRadius:2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={Cardimg}
                alt="Course image"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  UPSC Anthropology Coaching: Dec 2022 Foundation Batch
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
}
