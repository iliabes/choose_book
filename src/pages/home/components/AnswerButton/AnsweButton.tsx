
import s from './AnswerButton.module.sass'



 const AnswerButton  =  (func:any) => {




    return (<a onClick={()=>{func.func(func.quest.ansverID)}} className={s.answeButton} >{func.quest.ansver}</a>)
}

export default AnswerButton