import React, { Component } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Service from "./Service"

class Navbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <ul>
            <li> <Link exact to="/">Home</Link></li>
            <li> <Link to="/service">Service</Link></li>
            <li> <Link to="/aboutUs">AboutUs</Link></li>
            <li> <Link to="/contactUs">ContactUs</Link></li>
        </ul>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Navbar;
