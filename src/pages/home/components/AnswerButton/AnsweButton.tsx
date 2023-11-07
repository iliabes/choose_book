
import s from './AnswerButton.module.sass'


interface IAnsweButton{
    animateSlide:()=>void,
    funcDispatch:(val: [string, number])=>void,
    ansver: number,
    ansID:{ansver?:string ,ansverID:[string,number]  }
    
}

const AnswerButton  =  (props:IAnsweButton) => {
    console.log('ansver',props)
    return (<a onClick={()=>{setTimeout(()=>{props.funcDispatch(props.ansID.ansverID)},2000);props.animateSlide()}} className={s.answeButton} >{props.ansID.ansver}</a>)
}


export default AnswerButton

