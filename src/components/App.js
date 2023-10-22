import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [classes, setClasses]=useState("redColor");
const [flag, setFlag]=useState(false);
function changeStyle(){
  if(!flag){
    setClasses("blueColor")
    setFlag(true);
  }
  else{
    setClasses("redColor")
    setFlag(false);
  }
}
  return (
    <div id="main">
      <p className={classes} >Newton School</p>
      <button id='button' onClick={changeStyle}>Change Style</button>
    </div>
  )
}


export default App;
