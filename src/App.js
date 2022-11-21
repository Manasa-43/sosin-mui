// import logo from './logo.svg';

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

export default App;
