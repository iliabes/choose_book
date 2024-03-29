
import s from './Description.module.sass'
import { IBooks } from '../../../../type/type';
import { Link } from 'react-router-dom';

const Description =  (props:IBooks) => {

        return (
            <div className={s.description_cont}>
                
                <p className={s.description}>{props.description}</p>
                <button className={s.again} onClick={props.func}>Поробовать снова</button>
                <a className={s.random_link} href={props.link}>Посмотреть на фантлаб</a>
                <h3 className={s.fant_title}>Посмотреть похожие на фатлаб</h3>
                {props.simularBooks.map((item:{autor:string,title:string},index:number)=>(<button key={index} className={s.fant_btn}>{item.autor}{item.title}</button>))}
            </div>
        )
    }

export default Description


