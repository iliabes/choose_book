
import s from './Description.module.sass'
import { useAppDispatch} from "../../../../hooks/store"
import { changeId} from "../../../../store/slices/slice";

 const Description =  (props:any) => {
    const dispath = useAppDispatch()

    function cnahgeId(){
        dispath(changeId(['step',0]))
        
    }
    console.log('props :', props);
        return (
            <div className={s.description_cont}>
                
                <p className={s.description}>{props.description}</p>
                <button className={s.again} onClick={cnahgeId}>Поробовать снова</button>
                <h3 className={s.fant_title}>Посмотреть похожие на фатлаб</h3>
                {/* <button className={s.fant_btn}>Алекс Кош «Огненный Факультет» (2005, роман)</button>
                <button className={s.fant_btn}>Робин Хобб «Ученик убийцы» (1995, роман))</button>
                <button className={s.fant_btn}>Алекс Кош «Огненный Факультет» (2005, роман)</button>
                <button className={s.fant_btn}>Алексей Пехов «Хроники Сиалы» (2003, роман-эпопея)</button> */}
                {props.simularbooks.map((item:any,index:any)=>(<button key={index} className={s.fant_btn}>{item.autor}{item.title}</button>))}
            </div>
        )
    }

export default Description


// {props.simularBooks.map((item,key) => (<button>{item.autor}{item.title}</button>))} 