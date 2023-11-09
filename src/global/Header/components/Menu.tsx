import s from './Menu.module.sass'
import classNames from 'classnames'
import useTheme from '../../../hooks/themeHook'
import { Theme } from '../../../context/themeContext'
import { Link } from 'react-router-dom'

function Menu (props:{show:boolean,switchMenu:()=>void}) {
    let showMenu = props.show
    const theme = useTheme()

    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }



    return (
        <div className={classNames(s.menu,{[s.menu_inactive]:!showMenu})}>
            <ul className={s.menu_cont}>
                <a onClick={()=>{switchMode()}} className={s.menu_item}>Сменить тему</a>
                <Link to='/best' className={s.menu_item}>Топ книг</Link>
                <Link to='/random' className={s.menu_item}>Случайная книга</Link>
                <Link to='/home' className={s.menu_item} >Выбрать книгу</Link>
                <a onClick={()=>{props.switchMenu()}} className={s.item_cancel} >x</a>
            </ul>
        </div>
    )
}



export default Menu