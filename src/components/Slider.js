import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


const start=[ 
    "https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg",
    "https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg",
"https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg",
"https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg",
"https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg",
"https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg",
"https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg",
"https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg",
"https://i02.appmifile.com/172_operator_in/08/06/2021/44c5407a6c9ede6d782bebfd70cecc24.jpg",
"https://i02.appmifile.com/667_operator_in/09/06/2021/eca16c5a1a97b1f30cedb943e144e2e0.jpg",
"https://i02.appmifile.com/934_operator_in/07/06/2021/372a6e5d29c26c34b716b0408a533e3f.jpg",
"https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"

]
const Slider = () => {
  return (
    <Carousel  >
     {start.map(function(val)
     {
       return (
        <Carousel.Item >
        <img
          className="d-block w-100"
          
          src={val}
          alt="First slide"
        />
        
      </Carousel.Item>
       ); 
     })}
    </Carousel>
  );
};

export default Slider;
