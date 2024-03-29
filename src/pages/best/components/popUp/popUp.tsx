import s from './popUp.module.sass'
import classNames from 'classnames'
import books from '../../../../bd/books'
import imgBooks from './../../../../bd/imgBooks'

interface IpopUp{
    anim:boolean,
    id:number,
    func:(num:number)=>void,

}

const PopUp = (props:IpopUp) => {
    let book = books[props.id]


    return(
        <div  className={classNames(s.popUp,{[s.popUp_active]:props.anim})}>
                    <h2 className={s.autor}>{books[props.id].autor}</h2>
                    <img className={s.book_img} src={imgBooks[props.id]} alt="" />
                    <p className={s.title}>{books[props.id].title}</p>
                    <p className={s.description}>{books[props.id].description}</p>
                    <a href={book.link} className={s.link} onClick={()=>{props.func(props.id)}}>Посмотреть на fantlab.ru</a>
                    <button className={s.cancel} onClick={()=>{props.func(props.id)}}>x</button>
        </div>
    )
}

export default  PopUp