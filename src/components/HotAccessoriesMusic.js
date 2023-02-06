import React from 'react'
import Hotcard from './Hotcard.js'
import SDusic from './hotitemsMusic.jsx'
import "../styles/HotAccessories.css"

const HotAccessories = () => {
  return (
    <div className='HotAccessories'>

        <div>
            <img src= "https://i01.appmifile.com/webfile/globalimg/in/cms/500BFA0B-CBEF-5DFF-79A9-E925F9F2FEE9.jpg" alt="cover" />
        </div>

        <div>
          <Hotcard imgsrc={SDusic[0].image} namecard={SDusic[0].name} price={SDusic[0].price} />
          <Hotcard imgsrc={SDusic[1].image} namecard={SDusic[1].name} price={SDusic[1].price} />
          <Hotcard imgsrc={SDusic[2].image} namecard={SDusic[2].name} price={SDusic[2].price} />
          <Hotcard imgsrc={SDusic[3].image} namecard={SDusic[3].name} price={SDusic[3].price} />
          <Hotcard imgsrc={SDusic[4].image} namecard={SDusic[4].name} price={SDusic[4].price} />
          <Hotcard imgsrc={SDusic[5].image} namecard={SDusic[5].name} price={SDusic[5].price} />
          

         

        </div>

     </div>
           
  )
}

export default HotAccessories