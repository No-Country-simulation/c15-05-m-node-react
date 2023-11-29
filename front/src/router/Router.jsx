import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/home/Home';
import Register from '../components/register/Register';

const router = () => {
  return (
  <Router>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path='/register' element={<Register/>}/>

 </Routes>
  </Router>
  )
}

export default router