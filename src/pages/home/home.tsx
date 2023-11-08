import ImageBlock  from "./components/ImageBlock/Image_block"
import { Questions } from "./components/Questions/Questions"
import s from './home.module.sass'
import { useAppSelector ,useAppDispatch} from "../../hooks/store"
import steps from "../../bd/steps"
import books from "../../bd/books"
import {changeId} from "../../store/slices/slice";
import Book_block from "./components/Book_block/Book_block"
import Description from "./components/Description/Description"
import classNames from 'classnames'
import { useState } from "react"



const Home  = () => {

    let [animate,setAnimate] = useState(false)
    let step = useAppSelector(state => (state.bookSlice))
    let isBook = step.id[0]
    const dispath = useAppDispatch()

    function animateSlide():void{
        setAnimate(true)
        setTimeout(()=>{
            setAnimate(false)
        },3500)
    }

    function changeSlide(num:[string ,number]):void{
        dispath(changeId(num))
    }
    // console.log('step',steps[step.id[1]].ansvers)

    if(isBook === 'step'){
        return(
            <div className={s.home}>
                
                <ImageBlock/>
                <Questions animateSlide={animateSlide} funcDispatch={changeSlide}  ansvers={steps[step.id[1]].ansvers} question={steps[step.id[1]].questions} />
                {/*<div className={ classNames(s.blue_circle,{[s.blue_circle_active]:animate})}></div> */}
                <div  className={classNames(s.circle,{[s.circle_active]:animate})}></div>
                <div className={classNames(s.square,{[s.square_active]:animate})}></div>
            </div>
        )
        }else if(isBook === 'book'){
            return(
                <div className={s.home}>
                <Book_block  idBook={step.id[1]} autor={books[step.id[1]].autor}  title={books[step.id[1]].title}/>
                <Description link={books[step.id[1]].link} description={books[step.id[1]].description} simularBooks={books[step.id[1]].simularBooks}/>
                {/* <div className={ classNames(s.blue_circle,{[s.blue_circle_active]:animate})}></div>
                <div  className={classNames(s.circle_book,{[s.circle_active_book]:animate})}></div> */}
                <div  className={classNames(s.square,{[s.square_active_book]:animate})}></div>
                </div>
            )
        }

}

export default  Home