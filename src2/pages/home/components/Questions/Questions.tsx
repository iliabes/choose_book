
import s from './Questions.module.sass'

import AnswerButton from '../AnswerButton/AnsweButton'



export const Questions =  (props:any,) => {


    return (
         <div className={s.questions}>
            <h1 className={s.title}>{props.question}</h1>
            {props.ansvers.map((item:any,index:any) => (<AnswerButton func ={props.funcDispatch} key={index} quest={item} ></AnswerButton>))}
        </div>
    )
}