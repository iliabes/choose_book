
import s from './Description.module.sass'
import { useAppDispatch} from "../../../../hooks/store"
import { changeId} from "../../../../store/slices/slice";
import { IBooks, } from '../../../../type/type';

 const Description =  (props:IBooks) => {
    const dispath = useAppDispatch()

    function cnahgeId(){
        dispath(changeId(['step',0]))
        
    }

        return (
            <div className={s.description_cont}>
                
                <p className={s.description}>{props.description}</p>
                <button className={s.again} onClick={cnahgeId}>Поробовать снова</button>
                <a className={s.description_link} href={props.link}>Посмотреть эту книгу на Fantlab.ru</a>
                <h3 className={s.fant_title}>Посмотреть похожие на фатлаб</h3>
                {props.simularBooks.map((item,index)=>(<a href={item.link} key={index} className={s.fant_btn}>{item.autor}{item.title}</a>))}
            </div>
        )
    }

export default Description


