import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Courses from "./components/Courses";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider theme={theme}>
  //  <Router>
  //    <Routes>
  //      <Route path="/Courses" element={<Courses />}></Route>
  //      <Route path ='/' element ={<App />}></Route>
     
  //    </Routes>
  //  </Router>
  //  </ThemeProvider>, 

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

 

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
