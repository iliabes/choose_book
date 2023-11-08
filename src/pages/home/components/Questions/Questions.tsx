
import s from './Questions.module.sass'

import AnswerButton from '../AnswerButton/AnsweButton'




interface IQuestions{
    animateSlide: () => void
    funcDispatch: (val:[string ,number]) => void,
    ansvers: {ansver:string ,ansverID:[string,number]}[],
    question: string
}





export const Questions =  (props:IQuestions) => {
    function getKey(min:number,max:number):number{
   let rand = min + Math.random() * (max - min);
   let res = Date.now() * Math.round(rand);
return res
}

    return (
        <div className={s.questions}>
            <h1 className={s.title}>{props.question}</h1>
            {props.ansvers.map((ansvID:{ansverID:[string,number,]},ansv:number) => 
            {
            return <AnswerButton key={getKey(1,100)} animateSlide={props.animateSlide}  funcDispatch ={props.funcDispatch} ansver={ansv} ansID={ansvID} ></AnswerButton>}
            )}
        </div>
    )
}