import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { theme } from "../theme";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { display } from "@mui/system";
import logo from "../assets/Sosin Logo.jpeg";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Login(props) {
  const { children, onClose, ...other } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
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
    <Grid container className="login-box my-font">
      <Grid
        container
        md={8}
        sx={{ bgcolor: theme.palette.bgColor.main, color: "white", border: 1 }}
        direction="column"
        justifyContent="flex-end"
      >
        {/* <Box sx={{ mx: theme.spacing(5)}} mb={6} ml={6} */}
        <Box sx={{ mb: "4rem", ml: "3rem" }}>
          <h2 className="fw-bold">Signin with Sosin Classes</h2>
          <a href="./" className="link-light text-decoration-none link-hover">
            <h4 className="fw-light">
              <b>Home</b>
            </h4>
          </a>
        </Box>
      </Grid>

      <Grid
        container
        md={4}
        textAlign="center"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* <Box sx={{ pt: "5rem" }}> */}
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              color: theme.palette.bgColor.main,
              fontFamily: "Open Sans",
            }}
          >
            <Box
              component="img"
              sx={{ height: "2.5rem", width: "2.5rem", borderRadius: "50%" }}
              alt="Logo"
              src={logo}
            ></Box>
            <Box>
              <h6 className="fw-bolder">
                Sosin
                <br />
                Classes
              </h6>
            </Box>
          </Box>

          <Box>
            <h4 className="fw-semibold">
              <Box sx={{ pt: "0.75rem" }}>Login into your account</Box>
            </h4>
          </Box>

          <Box sx={{ mt: "1rem" }}>
            <div>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                size="small"
                sx={{ mt: "1rem", width: "80%" }}
                placeholder="eg: John"
              />

              <FormControl
                sx={{ mt: "1rem", width: "80%" }}
                variant="outlined"
                size="small"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  placeholder="**********"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", py: "1rem" }}>
          <Link
            href="#"
            underline="hover"
            color="inherit"
            sx={{ fontSize: "13px", color: "#ABAFB3" }}
            onClick={handleClickOpen}
            // textAlign="right"
          >
            {/* <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle> */}
            Forgot Password
          </Link>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.bgColor.main,
            "&:hover": { bgcolor: "#ED7633" },
            py: "0.5rem",
            px: "3.5rem",
          }}
        >
          Login
        </Button>
        <Box sx={{ fontWeight: 600, pt: "1rem" }}>
          <Box sx={{ fontSize: "13px", color: "#ABAFB3" }}>
            Don't have an account?
            <Box component="span" sx={{ color: "#ED7633", px: "0.5rem" }}>
              <Link href="#" underline="none" color="inherit">
                Register Now
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ fontSize: "13px", color: "#898989", py: "1.5rem" }}>
          © Erasmus Training Services Pvt. Ltd.2022
        </Box>
      </Grid>

      <div>
        {/* <Button variant="contained" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          {/* <Box sx={{borderColor:"primary.main" , border: 5}}> */}
          <Paper elevation={24}>
            <Box
              sx={{
                border: 5,
                borderColor: "#ED7633",
              
                
              p: '1.5rem'
              }}
            >
              <DialogContent textAlign="center">
                <Box>
                  <Typography
                    variant="h6"
                    textAlign="center"
                    sx={{ fontWeight: 600 }}
                  >
                    Recover Password
                  </Typography>
                  <Typography variant="subtitle1" py={1}>
                    Enter your Email and instructions will be sent to you!
                  </Typography>
                  <Grid
                    textAlign="center"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                size="small"
                sx={{ mt: "1rem", width: "80%" }}
                placeholder="eg: John"
              />
                    {/* <FormControl
                      sx={{ mt: "1rem", width: "80%", "& .MuiInputLabel-root": {color: 'green'},//styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "orange" },
                      },  "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: "orange"
                        }
                      }}}
                      sx={{ mt: "1rem", width: "80%"}}
                      variant="outlined"
                      size="small"
                      
                    
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        placeholder="**********"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl> */}
                  </Grid>
                </Box>
              </DialogContent>

              <DialogActions sx={{border:2}} 
                  direction="row"
                  justifyContent='center'
                  alignItems="center"
                  >
                    
                <Grid
                  align="center" 
                  direction="row"
                  sx={{border:2}}
                >
                  <Button
                    variant="contained"
                    autoFocus
                    onClick={handleClose}
                    sx={{
                      bgcolor: theme.palette.bgColor.main,
                      "&:hover": { bgcolor: "#ED7633" },
                      py: "0.5rem",
                      px: "3.5rem",
                    }}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="contained"
                    autoFocus
                    onClick={handleClose}
                    sx={{
                      bgcolor: theme.palette.bgColor.main,
                      "&:hover": { bgcolor: "#ED7633" },
                      py: "0.5rem",
                      px: "3.5rem",
                    }}
                  >
                    Reset
                  </Button>
                </Grid>
               
              </DialogActions>
            </Box>
          </Paper>
        </BootstrapDialog>
      </div>
    </Grid>
  );
}
