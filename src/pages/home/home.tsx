import ImageBlock  from "./components/ImageBlock/Image_block"
import { Questions } from "./components/Questions/Questions"
import s from './home.module.sass'
import { useAppSelector ,useAppDispatch} from "../../hooks/store"
import steps from "../../bd/steps"
import books from "../../bd/books"
import { changeAnimate ,changeId,changeAnimateBgImage} from "../../store/slices/slice";
import Book_block from "./components/Book_block/Book_block"
import Description from "./components/Description/Description"
import classNames from 'classnames'




const Home = () => {
    let step = useAppSelector(state => (state.bookSlice))
   
 
    let isBook = step.id[0]
    console.log('step :', isBook);
    let animate = false
    // isBook = 'step'


    
    const dispath = useAppDispatch()



    function changeSlide(num:number){
        console.log(num);
        
        dispath(changeAnimate(true))
        setTimeout(()=>{
            dispath(changeAnimateBgImage(true))
            dispath(changeId(num))
        },2000)
        setTimeout(()=>{
            dispath(changeAnimateBgImage(false))
            dispath(changeAnimate(false))
        },3000)
    }


    console.log(steps[step.id[1]]);
    

    if(isBook === 'step'){
        return(
            <div className={s.home}>
                <ImageBlock idImage={step.id[1]}  />
                <Questions ansvers={steps[step.id[1]].ansvers} question={steps[step.id[1]].questions} funcDispatch={changeSlide} />
                
            </div>
        )
        }else if(isBook === 'book'){
            return(
                <div className={s.home}>
                <Book_block idBook={step.id[1]} autor={books[step.id[1]].autor}  title={books[step.id[1]].title}/>
                <Description description={books[step.id[1]].description} simularbooks={books[step.id[1]].simularBooks}/>
                <div className={ classNames(s.blue_circle,{[s.blue_circle_active]:animate})}></div>
                </div>
            )
        }

}

export default  Home