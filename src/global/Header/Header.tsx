import s from './Header.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import Menu from './components/Menu'
import { useState } from 'react';

function Header () {
let [show,setShow] = useState(true)
function switchMenu(){    
    setShow(!show)
}


    return (
        <div className={s.header}>
           
                <a className={s.cont_icon} href='/'>
                < GenerateSvg   id={'logo'}/>
                </a>

            <div  onClick={()=>{switchMenu()}} className={s.cont_icon}>
                <GenerateSvg    id={'settings'}/>
            </div>
            <Menu switchMenu={switchMenu} show={show}/>
        </div>
    )
}



export default Header