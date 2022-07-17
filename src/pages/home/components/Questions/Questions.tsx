
import s from './Questions.module.sass'
import { useAppSelector } from "../../../../hooks/store"
import { useEffect, useState } from 'react'
import steps from '../../../../bd/steps'
import AnsweButton from '../AnsweButton/AnsweButton'



export const Questions =  ({qustion}:any,) => {
    

    let step = steps[qustion.id]
    let obj = {
        ansvers:step.ansvers,
        funcDispatch:qustion.funcDispatch
    }
    console.log('obj :', obj);
    useEffect(()=>{
        let elem:any = document.getElementById('bla')
    })
    return (
         <div className={s.questions}>
            <h1 className={s.title}>{step.questions}</h1>
            {step.ansvers.map((item,index) => (<AnsweButton func ={qustion.funcDispatch} key={index} quest={item} ></AnsweButton>))}
        </div>
    )
}