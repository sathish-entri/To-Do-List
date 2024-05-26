import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Heater from './Heater';
import Content from './content-items/Content';
import Count from './content-items/Count';
import Empty from './content-items/Empty';

function App() {
  const [item, setitem] = useState('')
  const [value, setvalue] = useState(JSON.parse(localStorage.getItem("totos")) || [])
  const [editer, setediter] = useState(null)
  // var toto=()=>{
  //  return JSON.parse(localStorage.getItem("totos")) || []
  // }
  //
  useEffect(()=>{
    // toto()
    console.log("hello")
  },[])
  return (
    <div className="App">
      
      <Count value={value}/>
     
     <Heater item={item} setitem={setitem}  value={value} setvalue={setvalue} editer={editer} setediter={setediter}/>
     {value.length>0?<Content value={value} setvalue={setvalue}  item={item} setitem={setitem} editer={editer} setediter={setediter}/>:<Empty />}
    {/* //  <Content value={value} setvalue={setvalue}  item={item} setitem={setitem} editer={editer} setediter={setediter}/> */}
     
        </div>
  );
}

export default App;
// https://github.com/sathish-entri/To-Do-List.git
// https://github.com/sathish-entri/To-do-list.git