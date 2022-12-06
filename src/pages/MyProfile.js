import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import Item from "@mui/material";
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const MyProfile = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
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

  
  
  return (
    <Grid container  >

      <Box pt={5} pb={5}  alignItems="center" justifyContent="center">
        <Typography variant="h5" >Profile Info</Typography>
        <Typography >Edit your details</Typography>
        <Button sx={{ bgcolor: '#ED7633' }} alignItems="center" variant="contained">Upload picture</Button>
        <Typography variant="h5" >Password Update</Typography>
        <Typography pb={3} >Fill to update new password</Typography>
        <form>
          <Box  border={1}>
           
            <Grid md={12} >
              <FormControl margin="normal" size="small" varient="outlined" >
                <InputLabel htmlFor="outlined-adornment-password" >Current Password</InputLabel>
                <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'}
                  value={values.password} onChange={handleChange('password')} placeholder="**********"
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
            </Grid>


            <Box   >
              <Grid md={11} display='flex' direction={'row'}  >
                <FormControl margin="normal" size="small" varient="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password" >New Password</InputLabel>
                  <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'}
                    value={values.password} onChange={handleChange('password')} placeholder="**********"
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
                <Box pl={5}>
                <FormControl margin="normal" size="small" varient="outlined"  >
                  <InputLabel htmlFor="outlined-adornment-password" >Re-enter Password</InputLabel>
                  <OutlinedInput id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'}
                    value={values.password} onChange={handleChange('password')} placeholder="**********"
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
                </Box>
              </Grid>
            </Box>
          </Box>
          <Button sx={{ bgcolor: '#ED7633' }}  alignItems="center" variant="contained">Update User</Button>
        </form>
      </Box>
    </Grid>
  );
};
export default MyProfile;