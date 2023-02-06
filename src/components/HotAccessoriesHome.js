import React from 'react'
import Hotcard from './Hotcard.js'
import Shome from './hotitemsHome.js'
import "../styles/HotAccessories.css"

const HotAccessoriesHome = () => {
  return (
    <div className='HotAccessories'>

        <div>
            <img src=  "https://i02.appmifile.com/663_operator_in/20/01/2021/0f6ac3c219428b6decbe7fb03d479060.jpg" alt="cover" />
        </div>

        <div>
          <Hotcard imgsrc={Shome[0].image} namecard={Shome[0].name} price={Shome[0].price} />
          <Hotcard imgsrc={Shome[1].image} namecard={Shome[1].name} price={Shome[1].price} />
          <Hotcard imgsrc={Shome[2].image} namecard={Shome[2].name} price={Shome[2].price} />
          <Hotcard imgsrc={Shome[3].image} namecard={Shome[3].name} price={Shome[3].price} />
          <Hotcard imgsrc={Shome[4].image} namecard={Shome[4].name} price={Shome[4].price} />
          <Hotcard imgsrc={Shome[5].image} namecard={Shome[5].name} price={Shome[5].price} />

         

        </div>

     </div>
  )
}

export default HotAccessoriesHome