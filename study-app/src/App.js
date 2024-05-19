import React, { useState } from 'react';
import './App.css'
import pc1 from './images/pc1.jpg';
import pc2 from './images/pc2.jpg';
import pc3 from './images/pc3.jpg';
import pc4 from './images/pc4.jpg';

import pic from './images/pic1.jpg';
import pic2 from './images/logo.png';
import n1 from './images/n1.webp';
import n2 from './images/n2.webp';
import pic3 from './images/images.jpg';
//import logo from './images/logoD.jpg';
//import logo2 from './images/logo2.jpg';

import About from './components/About';
import Home from './components/Home';
import Products from './components/Products'
import Contacts from './components/Contacts';
import ImageSlider from './components/ImageSlider';
import home1 from './images/home1.jpg';
import can from './images/pro.jpg';
import Services from './components/Services';
//import { Route,Routes,Swich } from 'react-router-dom';
import Slider from './components/Slider';
import {Route,Routes } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';






const App = () => {
  const images = [pic,pic2,pic3,can,n1,n2,pc1,pc2,pc3,pc4];
  const [entities,setEntities] = useState([]);


   
    // Add more image URLs here

    const addContactHandler = (entity)=>{
      setEntities([...entities, ...entity]);
    }
  

  
  return (
    <div className="app-container">
  
  
        <img src={pic2} alt ='pic' className='logo'/>
      
      
        <NavHeader/>
  
       <Routes>

      
        
       <Route path ='/' element = {<Home home1= {home1}  text="WELCOME TO OUR HOME PAGE"/>}></Route>
      
      <Route path = '/about' element  = {<About pic= {pic} text = "WELCOME TO ABOUT US WHO IS US"/>}></Route>
      <Route path = '/services' element ={<Services  pic3 ={pic3} text = "WELCOME TO OUR SERVICES"/>}></Route>
      <Route path ='/products' element = {<Products n1 ={n1} text = "WELCOME TO OUR PRODUCT"/>}></Route>
      <Route path = '/contacts' element = {<Contacts can ={can} text = "WELCOME TO OUR CONTACTS"/>}></Route>
      <Route path = '/images' element = {<ImageSlider images={images} text = "IMAGES OF OUR PRODUCTS"/>}></Route>
      <Route path = '/slides' element = {<Slider  images = {images} interval={4000}/>} text ="IMAGES SLIDING" />
      
      
      </Routes >
    
    <Footer/>
    

</div>
  

)
};


export default App;
