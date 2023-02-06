import React from 'react'
import VideoCard from './VideoCard.js'
import "../styles/Videos.css"

const Vid=[
    {
        "name": "Redmi Note 10 Pro Max",
        "image": "https://i02.appmifile.com/769_operator_in/26/04/2021/2fab525c022f0d6c0dba8a6edcf12060.png?width=398&height=320"
  },
  {
        "name": "Mi 10",
        "image": "https://i01.appmifile.com/webfile/globalimg/in/cms/2461CE83-F535-6B92-CBEE-5971984298E4.jpg?width=398&height=320"
  },
  {
        "name": "Mi MIX Alpha",
        "image": "https://i01.appmifile.com/webfile/globalimg/in/cms/FD2BD776-5489-44CA-F05A-C20C232A4848.jpg?width=398&height=320"
  }
]
const Videos = () => {
  return (
    <div className='videos'>

    {
        Vid.map((item,index)=>(

            <VideoCard index={index} key={item.image} image={item.image}  name={item.name} />
        ))
    
    }


    </div>
  )
}

export default Videos