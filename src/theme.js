import { createTheme } from "@mui/material";
import { spacing } from "@mui/system";

export  const theme = createTheme({
    palette: {
        bgColor:{
            main: "#ED7633", 
        }
    },
    spacing : 8,
    typography:{
        button:{
            textTransform:'none',
            color:'black'
        }
    },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'black',
          },
        },
      }
})


// {/* <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-nszyn1-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">About Us<span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button> */ */}
  