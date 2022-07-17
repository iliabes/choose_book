import MainMenu from './pages/MainMenu/MainMenu';
import Home from './pages/home/home';
import Start from './pages/start/start';
import {Routes,Route,} from "react-router-dom";
import Footer from './global/Footer/Footer';
import Header from './global/Header/Header';


function App() {




  return (
    <div className='App' >
    <Header/>
    <div className="content">
      <Routes>
        <Route path="/" element={<MainMenu/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/start" element={<Start/>}/>
      </Routes>
    </div>
    <Footer/>
 
    </div>
  );
}

export default App;


