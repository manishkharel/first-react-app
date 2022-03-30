import React from "react";
import ReactDOM from "react-dom";

// components
import Header from "./componente/header";

const App = () =>{
  return (
    <div>
      <Header/>
    </div>
  )
}


ReactDOM.render(<App/>,document.querySelector('#root'));

