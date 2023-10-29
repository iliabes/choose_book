
import s from './Questions.module.sass'

import AnswerButton from '../AnswerButton/AnsweButton'


 interface IQuestions{
    animation: (param:()=>void)=> void,
    funcDispatch: (param:()=>void) => void,
    ansvers: IAnsvers,
    question: string
}


 interface IAnsvers {
    ansverID:[string,number]
    ansver:string
}


function getKey(min:number,max:number):number{
   let rand = min + Math.random() * (max - min);
   let res = Date.now() * Math.round(rand);
   return res
}

export const Questions =  (props:IQuestions) => {
    return (
         <div className={s.questions}>
            <h1 className={s.title}>{props.question}</h1>
            {props.ansvers.map((ansverID:[string,number],ansver:string,index) => 
            (<AnswerButton key={getKey(1,100)} animateSlide={props.animateSlide}  funcDispatch ={props.funcDispatch} ansver={ansver} ansverID={ansverID} ></AnswerButton>))}
        </div>
    )
}