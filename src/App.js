import React from "react"
import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Courses from "./components/Courses";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
//   Outlet,
//   useParams,
//   NavLink,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

function App() {
  return (
    <Router>         
      <Navbar />       
    
       {/* <nav>
        <Link to="./AboutUs">about</Link>
       </nav> */}

     <Routes>
       <Route path="/Courses" element={<Courses />}></Route>
      <Route path ="/About" element={<About />}></Route>
       {/* <Route path ='/' element ={<App />}></Route> */}
     </Routes>
     <Footer />
   </Router>
      // <div>
      //   {/* <Login /> */}
      //   {/* <ForgotPassword /> */}
      //   <AboutUs />
        
      // </div>
    
  );
}

export default App;
