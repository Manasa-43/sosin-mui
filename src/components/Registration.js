import React from "react";
import { TextField, Typography, Button, Box, Grid, Checkbox, FormControl, InputLabel, DialogContent, DialogContentText, } from "@mui/material";
import {  InputAdornment, IconButton, FormControlLabel, OutlinedInput, Dialog,DialogActions } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import{ Dialogs,DialogTitle} from "@mui/material";
// import logo from '../assests/logo.png';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';


function Registeration() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    Confirm:'', 
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);

  };
  // DialogTitle = (props)=>  { 
  // const { children, onClose, ...other } = props;
  // }
  //     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
  //       {children}
  //       {onClose ? (
  //         <IconButton
  //           aria-label="close"
  //           onClick={onClose}
  //           sx={{
  //             position: 'absolute',
  //             right: 8,
  //             top: 8,
  //             color: (theme) => theme.palette.grey[500],
  //           }}
  //         >
  //           <CloseIcon />
  //         </IconButton>
  //       ) : null}
  //     </DialogTitle>
    
  // }
  

  
  return (

    < Grid container >

      <Grid md={8} sx={{ bgcolor: '#ED7633', color: '#ffffff' }} >  
        <Box >
          <Typography variant="h4" pt={50} pl={2}>Signup with Sosin Classes</Typography>
          <Typography variant="h5" pl={2}>Home</Typography>
        </Box>
      </Grid>

      <Grid md={4} >
          <Box >
          {/* <img  src={logo}/> */}
          {/* <img src= {require("../assests/logo.png")}  sx={{ width: '5%' }} alt=""/> */}
            <Typography pt={2} sx={{ color: '#ED7633' }} textAlign="center">Sosin</Typography>
             <Typography  sx={{ color: '#ED7633' }} textAlign="center"> Classes</Typography>
            </Box>
        
        <form>
         <Typography variant="h5" pt={2} textAlign="center">Create Your Account</Typography>
           <Box display="flex" alignItems="center" justifyContent="center" flexDirection={"column"}  >
            <TextField margin="normal" size="small" type={"email"} id="outlined-textarea" label="Email" placeholder="test@gmail.com" sx={{ width: '80%' }} />
            <TextField margin="normal" size="small" id="outlined-textarea" label="Name" type={"text"} placeholder="eg:john"sx={{ width: '80%' }} />
            <TextField margin="normal" size="small" type={""} id="outlined-textarea" label=" Mobile No" placeholder="eg:123"sx={{ width: '80%' }} />
           
            <FormControl margin="normal" size="small" varient="outlined" sx={{ width: '80%' }}>
              <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
              <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'}
                value={values.password} onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password" />
            </FormControl>

            <FormControl margin="normal" size="small" varient="outlined" sx={{ width: '80%' }} >
              <InputLabel htmlFor="outlined-adornment-password"> Confirm Password</InputLabel>
              <OutlinedInput id="outlined-adornment-confirmpassword" type={values.showPassword ? 'text' : 'password'}
                value={values.Confirm} onChange={handleChange('Conform')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {values.showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password" />
            </FormControl>
            <Box sx={{ flexDirection: 'row' }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Agree to all" />
              <Link sx={{ color: '#ED7633' }} href="#">terms and conditions</Link>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" pb={2} >
            <Button sx={{ borderRadius:10, bgcolor: '#ED7633' }} variant="contained" onClick={handleClickOpen}>Register Now</Button>
          </Box>
          <Box sx={{ flexDirection: 'row' }} textAlign="center" pb={2}>
            Already a member?
            <Link sx={{ color: '#ED7633' }} href="#">Login</Link>
          </Box>
          <Typography textAlign="center">© Erasmus Training Services Pvt. Ltd.2022</Typography>

          </form> 

      </Grid>
       
      <Dialog onClose={handleClose}  aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent  sx={{ border: 5 , color: '#ED7633'}} >
          <DialogContentText>
        <Typography pt={2} textAlign="center" variant="h6" pl={2}>Verify Your Account</Typography>
        <Typography pt={2}>Enter the OTP sent to your registered phone number</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}    >
        <TextField  margin="normal" size="small" type={"email"} id="outlined-textarea" label="Enter Otp sent to Mobile" placeholder="Phone otp" sx={{ width: '80%' }} />
       <TextField margin="normal" size="small" id="outlined-textarea" label="Enter Otp sent to Email" type={"text"} placeholder="Email otp"sx={{ width: '80%' }} />   
       </Box>
    
    </DialogContentText>
    <DialogActions  pr={4}>
     <Button sx={{ bgcolor: '#ED7633' }}  alignItems="center" variant="contained">Verify</Button>
     </DialogActions>
        </DialogContent>
        </Dialog>
    
   
    

  </Grid>

  );
}

export default Registeration;