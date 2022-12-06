// import React from "react"
// import { Box } from "@mui/material"
// export default function Shop(){
//     return(
//         <Box>Shop page</Box>
//     )
// }
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import img from "../assets/sosin-pamplet.png";
import bookImg from "../assets/bookSample.png"
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
export default function Shop() {
  const shopArray = [
    {
      img: img,
      title: "Anthropology Online Live: Dec 2022 Comprehensive Batch",
      description: "UPSC Anthropology Coaching ",
      price: "46500",
    },
    {
      img: img,
      title: "Anthropology Online Live: Dec 2022 Comprehensive Batch",
      description: "UPSC Anthropology Coaching ",
      price: "46500",
    },
    {
      img: img,
      title: "Anthropology Online Live: Dec 2022 Comprehensive Batch",
      description: "UPSC Anthropology Coaching ",
      price: "38000",
    },
    {
      img: img,
      title: "Anthropology Online Live: Dec 2022 Comprehensive Batch",
      description: "UPSC Anthropology Coaching ",
      price: "38000",
    },
  ];
  
  const bookArray = [
    {
      img: bookImg,
      title: "ARCHEOLOGICAL ANTHROPOLOGY",
      description: "UPSC Anthropology Coaching ",
      price: "500",
    },
    {
      img: bookImg,
      title: "INDIAN SOCIETY",
      description: "UPSC Anthropology Coaching ",
      price: "550",
    },
    {
      img: bookImg,
      title: "ARCHEOLOGICAL ANTHROPOLOGY",
      description: "UPSC Anthropology Coaching ",
      price: "500",
    },
    {
      img: bookImg,
      title: "INDIAN SOCIETY",
      description: "UPSC Anthropology Coaching ",
      price: "2900",
    },
  ];
  // const shopArray =[]

  console.log(shopArray.length);
  return (
    <Box>
    <Box sx={{ pt: "3rem", mb: "6rem" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
          pb: "5rem",
          textAlign: "center",
          color: "#545252",
        }}
        variant="h2"
      >
        Courses
      </Typography>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ pb: "2rem", backgroundColor: "rgba(237,118,51,.06)" }}
      >
        {shopArray.length > 0 ? (
          shopArray.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              sx={{ textAlign: "center"}}
            >
              <Grid  sx={{ textAlign: "center" }}  >
                <Box
                  component="img"
                  src={item.img}
                  alt="Course image"
                  sx={{
                    height: "250px",
                    width: "200px",
                    py: 2,
                    px: 3,
                    border: 1,
                    borderColor: "hsla(0,0%,43.9%,.4)",
                  }}
                />
              </Grid>
              {/* <CardContent> */}
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#007185",
                  pt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                component="div"
                sx={{
                  // fontWeight: "bold",
                  // fontSize: "14px",
                  color: "inherit",
                  pt: 1,
                }}
              >
                {item.description}
              </Typography>
              <Grid display="flex" justifyContent='center'>
                <CurrencyRupeeIcon
                  sx={{
                    alignSelf: "center",
                    color: "#df2209",
                    fontWeight: 'bold',
                    fontSize: 40,
                    py: 1,
                  }}
                />
                <Typography
                  sx={{
                    color: "#df2209",
                    fontWeight: 500,
                    fontSize: "20px",
                    py: 1,
                    alignSelf: "center",
                  }}
                >
                  {item.price}
                </Typography>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ED7633",
                  "&:hover": { bgcolor: "#ED7633" },
                  py: "0.5rem",
                  px: "4rem",
                  borderRadius: "3rem",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Add to Cart
              </Button>
              {/* </CardContent> */}
            </Grid>
          ))
        ) : (
          <Typography sx={{ px: "2rem" }}>No courses available</Typography>
        )}        
      </Grid>
    </Box>

    <Box sx={{  pt: "3rem", mb: "6rem" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
          pb: "5rem",
          textAlign: "center",
          color: "#545252",
        }}
        variant="h2"
      >
        Books
      </Typography>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ pb: "2rem", backgroundColor: "rgba(237,118,51,.06)" }}
      >
        {bookArray.length > 0 ? (
          bookArray.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              sx={{ textAlign: "center" }}
            >
              <Grid sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={item.img}
                  alt="Book image"
                  sx={{
                    height: "250px",
                    width: "200px",
                    py: 2,
                    px: 3,
                    border: 1,
                    borderColor: "hsla(0,0%,43.9%,.4)",
                  }}
                />
              </Grid>
              {/* <CardContent> */}
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#007185",
                  pt: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                component="div"
                sx={{
                  // fontWeight: "bold",
                  // fontSize: "14px",
                  color: "inherit",
                  pt: 1,
                }}
              >
                {item.description}
              </Typography>
              <Grid display="flex" justifyContent='center' textAlign='center'>
                <CurrencyRupeeIcon
                  sx={{
                    alignSelf: "center",
                    color: "#df2209",
                    fontWeight: 'bold',
                    fontSize: 40,
                    py: 1,
                  }}
                />
                <Typography
                  sx={{
                    color: "#df2209",
                    fontWeight: 500,
                    fontSize: "20px",
                    py: 1,
                    alignSelf: "center",
                  }}
                >
                  {item.price}
                </Typography>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ED7633",
                  "&:hover": { bgcolor: "#ED7633" },
                  py: "0.5rem",
                  px: "4rem",
                  borderRadius: "3rem",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Add to Cart
              </Button>
              {/* </CardContent> */}
            </Grid>
          ))
        ) : (
          <Typography sx={{ px: "2rem" }}>No courses available</Typography>
        )}        
      </Grid>
    </Box>
    </Box>
  );
}
