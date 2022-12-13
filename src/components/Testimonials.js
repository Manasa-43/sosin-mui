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
import Testimonials1 from "../assets/Testimonial-1.png"
import Testimonials2 from "../assets/Testimonial-2.png"

const TestArr = [
  {
    name: "Testimonials",
    imgArr: [
      {
        img: Testimonials1,
        label: 1,
        title: "First"
      },
      {
        img: Testimonials2,
        label: 2,
        title: "Second"
      },
    ],
  },
];

export default function Testimonial() {
    const [currentCourse, setCurrentCourse] = React.useState(TestArr[0]);
  return (
    <Grid sx={{mx:'3rem'}}>
      <Carousel data={currentCourse}/>
    </Grid>
  );
}
