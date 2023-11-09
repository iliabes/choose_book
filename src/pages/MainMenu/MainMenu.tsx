import s from './MainMenu.module.sass'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    const theme = useTheme()

    

    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }


    return(
    <div className={s.main_menu}>
        <ul className={s.menu}>
        <Link className={s.menu_item} to='/best'>Топ книг</Link>
        <Link className={s.menu_item} to='/random'>Случайная книга</Link>
        <Link className={s.menu_item} to='/home'>Выбрать книгу</Link>
        <a className={s.menu_item} onClick={switchMode} >Сменить тему</a>
        </ul>
    </div> 
    )
}

export default  MainMenu