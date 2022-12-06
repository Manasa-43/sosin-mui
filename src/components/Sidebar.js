import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {BrowserRouter as  Routes,  Route } from "react-router-dom";
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from '@mui/material';
import { Breadcrumbs } from '@mui/material';
// import MyDashboard from "../pages/MyDashboard";
// import MyBatch from "../pages/MyBatch";
// import MyAssignment from "../pages/MyAssignment";
// import MyTestSeries from "../pages/MyTestSeries";
// import MyDoubts from "../pages/MyDoubts";
// import MySavedAddresses from "../pages/MySavedAddresses";
// import MyProfile from "../pages/MyProfile";
// import MyOrders from "../pages/MyOrders";



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width','margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuItem = [
    {
      path: "/MyDashboard",
      name: "MyDashboard",
      icon: <GridViewSharpIcon />
    },
    {
      path: "/Mybatch",
      name: "MyBatch",
      icon: <FolderIcon />
    },
    {
      path: "/Myassignment",
      name: "MyAssignment",
      icon: <FolderIcon />
    },
    {
      path: "/Mydoudts",
      name: "MyDoudts",
      icon: <FolderIcon />
    },
    {
      path: "/Mytestseries",
      name: "MyTestSeries",
      icon: <FolderIcon />
    },
    {
      path: "/Mysavedaddresses",
      name: "MySavedAddresses",
      icon: <FolderIcon />
    },
    {
      path: "/Myprofile",
      name: "MyProfile",
      icon: <FolderIcon />
    },
    {
      path: "/Myorders",
      name: "MyOrders",
      icon: <FolderIcon />
    }
  ]
  return (
    <Box pt={5} pb={5} >
      
    <Grid >
    <Box sx={{ display: 'flex'}}  >
    <div >
      <AppBar open={open}  sx={{bgcolor:'rgba(237, 119, 51, 0.15)'}}>
        <Toolbar className="pt-5">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen} 
            edge="start"
            sx={{
              color:'black',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="#000000" href="/">Home</Link>
            
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader   >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List sx={{bgcolor:'rgba(237, 119, 51, 0.15)'  }}  >
          {menuItem.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }} >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    // color:'black'
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {text.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={<Link href={text.path}>{text.name}</Link>}
                  sx={{ opacity: open ? 1 : 0,  }} ></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        <DrawerHeader />
        </div>
      </Box>
    {/* </Box> */}
    
    </Grid>
    <div>
  
 {/* <Routes>
 {/* <Route path ="/"element={<MyDashboard/>}/>
<Route path ="/MyDashboard"element={<MyDashboard/>}/> */}
{/* <Route path ="/MyBatch"element={<MyBatch/>}/>
 <Route path ="/MyAssignment"element={<MyAssignment/>}/>
 <Route path ="/MyDoubts"element={<MyDoubts/>}/>
 <Route path ="/MyTestSeries"element={<MyTestSeries/>}/>
 <Route path ="MySavedAddresses"element={<MySavedAddresses/>}/>
 <Route path ="MyProfile"element={<MyProfile/>}/>
 <Route path ="MyOrders"element={<MyOrders/>}/> */}

 {/* </Routes> */} 
</div>

    </Box>
  );

  // return (
  //   <div>
  //     {['left', 'right', 'top', 'bottom'].map((anchor) => (
  //       <React.Fragment key={anchor}>
  //         <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
  //         <Drawer
  //           anchor={anchor}
  //           open={state[anchor]}
  //           onClose={toggleDrawer(anchor, false)}
  //         >
  //           {list(anchor)}
  //         </Drawer>
  //       </React.Fragment>
  //     ))}
  //   </div>
  // );
}