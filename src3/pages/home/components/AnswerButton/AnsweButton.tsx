
import s from './AnswerButton.module.sass'
import { IAnsvers } from '../../../../type/type';

interface IAnsweButton{
    animateSlide:()=>void,
    funcDispatch:(val:number)=>void,
    ansver:number,
    ansverID:{ansver:string,ansverID:[string,number]}
}

const AnswerButton  =  (props:IAnsweButton) => {
    // console.log('button',props.ansverID.ansverID[1])
    console.log('button',props.ansverID.ansverID[1])
    return (<a onClick={()=>{setTimeout(()=>{props.funcDispatch(props.ansverID.ansverID[1])},2000);props.animateSlide()}} className={s.answeButton} >{props.ansverID.ansver}</a>)
}

export default AnswerButton

