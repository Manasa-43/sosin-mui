import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Cardimg from "../assets/Card img.png";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
// import { set } from "react-hook-form";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const allCourses = [
  {
    name: "Anthropology",
    imgArr: [
      {
        img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
        title: "UPSC Anthropology Coaching: Dec 2022 Foundation Batch  1",
        label: 1,
      },
      {
        img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
        title: "UPSC Anthropology Coaching: Dec 2022 Foundation Batch  2",
        label: 2,
      },
      {
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
        title: "UPSC Anthropology Coaching: Dec 2022 Foundation Batch  3",
        label: 3,
      },
      {
        img: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
        title: "UPSC General Studies Coaching: Dec 2022 Foundation Batch  4",
        label: 4,
      },
    ],
  },
  {
    name: "General Studies",
    imgArr: [
      {
        img: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
        title: "UPSC General Studies Coaching: Dec 2022 Foundation Batch 1",
        label: 1,
      },
      {
        img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
        title: "UPSC General Studies Coaching: Dec 2022 Foundation Batch 2",
        label: 2,
      },
    ],
  },
];



function Courses22() {
  const [currentCourse, setCurrentCourse] = React.useState(allCourses[0]);
  return (
    <Box sx={{ px: "4rem" }}>
      <Typography
        variant="h4"
        sx={{
          fontsize: "2.5rem",
          textAlign: "center",
          fontWeight: "700",
          my: "2rem",
        }}
      >
        Anthropology Online Classes: Dec 2022 Foundation Batch
      </Typography>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        // sx={{ px: "4rem" }}
      >
        <Grid item xs={12} sm={6}>
          <Card elevation={3} sx={{ maxWidth: "650px", maxHeight: "170px" }}>
            <CardMedia
              component="img"
              height="170"
              src={Cardimg}
              alt="Course image"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            elevation={3}
            sx={{
              py: "2rem",
              minHeight: "170px",
              px: "1rem",
              maxWidth: "650px",
            }}
          >
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              sx={{ px: "0.5rem" }}
            >
              <Typography
                sx={{ color: "rgba(59, 59, 59, 0.98)", alignSelf: "center" }}
              >
                Course Fee
              </Typography>
              <Typography
                sx={{ color: "#ED7633", fontWeight: 500, fontSize: "1.5rem" }}
              >
                INR 45000
              </Typography>
            </Grid>
            <Box sx={{ textAlign: "center", mt: "1rem" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ED7633",
                  "&:hover": { bgcolor: "#ED7633" },
                  py: "0.5rem",
                  px: "2 rem",
                  borderRadius: "6",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                }}
              >
                <Link to="/Shop" className="link">
                  {" "}
                  TAKE THIS COURSE
                </Link>
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ fontSize: "2rem", fontWeight: 500, my: "2rem" }}>
        Program Overview
      </Box>
      <Box sx={{ fontSize: "2rem", fontWeight: 500, my: "2rem" }}>Features</Box>
      <Grid align="center">
        <Grid>
          <Typography sx={{ fontSize: "2rem", fontWeight: 500, my: "2rem" }}>
            Related Courses
          </Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ my: "3rem" }}>
        <Box
          sx={{
            // maxWidth: 1200,
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Box>
            <Grid
              display="flex"
              justifyContent="center"
              sx={{ mb: "2rem", mx: "1rem" }}
            >
              {allCourses.map((item) => (
                <Box>
                  {item.name === currentCourse.name ? (
                    <Button
                      onClick={() => setCurrentCourse(item)}
                      sx={{
                        bgcolor: "#ED7633",
                        variant: "contained",
                        color: "white",
                        "&:hover": { bgcolor: "#ED7633" },
                        py: "0.5rem",
                        px: "1.5rem",
                        borderRadius: "2rem",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                        width: "100%",
                        whiteSpace: "nowrap",

                        // mx:'1rem'
                      }}
                    >
                      {item.name}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setCurrentCourse(item)}
                      sx={{
                        // bgcolor: "#ED7633",
                        color: "rgba(59, 59, 59, 0.68)",
                        // "&:hover": { bgcolor: "#ED7633" },
                        py: "0.5rem",
                        px: "1.5rem",
                        borderRadius: "2rem",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                        width: "100%",
                        whiteSpace: "nowrap",

                        // mx:'1rem'
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </Box>
              ))}
            </Grid>
            <Carousel data={currentCourse} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Courses22 };
