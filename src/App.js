<<<<<<< HEAD
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
=======
// import logo from './logo.svg';
>>>>>>> 71636f96ecce4371ace3b7086deaf15181da7c27

import './App.css';
import Registeration from './components/Registeration';
import TermsandConditions from './components/TermsandConditions';
import Sidebar from './components/Sidebar';
import MyDashboard from './pages/MyDashboard';
import MyBatch from './pages/MyBatch';
import MyAssignment from './pages/MyAssignment';
import MyTestSeries from './pages/MyTestSeries';
import MyDoubts from './pages/MyDoubts';
import MySavedAddresses from './pages/MySavedAddresses';
import MyProfile from './pages/MyProfile';
import MyOrders from './pages/MyOrders';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
function App() {
  return (
<<<<<<< HEAD
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
=======
    // <div>
    //   <Registeration/>
    //   <TermsandConditions/>
    // </div>
    // <Sidebar />

    <BrowserRouter>
     <Sidebar/>
    <Routes>
   
    <Route path ="/"element={<MyDashboard/>}/>
    <Route path ="/MyDashboard"element={<MyDashboard/>}/>
    <Route path ="/MyBatch"element={<MyBatch/>}/>
    <Route path ="/MyAssignment"element={<MyAssignment/>}/>
    <Route path ="/MyDoubts"element={<MyDoubts/>}/>
    <Route path ="/MyTestSeries"element={<MyTestSeries/>}/>
    <Route path ="MySavedAddresses"element={<MySavedAddresses/>}/>
    <Route path ="MyProfile"element={<MyProfile/>}/>
    <Route path ="MyOrders"element={<MyOrders/>}/> 
   
    
    </Routes>
  
    </BrowserRouter>
  // <div>
  //   <MyDashboard/>
  //   <MyOrders/>
  //   </div>
  )
};
>>>>>>> 71636f96ecce4371ace3b7086deaf15181da7c27

export default App;
