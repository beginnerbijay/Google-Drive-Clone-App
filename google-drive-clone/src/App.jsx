import "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import {Routes,Route} from 'react-router-dom'
import MyDrive from "./pages/MyDrive";
import Computes from "./pages/Computes";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "./firebase";
import { useState } from "react";
import Login from "./pages/Login";
import Recent from "./pages/Recent";
import Nofile from "./pages/Nofile";

function App() {
  const [files, setfiles] = useState([])
  const [show, setshow] = useState(false)
  const [side, setside] = useState(true)
  const [user, setuser] = useState('')
  const auth = getAuth();
  const login =() => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    if(user){
      setshow(true)
      setuser(user)
    }
    console.log(user)
  }).catch((error) => {
    console.log(error.message)
  });
  }
  const opo=()=>{
    setside(!side)
  }
  
  return (
    <>{show?(
    <div className="App">
      <Header photoURL={user.photoURL} opo={opo}/>
      <div className="flex">
        <SideBar setshow={setshow} opo={opo} side={side}/>
          <div className={`${side?"s:hidden":"block"} w-[100vw] px-2`}>
        <Routes>
            <Route path="/" element={<MyDrive files={files} setfiles={setfiles}/>}/>
            <Route path="/computers" element={<Computes/>} exact/>
            <Route path="/recent" element={<Recent files={files}/>} exact/>
            <Route path="*" element={<Nofile />} exact/>
        </Routes>
            </div>
      </div>
    </div>)
    :<Login login={login}/>
    }</>
  );
}

export default App;
