import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './index.css'
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("");
  useEffect(()=>{
    const storedUser = localStorage.getItem("user");
    if(storedUser){
      setUser(JSON.parse(storedUser))
    }
  },[])
  return (
    <Router>
       <nav id='navbar'>
        <Link to="/register" id='register_btn'>Register |  </Link> 
        <Link to="/login" id='login_btn'>  Login |</Link>  
        <Link to="/dashboard" id='dashboard_btn'>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};
export default App;
