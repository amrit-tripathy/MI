import React from 'react'
import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from "./components/NavBar.js"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import  HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"

import HotAccessoriesMusic from './components/HotAccessoriesMusic.js'
import HotAccessoriesSmartdevices from './components/HotAccessoriesSmartdevices.js'
import HotAccessoriesHome from './components/HotAccessoriesHome.js'
import HotAccessoriesLifestyle  from './components/HotAccessoriesLifestyle .js'
import HotAccessoriesMobile from './components/HotAccessoriesMobile .js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import data from "./data/data.json"
import NavOPtions from './components/NavOPtions.js'

function App() {
  return (
   <>
   <Router >
          <PreNavbar/>
          <NavBar/>
          <NavOPtions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

          <Slider />
          <Offers />
          <Heading text="STAR PRODUCTS" />
          <StarProduct />
          <Heading text="HOT ACCESSORIES" />
          <HotAccessoriesMenu />
        <Routes>

          <Route exact path='/music' element={ <HotAccessoriesMusic  />}>
          </Route>
          <Route exact path='/smartDevices' element={ <HotAccessoriesSmartdevices  />}>
          </Route>
           <Route exact path='/home' element={ <HotAccessoriesHome  />}>
          </Route>
           <Route exact path='/lifestyle' element={ <HotAccessoriesLifestyle  />}>
          </Route> 
           <Route exact path='/mobileAccessories' element={ <HotAccessoriesMobile  />}>
          </Route> 
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews />
        <Heading text="VIDEOS" />
         <Videos />
         <Heading text="IN THE PRESS" />
         <Banner />
         <Footer footer={data.footer}/>


   </Router>

   </>
  );
}

export default App;
