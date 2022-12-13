import React from "react"
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function About(){
    return(
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        sx={{ my: "2rem", px: "2rem" }}
      >
        <Box textAlign="center">
          <h1>About Us</h1>
        </Box>
        <Paper elevation={3} sx={{ mt: "1rem", mb: "2.5rem" }}>
          <CardContent
            sx={{
              pt: "2rem",
              backgroundColor: "rgb(254, 247, 243)",
              px: "2rem",
            }}
            align="justify"
          >
            <p>
              Sosin Classes (Formerly Known as Target IAS) is a dream project
              of our Founder Director Mrs. Sosin Thayyaba Revella. With a varied
              experience as a field Anthropologist and as a renowned Faculty in
              Anthropology, Mrs. Sosin has been guiding the civil services
              aspirants to achieve their dreams. Sosin Classes began its journey
              as an Offline Coaching Institute, now functioning as Online
              Training Institute, providing Online Coaching for UPSC Civil
              Services Examination, UGC NET, and State Public Service
              Commissions Exams. Sosin Classes established itself as the Best
              Civil Services Coaching Institute in Hyderabad with special
              credentials of Best Training Institute for ANTHROPOLOGY for Civil
              Services, Competitive Exams, and Other Academic Courses. Sosin
              Classes offers comprehensive coaching for Civil Services Mains
              with online audio/video classes, preparation guidance, study
              material, mock tests, interview guidance with access to various
              student resources. With over a 1000 selections in 17 years of its
              functioning, Sosin Classes is offering personalised guidance to
              the civil services aspirants with various optional subjects such
              as Anthropology, Geography and Public Administration. Our online
              courses are designed to serve the interests of aspirants in the
              best possible manner. We welcome you all to look into our online
              coaching programs and get the maximum benefit from the
              scientifically designed and executed courses.
            </p>
          </CardContent>
        </Paper>
        <Box textAlign="center">
          <h1>Vision</h1>
        </Box>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "rgb(254, 247, 243)",
            mt: "1rem",
            mb: "2.5rem",
          }}
        >
          <CardContent sx={{ pt: "2rem" }} align="justify">
            <p>
              To create academicians and scholars in different fields, so that
              they can play a pivotal role in improving the understanding of the
              humanity and work for their well-being through just means.
            </p>
          </CardContent>
        </Paper>
        <Box textAlign="center">
          <h1>Mission</h1>
        </Box>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "rgb(254, 247, 243)",
            mt: "1rem",
            mb: "2.5rem",
          }}
        >
          <CardContent sx={{ pt: "2rem" }} align="justify">
            <p>
              Help aspiring candidates to excel in performance in various
              national and international courses and competitive examinations,
              there by equipping them with necessary knowledge about how to
              enter different national and international organisations, dawning
              important positions.
            </p>
          </CardContent>
        </Paper>
      </Grid>
    )
}