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
import MonthlyNewsDairy from "./components/currentaffairs/MonthlyNewsDairy";
import EklavyaSchools from "./components/currentaffairs/EklavyaSchools";
import Test from "./components/currentaffairs/Test";
import AnthroNewsDairy from "./components/currentaffairs/AnthroNewsDairy";
import Rankers from "./components/currentaffairs/Rankers";
import Iorem from "./components/currentaffairs/Iorem";
import Methane from "./components/currentaffairs/Methane";
import Indian from "./components/currentaffairs/Indian";
import Dnd from "./components/currentaffairs/Dnd";
import Geopolitics from "./components/currentaffairs/Geopolitics";
function App() {
  return (
    
     <Router>
      
      <Navbar/>
       <Routes>
     {/* <Route path="/" element={<MyDashboard />} /> */}
        <Route path="/MyDashboard" element={<MyDashboard />} />
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/About" element={<About />}></Route>
         <Route path="/MyBatch" element={<MyBatch />} />
        <Route path="/MyAssignment" element={<MyAssignment />} />
        <Route path="/MyDoubts" element={<MyDoubts />} />
        <Route path="/MyTestSeries" element={<MyTestSeries />} />
        <Route path="MySavedAddresses" element={<MySavedAddresses />} />
        <Route path="MyProfile" element={<MyProfile />} />
        <Route path="MyOrders" element={<MyOrders />} /> 
       {/* <Route path="currentaffirs" element={<CurrentAffairs/>}/>  */}
       <Route path="/DailyNewsDairy" element={<DailyNewsDairy/>}/>
       <Route path="/EklavyaSchools" element={<EklavyaSchools/>}/>
       <Route path="/MonthlyNewsDairy" element={<MonthlyNewsDairy/>}/>
       <Route path="/Rankers" element={<Rankers/>}/>
       <Route path="/Test" element={<Test/>}/>
       <Route path="/Dnd" element={<Dnd/>}/>
       <Route path="/Iorem" element={<Iorem/>}/>
       <Route path="/Indian" element={<Indian/>}/>
       <Route path="/Methane" element={<Methane/>}/>
       <Route path="/AnthroNewsDairy" element={<AnthroNewsDairy/>}/>
       <Route path="/Geopolitics" element={<Geopolitics/>}/>


      </Routes>
     
      <Footer />
    </Router>  
      
    
  )}

export default App;
