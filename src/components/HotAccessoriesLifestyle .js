import React from 'react'
import Hotcard from './Hotcard.js'
import Slife from './hotitemsLifestyle.js'
import "../styles/HotAccessories.css"

const HotAccessoriesLifestyle  = () => {
  return (
    <div className='HotAccessories'>

        <div>
            <img src= "https://i02.appmifile.com/677_operator_in/25/01/2021/8163c3c89feb2c83c73b019d5fd50181.jpg" alt="cover" />
        </div>

        <div>
          <Hotcard imgsrc={Slife[0].image} namecard={Slife[0].name} price={Slife[0].price} />
          <Hotcard imgsrc={Slife[1].image} namecard={Slife[1].name} price={Slife[1].price} />
          <Hotcard imgsrc={Slife[2].image} namecard={Slife[2].name} price={Slife[2].price} />
          <Hotcard imgsrc={Slife[3].image} namecard={Slife[3].name} price={Slife[3].price} />
          <Hotcard imgsrc={Slife[4].image} namecard={Slife[4].name} price={Slife[4].price} />
          <Hotcard imgsrc={Slife[6].image} namecard={Slife[6].name} price={Slife[6].price} />
         

        </div>

     </div>
  )
}

export default HotAccessoriesLifestyle 