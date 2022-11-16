import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/Sosin Logo.jpeg";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const pages = [
  "About Us",
  "Courses",
  "Test Series",
  "Current Affairs",
  "Shop",
  "My Dashboard",
  "Logout",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: "white", mx: "0rem" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ border: 4 }}>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Open Sans",
                fontWeight: 700,
                //   letterSpacing: '.3rem',
                color: "#ED7633",
                textDecoration: "none",
                fontSize: "14px",
                mb: "0px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "50%",
                  mx: "0.5rem",
                }}
                alt="Logo"
                src={logo}
              ></Box>
              Sosin <br />
              Classes
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                //   color= 'theme.palette.bgColor.main'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    // sx={{
                    //     "&.MuiButton-text": { color: "black" },
                    //       border: "2px black solid"
                    //     }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Open Sans",
                fontWeight: 700,
                //   letterSpacing: '.3rem',
                color: "#ED7633",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  borderRadius: "50%",
                  mx: "0.5rem",
                }}
                alt="Logo"
                src={logo}
              ></Box>
              Sosin <br />
              Classes
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                mr: "5rem",
              }}
              direction="row"
              justifyContent="flex-end"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    color: "rgba(59, 59, 59, 0.98)",
                    px: "1.5rem",
                    fontSize: "14px",
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "rgba(237, 119, 51, 0.15)" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Grid container direction='column' justifyContent='center' alignContent='center'> 
    <Stack textAlign='center' spacing={2}>
  <Box>Box 1</Box>
  <Box>Box 2</Box>
  <Box>Box 3</Box>
</Stack>
    </Grid> */}
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
              Us Sosin Classes (Formerly Known as Target IAS) is a dream project
              of our Founder Director Mrs. Sosin Thayyaba Revella. With a varied
              experience as a field Anthropologist and as a renowned Faculty in
              Anthropology, Mrs. Sosin has been guiding the civil services
              aspirants to achieve their dreams. Sosin Classes began its journey
              as an Offline Coaching Institute, now functioning as Online
              Training Institute, providing Online Coaching for UPSC Civil
              Services Examinination, UGC NET, and State Public Service
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
              <Grid container direction='column' sx={{  width:'100%' }}>
                
                <List
                  sx={{
                   
                    display: { xs: 'block', sm:'flex', md: "flex" },
                    flexDirection: "row",
                    justifyContent:'center',
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
          <Grid container md={6}sx={{mt:'1rem'}} >
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
          <Grid container md={6} sx={{mt:'1rem'}}>
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
                justifyContent:'center',
                alignContent:'center',
                color: "rgba(59, 59, 59, 0.98)",
                fontSize: "14px",
              }}
            >
              <ListItem xs={12}>
                <Link href="#" underline="none" sx={{
                      backgroundColor: "#fcebe1",
                      color: "rgba(59, 59, 59, 0.68)",
                      borderRadius: '50%',
                    py:'0.75rem',
                    px:'1rem',
                    "&:hover": { backgroundColor: '#ED7633',
                      color:'#fff'  }
                    }}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    
                  />
                </Link>
              </ListItem>
              <ListItem xs={12}>
                <Link href="#" underline="none" sx={{
                      backgroundColor: "#fcebe1",
                      color: "rgba(59, 59, 59, 0.68)",
                      borderRadius: '50%',
                    py:'0.75rem',
                    px:'1rem',
                    "&:hover": { backgroundColor: '#ED7633',
                      color:'#fff'  }
                    }}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    
                  />
                </Link>
              </ListItem>
              <ListItem xs={12}>
                <Link href="#" underline="none" sx={{
                      backgroundColor: "#fcebe1",
                      color: "rgba(59, 59, 59, 0.68)",
                      borderRadius: '50%',
                    py:'0.75rem',
                    px:'1rem',
                    "&:hover": { backgroundColor: '#ED7633',
                      color:'#fff'  }
                    }}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    
                  />
                </Link>
              </ListItem>
              <ListItem xs={12}>
                <Link href="#" underline="none" sx={{
                      backgroundColor: "#fcebe1",
                      color: "rgba(59, 59, 59, 0.68)",
                      borderRadius: '50%',
                    py:'0.75rem',
                    px:'1rem',
                    "&:hover": { backgroundColor: '#ED7633',
                      color:'#fff'  }
                    }}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    
                  />
                </Link>
              </ListItem>
            </List>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
