import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../About';
import Service from '../service';
import Getintouch from '../Getintouch';
import FAQs from '../FAQs';
import Home from '../Home';
import Footer from '../Footer';

const FooterRouting = () => {
    return (
        <div>
               <>
       
       <BrowserRouter>
       <Footer></Footer>
         <Routes>
           <Route path="/" element={<Home></Home>}></Route>
           <Route path="/about" element={<About />}></Route>
           <Route path="/service" element={<Service />}></Route>
           <Route path="/get in touch" element={<Getintouch />} ></Route>
           <Route path="/FAQs" element={<FAQs />}></Route>
        
         </Routes>
       </BrowserRouter>
       
        
      
          
         
         
          
           </>
        </div>
    );
}

export default FooterRouting;
