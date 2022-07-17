import ImageBlock  from "./components/ImageBlock/Image_block"
import { Questions } from "./components/Questions/Questions"
import s from './home.module.sass'
import { useAppSelector ,useAppDispatch} from "../../hooks/store"
import steps from "../../bd/steps"
import { changeAnimate ,changeId,changeAnimateBgImage} from "../../store/slices/slice";
import Book_block from "./components/Book_block/Book_block"
import Description from "./components/Description/Description"



const Home = () => {
    let step = useAppSelector(state => (state.bookSlice))
    let hz = 'step'
    const dispath = useAppDispatch()



    function changeSlide(num:number){
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



    if(hz === 'step'){
        return(
            <div className={s.home}>
                <ImageBlock idImage={step.id}  />
                <Questions ansvers={steps[step.id].ansvers} question={steps[step.id].questions} funcDispatch={changeSlide} />
            </div>
        )
        }else{
            return(
                <div className={s.home}>
                <Book_block/>
                <Description/>
                </div>
            )
        }

}

export default  Home