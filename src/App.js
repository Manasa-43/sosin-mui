import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration";
import TermsandConditions from "./components/TermsandConditions";
import Sidebar from "./components/Sidebar";
import MyDashboard from "./pages/MyDashboard";
import MyOrders from "./pages/MyOrders";
import MyDoubts from "./pages/MyDoubts";
import MyBatch from "./pages/MyBatch";
import MySavedAddresses from "./pages/MySavedAddresses";
import MyTestSeries from "./pages/MyTestSeries";
import MyProfile from "./pages/MyProfile";
import MyAssignment from "./pages/MyAssignment";
import DailyNewsDairy from "./components/currentaffairs/DailyNewsDairy";
import MonthlyNewsDairy from "./components/currentaffairs/MonthlyNewsDaily";
function App() {
  return (
    // <Router>
    //   <Navbar />
      
    //   <Routes>
    //   <Route path="/" element={<MyDashboard />} />
    //     <Route path="/MyDashboard" element={<MyDashboard />} />
    //     <Route path="/Courses" element={<Courses />}></Route>
    //     <Route path="/About" element={<About />}></Route>
       
    //     <Route path="/MyBatch" element={<MyBatch />} />
    //     <Route path="/MyAssignment" element={<MyAssignment />} />
    //     <Route path="/MyDoubts" element={<MyDoubts />} />
    //     <Route path="/MyTestSeries" element={<MyTestSeries />} />
    //     <Route path="MySavedAddresses" element={<MySavedAddresses />} />
    //     <Route path="MyProfile" element={<MyProfile />} />
    //     <Route path="MyOrders" element={<MyOrders />} />
       
    //   </Routes>
     
    //   <Footer />
    // </Router>
    <div>
  {/* <MonthlyNewsDairy/> */}
      <DailyNewsDairy />

    </div>
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
