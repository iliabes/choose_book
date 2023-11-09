import s from './Header.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import Menu from './components/Menu'
import { useState } from 'react';
import logo from './../../../public/book.png'
import { Link } from 'react-router-dom';

function Header () {
let [show,setShow] = useState(true)
function switchMenu(){    
    setShow(!show)
}


    return (
        <div className={s.header}>
                <Link className={s.cont_icon} to='/'>
                <img src={logo} alt="" />
                </Link>

            <div  onClick={()=>{switchMenu()}} className={s.cont_icon}>
                <GenerateSvg    id={'settings'}/>
            </div>
            
            <Menu switchMenu={switchMenu} show={show}/>
        </div>
    )
}



export default Header