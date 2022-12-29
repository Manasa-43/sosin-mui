import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Cardimg from "../assets/Card img.png";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import img from "../assets/sosin-pamplet.png";
import bookImg from "../assets/bookSample.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import React from "react";
export default function Cart({ cartItem, remove, addtoCart,incQty,decQty,emptyCart }) {
  // const listArr = ['Item Price','Coupon Discount','CGST(9%)','SGST(9%)','Total Amount']
//  const [netItemsPrice , setNetItemsPrice] = React.useState(0)
 
//  const EffectFunc = ()=>{
//   React.useEffect(()=>{setNetItemsPrice(itemsCost)},[])
//  }
const netPriceArr =[]
const[netPriceSum,setNetPriceSum] =React.useState('')
  console.log(cartItem);
  return (
    <Box sx={{ my: "2rem", px: "3rem" }}>
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "700",
          my: "2rem",
          textAlign: "center",
          color: "#545252",
        }}
      >
        <h2>CART DETAILS</h2>
      </Box>
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        // justifyContent="space-around"
      >
        <Grid item md={7} sm={12} xs={12}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: "rgb(248, 248, 248)",
              minHeight: "250px",
              mb: "1rem",
            }}
          >
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              sx={{ px: "1rem", py: "0.75rem" }}
            >
              <Grid item md={4} sm={12} xs={12} sx={{ alignSelf: "center" }}>
                <Box sx={{ fontWeight: "500", fontSize: "1.5rem" }}>
                  My Cart
                </Box>
              </Grid>
              <Grid item md={4} sm={12} xs={12} sx={{ alignSelf: "center" }}>
                <Link to="#" onClick={()=>emptyCart()}>Empty Cart</Link>
              </Grid>
              <Grid item md={4} sm={12} xs={12} sx={{ alignSelf: "center" }}>
                <Link to="/Shop">Continue to Shop </Link>
              </Grid>
            </Grid>
            <Grid>
              {cartItem.map((product, index) => {
                const itemsCost =  product.price * product.qty
                const sgst =  itemsCost * 0.09
                const cgst = itemsCost * 0.09
                const coupon = 0
                const itemTotal = itemsCost - coupon + cgst + sgst
                netPriceArr.push(itemsCost)
                let netPriceSum=0
                for (let i = 0; i < netPriceArr.length; i++) {
                  netPriceSum += netPriceArr[i];
              }
               console.log(netPriceSum)
              // setNetPriceSum(prev=>prev+itemsCost)


                // EffectFunc()
                // console.log(a)
                console.log(netPriceArr)
                return (
                <Grid key={index} sx={{ mx: "3rem" }}>
                  <Grid
                    container
                    display="flex"
                    justifyContent="space-around"
                    justifySelf="center"
                    sx={{ py: "1rem" }}
                  >
                    <Grid sx={{ height: "180px", width: "120px" }}>
                      <CardMedia
                        component="img"
                        src={product.img}
                        // sx={{ height: "150px", width: "100px" }}
                      />
                    </Grid>
                    <Grid>
                      <Box sx={{ fontWeight: "500", maxWidth: "250px" }}>
                        {product.title}
                      </Box>
                    </Grid>
                  </Grid>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Item Price</TableCell>
                          <TableCell>
                            <Grid display='flex' >
                            <CurrencyRupeeIcon/>
                            <Box> {Number(product.price)*Number(product.qty)}</Box>
                            </Grid>                          
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Coupon Discount</TableCell>
                          <TableCell>
                          <Grid display='flex' >
                            <CurrencyRupeeIcon/>
                            <Box>0</Box>
                            </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>CGST (9%)</TableCell>
                          <TableCell>
                          <Grid display='flex' >
                            <CurrencyRupeeIcon/>
                            <Box> {Number(product.price)*0.09*(product.qty)}</Box>
                            </Grid>
                            
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>SGST (9%)</TableCell>
                          <TableCell>
                          <Grid display='flex' >
                            <CurrencyRupeeIcon/>
                            <Box>  {Number(product.price)*0.09*(product.qty)}</Box>
                            </Grid>
                           </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total Amount</TableCell>
                          <TableCell>
                          <Grid display='flex' >
                            <CurrencyRupeeIcon/>
                            <Box>  {itemTotal}</Box>
                            </Grid></TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
         
                  <Grid
                    container
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    // sx={{ border: 1 }}
                  >
                    <Grid item xs={12} sm={12} md={6} sx={{ my: "0.5rem" }}>
                      <Grid>
                        {/* <FontAwesomeIcon icon="fa-regular fa-plus" /> */}
                        <Grid display="flex" justifyContent="center"> 
                          <RemoveCircleOutlineIcon onClick={()=>decQty(product)} sx={{ mx: "0.5rem" }} />
                          <Box sx={{ px: "0.5rem", mx: "0.5rem" }}>
                            {product.qty}
                          </Box>
                          <AddCircleOutlineIcon sx={{ mr: "0.5rem" }} onClick={()=>incQty(product)} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ my: "0.5rem" }}>
                      <Button
                        variant="contained"
                        onClick={() => remove(product)}
                        sx={{
                          bgcolor: "#ED7633",
                          "&:hover": { bgcolor: "#ED7633" },
                          py: "0.5rem",
                          px: "4rem",
                          borderRadius: "3rem",
                          fontWeight: 500,
                          fontSize: "1rem",
                          textDecoration: "none",
                        }}
                      >
                        {" "}
                        REMOVE
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                )
              })}
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: "rgb(248, 248, 248)",
              minHeight: "200px",
              mb: "1rem",
            }}
          >
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              sx={{ px: "1.5rem" }}
            >
              <Grid>Billing Details</Grid>
              <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Item Price</TableCell>
                          <TableCell>
                            <Grid display='flex' >
                            <CurrencyRupeeIcon />
                            <Box> </Box>
                            </Grid>                          
                            </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
