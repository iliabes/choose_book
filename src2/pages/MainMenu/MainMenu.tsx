import s from './MainMenu.module.sass'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'

const MainMenu = () => {
    const theme = useTheme()

    

    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }


    return(
    <div className={s.main_menu}>
        <ul className={s.menu}>
        <a className={s.menu_item} href='/best'>Топ книг</a>
        <a className={s.menu_item} href='/random'>Случайная книга</a>
        <a className={s.menu_item} href='/home'>Выбрать книгу</a>
        <a className={s.menu_item} onClick={switchMode} >Сменить тему</a>
        </ul>
    </div> 
    )
}

export default  MainMenu