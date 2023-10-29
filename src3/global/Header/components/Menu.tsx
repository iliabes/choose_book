import s from './Menu.module.sass'
import classNames from 'classnames'
import useTheme from '../../../hooks/themeHook'
import { Theme } from '../../../context/themeContext'

function Menu (props:{show:()=>void,switchMenu:()=>void}) {
    let showMenu = props.show
    const theme = useTheme()

    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }



    return (
        <div className={classNames(s.menu,{[s.menu_inactive]:!showMenu})}>
            <ul className={s.menu_cont}>
                <a onClick={()=>{switchMode()}} className={s.menu_item}>Сменить тему</a>
                <a href='/best' className={s.menu_item}>Топ книг</a>
                <a href='/random' className={s.menu_item}>Случайная книга</a>
                <a href='/home' className={s.menu_item} >Выбрать книгу</a>
                <a onClick={()=>{props.switchMenu()}} className={s.item_cancel} >x</a>
            </ul>
        </div>
    )
}



export default Menu