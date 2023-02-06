import React from 'react'
import Hotcard from './Hotcard.js'
import Smobile from './hotitemsMobileaccessories.js'
import "../styles/HotAccessories.css"

const HotAccessoriesMobile  = () => {
  return (
    <div className='HotAccessories'>

    <div>
        <img src= "https://i01.appmifile.com/webfile/globalimg/in/cms/801ED76B-614B-5959-E2C3-1EC8E14C0ABD.jpg" alt="cover" />
    </div>

    <div>
      <Hotcard imgsrc={Smobile[0].image} namecard={Smobile[0].name} price={Smobile[0].price} />
      <Hotcard imgsrc={Smobile[1].image} namecard={Smobile[1].name} price={Smobile[1].price} />
      <Hotcard imgsrc={Smobile[2].image} namecard={Smobile[2].name} price={Smobile[2].price} />
      <Hotcard imgsrc={Smobile[3].image} namecard={Smobile[3].name} price={Smobile[3].price} />
      <Hotcard imgsrc={Smobile[4].image} namecard={Smobile[4].name} price={Smobile[4].price} />
      <Hotcard imgsrc={Smobile[5].image} namecard={Smobile[5].name} price={Smobile[5].price} />
     

    </div>

 </div>
  )
}

export default HotAccessoriesMobile 