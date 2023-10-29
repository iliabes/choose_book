
import s from './random.module.sass'
import books from "../../bd/books"
import Book_block from "./components/Book_block/Book_block"
import Description from "./components/Description/Description"
import classNames from 'classnames'
import { useState } from 'react'




const Random = () => {
    let [animate,setAnimate] = useState(false)
    let [id,setId] = useState(randomInteger(0,books.length))

 
    function randomInteger(min:number, max:number) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    




    function changeSlide(){
        setAnimate(true)
        
        

        setTimeout(()=>{
            setId(randomInteger(0,books.length))
        },1500)
        setTimeout(()=>{
            setAnimate(false)
        },3000)
    }



    


        return(
            <div className={s.home}>
            <Book_block idBook={id} autor={books[id].autor}  title={books[id].title}/>
            <Description func={changeSlide} link={books[id].link} description={books[id].description} simularbooks={books[id].simularBooks}/>
            <div className={ classNames(s.blue_circle,{[s.blue_circle_active]:animate})}></div>
            </div>
        )
   
}

export default  Random