import React from "react";
import './App.css';
import Slide from "./Slide";

const App = () => {
  const slides = [
    {
      id: "slide 1",
      text: "Slide 1",
    },
    {
      id: "slide 2",
      text: "Slide 2",
    },
    {
      id: "slide 3",
      text: "Slide 3",
    }
  ]
  return(
    <div>
      <Slide slides={slides}/>
    </div>
  )
};

export default App;
