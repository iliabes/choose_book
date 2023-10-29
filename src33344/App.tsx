import MainMenu from './pages/MainMenu/MainMenu';
import Home from './pages/home/home';
import Best from './pages/best/best';
import {Routes,Route,} from "react-router-dom";
import Header from './global/Header/Header';
import Random from './pages/random/random';
import { useState } from 'react'



function App() {

  return (
    <div className='App' >
    <Header/>

    <div className="content">
      <Routes>
        <Route path="/" element={<MainMenu />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/best" element={<Best/>}/>
        <Route path="/random" element={<Random/>}/>
      </Routes>
    </div>

    </div>
  );
}

export default App;


