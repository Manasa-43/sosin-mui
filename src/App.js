import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import Shop from "./components/Shop";
import { Courses22 } from "./components/Courses22";
import Courses21 from "./components/Courses21";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Registration from "./components/Registration";
import TermsandConditions from "./components/TermsandConditions";
import Sidebar from "./components/Sidebar";
import MyDashboard from "./pages/MyDashboard";
import MyOrders from "./pages/MyOrders";
import { Box } from "@mui/system";
import { TestSeries } from "./components/TestSeries";
import Login from "./components/Login";
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
import Cart from "./components/Cart";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [cartItem, setCartItem] = React.useState([]);

  const addToCart = (item) => {
    const exist = cartItem.find((ele) => ele.label === item.label);
    if (exist) {
      const newCartItems = cartItem.map((ele) =>
        ele.label === item.label ? { ...exist, qty: exist.qty + 1 } : ele
      );
      setCartItem(newCartItems);
    } else {
      const newCartItems = [...cartItem, { ...item, qty: 1 }];
      setCartItem(newCartItems);
    }
    // setCartItem([...cartItem, item]);
  }

  const abc = (item) => {
    console.log("hellooooo",item)
  }

  const remove = (item) => {
    console.log(item);
    setCartItem(cartItem.filter((arrItem) => arrItem.label !== item.label));
  };

  const incQty = (item) => {
    const exist = cartItem.find((ele) => ele.label === item.label);
    if (exist) {
      const newCartItems = cartItem.map((ele) =>
        ele.label === item.label ? { ...exist, qty: exist.qty + 1 } : ele
      );
      setCartItem(newCartItems);
    } else {
      const newCartItems = [...cartItem, { ...item, qty: 1 }];
      setCartItem(newCartItems);
    }
  };

  const decQty = (item) => {
    const exist = cartItem.find((ele) => ele.label === item.label);
    // const newCartItems = cartItem.map((ele)=>ele.label===item.label?{...exist,qty: exist.qty-1}:ele)
    if (exist.qty >1) {
      const newCartItems = cartItem.map((ele) =>
        ele.label === item.label ? { ...exist, qty: exist.qty - 1 } : ele
      );
      console.log(exist.qty)
      setCartItem(newCartItems);
    } else {
      console.log(exist.qty)
      setCartItem(cartItem.filter((ele) => ele.label !== item.label));
    }
  };

  const emptyCart =()=>{
    setCartItem([])
  }

  return (
    <Router>
      {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="/App" element={<App />}></Route>
        <Route path="/TestSeries" element={<TestSeries />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Courses/Courses22" element={<Courses22 />}></Route>
        <Route path="/Courses/Courses21" element={<Courses21 />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route
          path="/Shop"
          element={<Shop cartItem={cartItem} addToCart={addToCart} />}
        />
        <Route path="/" element={<MyDashboard />} />
        <Route path="/MyDashboard" element={<MyDashboard />} />
        <Route path="/MyBatch" element={<MyBatch />} />
        <Route path="/MyAssignment" element={<MyAssignment />} />
        <Route path="/MyDoubts" element={<MyDoubts />} />
        <Route path="/MyTestSeries" element={<MyTestSeries />} />
        <Route path="MySavedAddresses" element={<MySavedAddresses />} />
        <Route path="MyProfile" element={<MyProfile />} />
        <Route path="MyOrders" element={<MyOrders />} />
        <Route
          path="/Cart"
          element={
            <Cart
              cartItem={cartItem}
              abc = {abc}
              remove={remove}
              addToCart
              incQty={incQty}
              decQty={decQty}
              emptyCart={emptyCart}
            />
          }
        ></Route>
        {/* <Route path="/MyDashboard" element={<MyDashboard />} /> */}
        {/* <Route path="/MyBatch" element={<MyBatch />} /> */}
        {/* <Route path="/MyAssignment" element={<MyAssignment />} /> */}
        {/* <Route path="/MyDoubts" element={<MyDoubts />} /> */}
        {/* <Route path="/MyTestSeries" element={<MyTestSeries />} /> */}
        {/* <Route path="MySavedAddresses" element={<MySavedAddresses />} /> */}
        {/* <Route path="MyProfile" element={<MyProfile />} /> */}
        {/* <Route path="MyOrders" element={<MyOrders />} /> */}
        <Route path="/DailyNewsDairy" element={<DailyNewsDairy />} />
        <Route path="/EklavyaSchools" element={<EklavyaSchools />} />
        <Route path="/MonthlyNewsDairy" element={<MonthlyNewsDairy />} />
        <Route path="/Rankers" element={<Rankers />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Dnd" element={<Dnd />} />
        <Route path="/Iorem" element={<Iorem />} />
        <Route path="/Indian" element={<Indian />} />
        <Route path="/Methane" element={<Methane />} />
        <Route path="/AnthroNewsDairy" element={<AnthroNewsDairy />} />
        <Route path="/Geopolitics" element={<Geopolitics />} />
      </Routes>
      {/* <Sidebar /> */}
      <Footer />
    </Router>
  );
}

export default App;
