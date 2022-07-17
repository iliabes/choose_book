import s from './Menu.module.sass'
import GenerateSvg from '../../GenerateSvg/GenerateSvg'
import classNames from 'classnames'


function Menu (props:any) {
console.log('props :', props);


    let showMenu = props.show



    

// classNames(s.menu,{[s.menu_inactive]:showMenu})


    return (
        <div className={classNames(s.menu,{[s.menu_inactive]:!showMenu})}>
            <ul className={s.menu_cont}>
                <a className={s.menu_item}>Сменить тему</a>
                <a className={s.menu_item}>Топ книг</a>
                <a className={s.menu_item}>Случайная книга</a>
                <a className={s.menu_item} >Выбрать книгу</a>
                <a href='/home' className={s.menu_item} >Выбрать книгу</a>
                <a onClick={()=>{props.changeTheme()}} className={s.item_cancel} >x</a>
            </ul>
            
        </div>
    )
}



export default Menu