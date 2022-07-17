
import s from './AnswerButton.module.sass'
import { useAppDispatch } from "../../../../hooks/store";
import { changeId } from "../../../../store/slices/slice";


 const AnswerButton  =  (func:any) => {

 console.log('func :', func.func);

    const dispath = useAppDispatch()
    function changeStep(num:number){dispath(changeId(num))}
    return (<button onClick={()=>{func.func(func.quest.ansverID)}} className={s.answeButton} >{func.quest.ansver}</button>)
}

export default AnswerButton