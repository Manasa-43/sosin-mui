import React from "react"
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
// import { Link } from "@mui/material";


import Grid from "@mui/material/Grid";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
const pages = [
    { name: "About Us", url: "/About" },
    { name: "Courses", url: "/Courses" },
    { name: "Test Series", url: "/TestSeries" },
    { name: "Current Affairs", url: "#" },
    { name: "Shop", url: "/Shop" },
    { name: "My Dashboard", url: "/MyDashboard" },
    { name: "Logout", url: "/Logout" },
  ];
  // const pagesUrl =["./AboutUs","./Courses","./TestSeries","./CurrentAffairs","./Shop","./MyDashboard","Logout"]
  // const settings = [" Daily News Diary", "Monthly News Diary", "Anthro News Diary"];
  const settings = [
    { name: "Daily News Diary", url: "/" },
    { name: "Monthly News Diary", url: "/" },
    { name: "Anthro News Diary", url: "/" },
  ];
export default function Navbar(){
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

    return(
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
                {pages.map((page, index) =>
                  page.name === "Current Affairs" ? (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      
                   <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      sx={{
                        fontSize: "14px",
                        // fontWeight: "bold",
                      }}
                    >
                      <Typography >
                        {page.name}
                      </Typography>
                      <KeyboardArrowDownIcon
                        sx={{ pt: "0rem" }}
                        onClick={handleOpenUserMenu}
                      />
                    </Grid>
                    </MenuItem>
                  ) : (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  )
                )}
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
              {/* {pages.map((page, index) =>
                 (
                  <Button
                    key={index}
                    href={page.url}
                    // href="./Courses"
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "rgba(59, 59, 59, 0.98)",
                      px: "1.5rem",
                      fontSize: "14px",
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "rgba(237, 119, 51, 0.15)",
                        color: "black",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                )
              )} */}
              {pages.map((page, index) =>
                page.name === "Current Affairs" ? (
                  <Button
                    key={index}
                    to={page.url}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "rgba(59, 59, 59, 0.98)",
                      px: "1.5rem",
                      fontSize: "14px",
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "rgba(237, 119, 51, 0.15)",
                        color: "black",
                      },
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                        {page.name}
                      </Typography>
                      <KeyboardArrowDownIcon
                        sx={{ pt: "0rem" }}
                        onClick={handleOpenUserMenu}
                      />
                    </Grid>
                  </Button>
                ) : (
                  <Button  sx={{       
                    my: 2,
                    display: "block",
                    color: "rgba(59, 59, 59, 0.98)",
                    px: "1.5rem",
                    fontSize: "14px",
                    fontWeight: "bold",
                    "&:hover": {
                      bgcolor: "rgba(237, 119, 51, 0.15)",
                      color: "black",
                    },
                    textDecoration: 'none'
                  }}>
                  <Link className='link'
                    key={index}
                    to={page.url}
                    // href="./Courses"
                    onClick={handleCloseNavMenu}                  
                    // sx={{       
                    //   my: 2,
                    //   display: "block",
                    //   color: "rgba(59, 59, 59, 0.98)",
                    //   px: "1.5rem",
                    //   fontSize: "14px",
                    //   fontWeight: "bold",
                    //   "&:hover": {
                    //     bgcolor: "rgba(237, 119, 51, 0.15)",
                    //     color: "black",
                    //   },
                    //   textDecoration: 'none'
                    // }}
                   
                  >
                    {page.name}
                  </Link>
                  </Button>
                )
              )}
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
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Button
                      key={index}
                      href={setting.url}
                      // href="./Courses"
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: "rgba(59, 59, 59, 0.98)",
                        px: "1.5rem",
                        fontSize: "14px",
                        fontWeight: "bold",
                        "&:hover": {
                          bgcolor: "rgba(237, 119, 51, 0.15)",
                          color: "black",
                        },
                      }}
                    >
                      {setting.name}
                    </Button>
                    {/* <Link href={setting.url} textAlign="center">{setting.name}</Link> */}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
}