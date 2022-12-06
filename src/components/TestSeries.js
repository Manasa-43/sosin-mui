import React from "react"
import { Box } from "@mui/material"
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Cardimg from "../assets/Card img.png";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Carouselimg1 from "../assets/Card img.png" 
import Carouselimg2 from "../assets/test-image-1.png"
import Carouselimg3 from "../assets/test-image-2.png"

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
      imgPath:Carouselimg2,
        name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch"
    },
    {
      label: "2",
      name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
      imgPath:Carouselimg3
        },
    {
      label: "3",
      name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
      imgPath:Carouselimg2
    },
    {
      label: "4",
      name: " UPSC Anthropology Coaching: Dec 2022 Foundation Batch",
      imgPath:Carouselimg3
    },
    
    
  ];
export default function TestSeries(){
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length ;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    return(
        <Box >
            <Grid container px='4rem' py={4}  >
            <Grid item md={3} component='img' src={Carouselimg1}>

            </Grid>
            <Grid item md={9} >
            <Box sx={{  flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {activeStep===index ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                //   maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
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
          >
            {/* Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )} */}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {/* {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back */}
          </Button>
        }
      />
    </Box>
        
            </Grid>
            </Grid>
        </Box>
        
    )
}