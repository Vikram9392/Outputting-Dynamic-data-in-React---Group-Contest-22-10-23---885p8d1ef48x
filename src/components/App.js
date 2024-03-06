import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
  const [name,setName] = useState("____");
  let name1 = "";
  const getInput = (e)=>{
    name1 = e.target.value;
  }
  const showData =() =>{
    setName(name1);
  }
  return (
    <div id="main">
      <input id='input' onChange={getInput}></input>
      <button id='button' onClick={showData}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;
