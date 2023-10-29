
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


export const Questions =  (props:IQuestions) => {

    console.log('Questions',props)
    return (
         <div className={s.questions}>
            <h1 className={s.title}>{props.question}</h1>
            {props.ansvers.map((ansverID:[string,number],ansver:string) => 
            (<AnswerButton animateSlide={props.animateSlide}  funcDispatch ={props.funcDispatch} ansver={ansver} ansverID={ansverID} ></AnswerButton>))}
        </div>
    )
}