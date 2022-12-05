import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import Shop from "./components/Shop"
import Courses22 from "./components/Courses22";
import Courses21 from "./components/Courses21";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration";
import TermsandConditions from "./components/TermsandConditions";
import Sidebar from "./components/Sidebar";
import MyDashboard from "./pages/MyDashboard";
import MyBatch from "./pages/MyBatch";
import MyAssignment from "./pages/MyAssignment";
import MyTestSeries from "./pages/MyTestSeries";
import MyDoubts from "./pages/MyDoubts";
import MySavedAddresses from "./pages/MySavedAddresses";
import MyProfile from "./pages/MyProfile";
import MyOrders from "./pages/MyOrders";
import { Box } from "@mui/system";
import TestSeries from "./components/TestSeries";
import Login from "./components/Login"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Login /> */}
      <Navbar />    
      <Routes>
      <Route path = "/App" element={<App />}></Route>
      <Route path="/TestSeries" element={<TestSeries />}></Route>
      <Route path="/Courses" element={<Courses />}></Route>
      <Route path="/Courses/Courses22" element={<Courses22 />}></Route>
      <Route path="/Courses/Courses21" element={<Courses21 />}></Route>
      <Route path="/Courses/Courses20" element={<Courses22 />}></Route>
      <Route path="/Courses/Courses19" element={<Courses22 />}></Route>
      <Route path="/Courses/Courses18" element={<Courses22 />}></Route>
      <Route path="/Courses/Courses17" element={<Courses22 />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Shop" element={<Shop />} />
      <Route path="/" element={<MyDashboard />} />
      <Route path="/MyDashboard" element={<MyDashboard />} />
      <Route path="/MyBatch" element={<MyBatch />} />
      <Route path="/MyAssignment" element={<MyAssignment />} />
      <Route path="/MyDoubts" element={<MyDoubts />} />
      <Route path="/MyTestSeries" element={<MyTestSeries />} />
      <Route path="MySavedAddresses" element={<MySavedAddresses />} />
      <Route path="MyProfile" element={<MyProfile />} />
      <Route path="MyOrders" element={<MyOrders />} />
        
       
      </Routes>
      {/* <Sidebar /> */}
      <Footer />
    </Router>
    // <div>
    //   {/* <Login /> */}
    //   {/* <ForgotPassword /> */}
    //   <AboutUs />

    // </div>
  );
}
// <div>
//   <Registeration/>
//   <TermsandConditions/>
// </div>
// <Sidebar />

// <BrowserRouter>
//  <Sidebar/>
// <Routes>

// <Route path ="/"element={<MyDashboard/>}/>
// <Route path ="/MyDashboard"element={<MyDashboard/>}/>
// <Route path ="/MyBatch"element={<MyBatch/>}/>
// <Route path ="/MyAssignment"element={<MyAssignment/>}/>
// <Route path ="/MyDoubts"element={<MyDoubts/>}/>
// <Route path ="/MyTestSeries"element={<MyTestSeries/>}/>
// <Route path ="MySavedAddresses"element={<MySavedAddresses/>}/>
// <Route path ="MyProfile"element={<MyProfile/>}/>
// <Route path ="MyOrders"element={<MyOrders/>}/>

// </Routes>

// </BrowserRouter>
// <div>
//   <MyDashboard/>
//   <MyOrders/>
//   </div>

export default App;
