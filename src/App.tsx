import MainMenu from './pages/MainMenu/MainMenu';
import Home from './pages/home/home';
import Best from './pages/best/best';
import {Routes,Route,} from "react-router-dom";
import Header from './global/Header/Header';
import Random from './pages/random/random';
import { useState } from 'react'
import classNames from 'classnames'

function App() {
  let [animate,setAnimate] = useState(false)
  console.log('animate',animate)


  function changeSlide():void{
    console.log('app');
    
    setAnimate(true)
    console.log('setAnimate',true)
    setTimeout(()=>{
        setAnimate(false)
    },3500)
}




  return (
    <div className='App' >
    <Header/>
    <div className={ classNames('blue_circle',{['blue_circle_active']:animate})}></div>
    <div className="content">
      <Routes>
        <Route path="/" element={<MainMenu />}/>
        <Route path="/home" element={<Home func={changeSlide}/>}/>
        <Route path="/best" element={<Best/>}/>
        <Route  path="/random" element={<Random/>}/>
      </Routes>
    </div>
    {/* <Footer/> */}
 
    </div>
  );
}

export default App;


