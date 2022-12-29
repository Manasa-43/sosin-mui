import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Cardimg from "../assets/Card img.png";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Carouselimg1 from "../assets/Card img.png";
import Carouselimg2 from "../assets/test-image-1.png";
import Carouselimg3 from "../assets/test-image-2.png";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Testimonial from "./Testimonials";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "1",
    imgPath: Carouselimg2,
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
  },
  {
    label: "2",
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
    imgPath: Carouselimg3,
  },
  {
    label: "3",
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
    imgPath: Carouselimg2,
  },
  {
    label: "4",
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
    imgPath: Carouselimg3,
  },
];
const linkImages = [
  {
    id: "1",
    linkPath: "https://www.youtube.com/embed/fHd_ttfBg5U",
    title: "Motivational Video free stock video HD",
  },
  {
    id: "2",
    linkPath: "https://www.youtube.com/embed/fHd_ttfBg5U",
    title: "Motivational Video free stock video HD",
  },
];
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

function TestSeries() {
  const [currentCourse, setCurrentCourse] = React.useState(allCourses[0]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <Grid container px="4rem" py={4}>
        {/* <CarouselContent /> */}

        <Grid
          item
          md={3}
          component="img"
          sx={{
            height: 255,
            display: "block",
            //   maxWidth: 400,
            overflow: "hidden",
            width: "100%",
          }}
          src={Carouselimg1}
        ></Grid>
        <Grid item md={9}>
          <Box sx={{ flexGrow: 1 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {activeStep === index ? (
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        //   maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                ></Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                ></Button>
              }
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ px: "5rem" }}>
        <Box
          sx={{
            fontWeight: "bold",
            // fontSize: "5rem",
            pb: "2rem",
            textAlign: "center",
            color: "rgb(84, 82, 82)",
          }}
        >
          <h2>India’s Most Respected And Trusted Faculty For Anthropology</h2>
        </Box>
        <Grid
          container
          display="flex"
          rowSpacing={6}
          columnSpacing={{ xs: 2, sm: 3, md: 3 }}
          // sx={{ px: "5rem" }}
        >
          {linkImages.map((arr) => (
            <Grid key={arr.id} item xs={12} sm={6} md={6} width="100%">
              <Box>
                <CardMedia
                  sx={{ objectFit: "contain" }}
                  component="iframe"
                  height="360"
                  // width="640"
                  width="100%"
                  src={arr.linkPath}
                  title={arr.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowFullScreen"
                ></CardMedia>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid>
          <Grid sx={{ my: "4rem" }} align="center" width="100%">
            <Box>
              <CardMedia
                component="img"
                height="300"
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/books-every-aspiring-ceo-should-read.jpg?width=595&amp;height=400&amp;name=books-every-aspiring-ceo-should-read.jpg"
                sx={{
                  height: "100%",
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
          <Box align="center">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ED7633",
                "&:hover": { bgcolor: "#ED7633" },
                py: "0.5rem",
                px: "2.5rem",
                borderRadius: 2,
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Grid>

        <Grid
          align="center"
          sx={{ fontSize: "2rem", fontWeight: 500, my: "2rem" }}
        >
          <h1>Explore Your Courses</h1>
        </Grid>
        <Box display="flex" justifyContent="center" sx={{ my: "3rem" }}>
          <Box>
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
      <Grid
        sx={{ pt: "2rem", mb: "2rem", backgroundColor: "rgba(237,118,51,.06)" }}
      >
        <Box
          sx={{
            fontWeight: "bold",
            // fontSize: "1rem",
            py: "2rem",
            textAlign: "center",
            color: "rgb(84, 82, 82)",
            px: "4rem",
          }}
          // variant="h1"
        >
          <h1>Two decades of consistent success – Student Testimonials</h1>
        </Box>
        <Box>
          <Testimonial />
        </Box>
      </Grid>
      <Grid container sx={{ pb: "2rem" }} display="flex" justifyContent="center">
        <Grid sx={{ fontWeight: "bold", py: "2rem", textAlign: "center" ,px:'2rem'}}>
          <h1>Our Media Presence</h1>
        </Grid>
        <Grid sx={{ border: 2 }}>
          <CardMedia
            component="img"
            src={require("../assets/testimonial-static.png")}
            sx={{ height: "150px", width: "150px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export { TestSeries };
