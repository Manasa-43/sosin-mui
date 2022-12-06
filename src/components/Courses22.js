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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "1",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch"
  },
  {
    label: "2",
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "3",
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "4",
    name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
  
  
];
export default function Courses22() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length / 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const getCarouselContent = () => {
    let content = [];

    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      content.push(
        <Grid key={images[index].label} container display="flex">
          {activeStep === index ? (
            <Grid display="flex" flexDirection="row">
              <Grid
                item
                xs={12}
                component="img"
                sx={{
                  height: 255,
                  display: "flex",
                  Width: 400,
                  overflow: "hidden",
                  width: "100%",
                  mr: "2rem",
                  borderRadius: 3,
                }}
                src={images[index].imgPath}
                alt={images[index].label}
              ></Grid>
              <Grid
                item
                xs={12}
                component="img"
                sx={{
                  height: 255,
                  display: "flex",
                  Width: 400,
                  overflow: "hidden",
                  width: "100%",
                  ml: "2rem",
                  borderRadius: 3,
                }}
                src={images[index + 1].imgPath}
                alt={images[index + 1].label}
              ></Grid>
            </Grid>
          ) : null}
        </Grid>
      );
    }

    console.log("Lenghth", content.length);
    return content;
  };

  const CarouselContent = () => {
    return images.slice(0, maxSteps).map((item, index) => {
      return (
        <Grid key={images[index].label} container display="flex">
          {activeStep === index ? (
            <Grid container display="flex" flexDirection="row" columnSpacing={3} rowGap={3} >
              <Grid item xs={12} sm={6}>
                <Card  >
                <CardMedia
                
                xs={12}
                component="img"
                sx={{
                  height: 255,
                  display: "flex",
                  Width: 600,
                  overflow: "hidden",
                  width: "100%",
                  // mr: "2rem",
                  // borderRadius: 3,
                }}
                src={images[index].imgPath}
                alt={images[index].label}
              ></CardMedia>
              <CardContent>
                <Typography>
                 {item.name}
                </Typography>
              </CardContent>
                </Card>
              
              </Grid>
              <Grid item  >
                <Card  xs={12} sm={6} >
                <CardMedia
                
                xs={12}
                component="img"
                sx={{
                  height: 255,
                  display: "flex",
                  Width: 600,
                  overflow: "hidden",
                  width: "100%",
                  // ml: "2rem",
                  // borderRadius: 3,
                }}
                src={images[(index + maxSteps) % images.length].imgPath}
                alt={images[(index + maxSteps) % images.length].label}
              ></CardMedia>
              <CardContent>
                <Typography>
                 {item.name}
                </Typography>
              </CardContent>
                </Card>
              
              </Grid>
              
              
            </Grid>
          ) : null}
        </Grid>
      );
    });
  };

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
        <Box sx={{ fontSize: "2rem", fontWeight: 500, my: "2rem" }}>
          Related Courses
        </Box>
        <Box>
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
            Anthropology
          </Button>
        </Box>
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ my: "3rem" }}>
        <Box
          sx={{
            maxWidth: 1000,
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          {/* <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          > */}
          <CarouselContent />
          {/* </AutoPlaySwipeableViews> */}
          {/* <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[0].label}</Typography>
          </Paper> */}

          {/* {images.map((step, index) => (
              <Grid key={step.label} container display="flex">
                {activeStep === index ? (
                  <Grid display="flex" flexDirection="row">
                    <Grid
                      item
                      xs={12}
                      component="img"
                      sx={{
                        height: 255,
                        display: "flex",
                        Width: 400,
                        overflow: "hidden",
                        width: "100%",
                        mr: "2rem",
                        borderRadius:3
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    ></Grid>
                    <Grid
                      item
                      xs={12}
                      component="img"
                      sx={{
                        height: 255,
                        display: "flex",
                        Width: 400,
                        overflow: "hidden",
                        width: "100%",
                        ml: "2rem",
                        borderRadius:3
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    ></Grid>
                  </Grid>
                ) : null}
              </Grid>
            ))}  */}

          {/* <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          
          {images.map((step, index) => (
            <Grid key={step.label} container display='flex'>
              {activeStep === index ? (
                <Grid  display="flex"  flexDirection='row' >
                  <Grid
                    item
                    xs={12}
                    component="img"
                    sx={{
                      height: 255,
                      display: "flex",
                      Width: 400,
                      overflow: "hidden",   
                      width: "100%",
                      mr:'2rem',
                      borderRadius:5
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  ></Grid>
                  <Grid
                    item
                    xs={12}
                    component="img"
                    sx={{
                      height: 255,
                      display: "flex",
                      Width: 400,
                      overflow: "hidden",
                      width: "100%",
                      ml:'2rem',
                      borderRadius:5
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  ></Grid>
                </Grid>
              ) : null}
            </Grid>
          ))}
          
          
        </AutoPlaySwipeableViews>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:'space-between',
            height: 50,
            pl: 2,
            bgcolor: "background.default",
           
           
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper> */}
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
