import s from './Header.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import Menu from './components/Menu'
import { useState } from 'react';
// import logo from './../../assets/free-icon-reading-book-4072131.png'

function Header () {
let [show,setShow] = useState(true)
function switchMenu(){    
    setShow(!show)
}


    return (
        <div className={s.header}>
           
                <a className={s.cont_icon} href='/'>
                < GenerateSvg   id={'logo'}/>
                {/* <img src={logo} alt="" /> */}
                </a>

            <div  onClick={()=>{switchMenu()}} className={s.cont_icon}>
                <GenerateSvg    id={'settings'}/>
            </div>
            <Menu switchMenu={switchMenu} show={show}/>
        </div>
    )
}



export default Header