import React,{useState} from 'react';

import ririImg from "../assets/img/riri.jpeg";
import drakeImg from "../assets/img/drake.jpeg";



const App = () => {

  //state 
  const [title, setTitle]  = useState("Rihanna"); // this is used to represent the changing title
  const [image, setImage]  = useState(ririImg); // this is used to represent the changing image


  
  //Handler or An Event Handler

  const changeToDrake = ()=>
  {

      setTitle("Drake");
      setImage(drakeImg);
  }

  const changeToRiRi = ()=>
  {

    setTitle("Rihanna");
    setImage(ririImg);

  }

  return (
    <div>

          <h1>{title}</h1>
          <img src={image} alt="Global Superstar"  onMouseOver={changeToDrake} onMouseOut={changeToRiRi}/>   
    </div>
  )
}

export default App
