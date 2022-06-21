import './App.css';
import Main from './components/Main';
import Navbar from "./components/Navbar"
import {useState} from "react"

let name ="anthony"
let age =25

function App() {
  const [showMain,setShowMain] = useState(true)

  
  const myShow=()=>{
    // setShowMain(!showMain)

    // if(showMain==true){
    //   setShowMain(false)
    // }else{
    //   setShowMain(true)
    // }
  }

  return (
    <div className="App">
      <Navbar user={name} age={age}/>
      {/* {showMain && <Main user={name} age={age} />} */}
      {showMain ? <Main user={name} age={age} />: <h1>Loading</h1>}
      hello
      <button onClick={()=>setShowMain(!showMain)}>Main componenti</button>
      {/* <button onClick={myShow}>Main componenti</button> */}
    </div>
  );
}

export default App;
