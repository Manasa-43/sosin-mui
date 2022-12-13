import React from "react"
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
import { useEffect } from "react";


export default function Carousel({data}){
  console.log("Main props", data)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data['imgArr'].length / 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(()=>{
    setActiveStep(0)
  },[data])

    return(
      <Box sx={{mb:'2rem'}}>
      
        {data.imgArr.slice(0, maxSteps).map((element, index) => {
          
          return (
            <Grid key={data.imgArr[index].label} container display="flex">
              {activeStep === index ? (
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  columnSpacing={3}
                  rowGap={3}
               
                >
                  <Grid item xs={12} sm={6}>
                    <Card >
                      <CardMedia
                        xs={12}
                        component="img"
                        sx={{
                          height: 255,
                          display: "flex",
                          // Width: 500,
                          overflow: "hidden",
                          width: "100%",
                          // mr: "2rem",
                          // borderRadius: 3,
                          objectFit: "contain"
                          
                        }}
                        src={data.imgArr[index].img}
                        alt={data.imgArr[index].label}
                      ></CardMedia>
                      <CardContent>
                        <Typography sx={{fontSize:'0.75rem',fontWeight:'bold'}}>{data.imgArr[index].title}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card >
                      <CardMedia
                        xs={12}
                        component="img"
                        sx={{
                          height: 255,
                          display: "flex",
                          // Width: 500,
                          overflow: "hidden",
                          width: "100%",
                          // ml: "2rem",
                          // borderRadius: 3,
                          objectFit: 'contain'
                        }}
                        src={data.imgArr[(index + maxSteps) % data.imgArr.length].img}
                        alt={data.imgArr[(index + maxSteps) % data.imgArr.length].label}
                      ></CardMedia>
                      <CardContent>
                        <Typography sx={{fontSize:'0.75rem',fontWeight:'bold'}}>{data.imgArr[(index+maxSteps)%data.imgArr.length].title}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
          );
        })}
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
    )
}