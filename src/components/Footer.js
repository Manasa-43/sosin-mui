import React from "react"

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
        <Grid>
        <Grid
          container
          sx={{
            backgroundColor: "rgb(254, 247, 243)",
            // mb: "1rem",
            px: "2rem",
            py: "2rem",
          }}
          // sx={{ my: "2rem", px: "2rem" }}
        >
          <Grid container md={9}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "rgba(59, 59, 59, 0.98)",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                UPSC Courses
              </Typography>
              <Grid container direction="column" sx={{ width: "100%" }}>
                <List
                  sx={{
                    display: { xs: "block", sm: "flex", md: "flex" },
                    flexDirection: "row",
                    justifyContent: "center",
                    color: "rgba(59, 59, 59, 0.98)",
                    fontSize: "13px",
                    // mr: "8rem",
                  }}
                >
                  <ListItem sx={{ px: "0rem", mx: "0rem" }}>
                    General Studies
                  </ListItem>
                  <ListItem sx={{ px: "0rem", mx: "0rem" }}>
                    Anthropology
                  </ListItem>
                  <ListItem sx={{ px: "0rem", mx: "0rem" }}>
                    Test Series
                  </ListItem>
                  <ListItem sx={{ px: "0rem", mx: "0rem" }}>
                    Mentorship
                  </ListItem>
                </List>
              </Grid>
            </Box>
          </Grid>
          <Grid container md={3}>
            <Box>
              <Typography
                sx={{
                  color: "rgba(59, 59, 59, 0.98)",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Sosin Classes
              </Typography>

              <List
                sx={{
                  color: "rgba(59, 59, 59, 0.98)",
                  fontSize: "13px",
                }}
              >
                <ListItem sx={{ px: "0rem", mx: "0rem" }}>
                  H.No. 1-10-196 (New No. 177) Ashok Nagar X Roads, Ashok Nagar,
                  Hyderabad – 500020, Telangana, India. Email:
                  info@sosinclasses.com Phone: 9989966744, 9000066690
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid container>
            <Divider
              sx={{ backgroundColor: "#ED7633", width: "100%", height: "2px" }}
            />
          </Grid>
          <Grid container md={6} sx={{ mt: "1rem" }}>
            <Typography
              sx={{
                py: "1rem",
                color: "rgba(59, 59, 59, 0.68)",
                fontSize: "14px",
              }}
            >
              © Erasmus Training Services Pvt. Ltd.2022
            </Typography>
          </Grid>
          <Grid container md={6} sx={{ mt: "1rem" }}>
            {/* <Grid container  sx={{border:1}}> */}

            <List
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "rgba(59, 59, 59, 0.98)",
                fontSize: "14px",
              }}
            >
              <ListItem>
                <Link href="#" underline="none">
                  Help
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" underline="none">
                  Privacy
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" underline="none">
                  Terms
                </Link>
              </ListItem>
            </List>

            <List
              sx={{
                // display: { xs: 'flex', sm:'flex', md: "flex" },
                display: "flex",
                // flexWrap:"wrap",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                color: "rgba(59, 59, 59, 0.98)",
                fontSize: "14px",
              }}
            >
              <ListItem xs={12}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    backgroundColor: "#fcebe1",
                    color: "rgba(59, 59, 59, 0.68)",
                    borderRadius: "50%",
                    py: "0.75rem",
                    px: "1rem",
                    "&:hover": { backgroundColor: "#ED7633", color: "#fff" },
                  }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </ListItem>
              <ListItem xs={12}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    backgroundColor: "#fcebe1",
                    color: "rgba(59, 59, 59, 0.68)",
                    borderRadius: "50%",
                    py: "0.75rem",
                    px: "1rem",
                    "&:hover": { backgroundColor: "#ED7633", color: "#fff" },
                  }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </ListItem>
              <ListItem xs={12}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    backgroundColor: "#fcebe1",
                    color: "rgba(59, 59, 59, 0.68)",
                    borderRadius: "50%",
                    py: "0.75rem",
                    px: "1rem",
                    "&:hover": { backgroundColor: "#ED7633", color: "#fff" },
                  }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </ListItem>
              <ListItem xs={12}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    backgroundColor: "#fcebe1",
                    color: "rgba(59, 59, 59, 0.68)",
                    borderRadius: "50%",
                    py: "0.75rem",
                    px: "1rem",
                    "&:hover": { backgroundColor: "#ED7633", color: "#fff" },
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </ListItem>
            </List>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    )
}