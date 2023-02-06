import React from 'react'
import Hotcard from './Hotcard.js'
import Ssmart from './hotitemsSmartdevice.js'
import "../styles/HotAccessories.css"


const HotAccessoriesSmartdevices = () => {
  return (
    <div className='HotAccessories'>

        <div>
            <img src= "https://i02.appmifile.com/953_operator_in/17/06/2021/e12dde416676486fed36d0503d5bd65a.jpg" alt="cover" />
        </div>

        <div>
          <Hotcard imgsrc={Ssmart[0].image} namecard={Ssmart[0].name} price={Ssmart[0].price} />
          <Hotcard imgsrc={Ssmart[1].image} namecard={Ssmart[1].name} price={Ssmart[1].price} />
          <Hotcard imgsrc={Ssmart[2].image} namecard={Ssmart[2].name} price={Ssmart[2].price} />
          <Hotcard imgsrc={Ssmart[3].image} namecard={Ssmart[3].name} price={Ssmart[3].price} />
          <Hotcard imgsrc={Ssmart[4].image} namecard={Ssmart[4].name} price={Ssmart[4].price} />
          <Hotcard imgsrc={Ssmart[5].image} namecard={Ssmart[5].name} price={Ssmart[5].price} />
          
         

        </div>

     </div>
  )
}

export default HotAccessoriesSmartdevices