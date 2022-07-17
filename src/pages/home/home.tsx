import { Image_block } from "./components/Image_block/Image_block"
import { Questions } from "./components/Questions/Questions"
import s from './home.module.sass'
import { useAppSelector ,useAppDispatch} from "../../hooks/store"
import steps from "../../bd/steps"
import { changeAnimate ,changeId,changeAnimateBgImage} from "../../store/slices/slice";




const Home = () => {
    let step = useAppSelector(state => (state.bookSlice))
    console.log('step :', step.animate);
    const dispath = useAppDispatch()
    

    let questions = {
        id:steps[step.id].id,
        stepQuset:steps[step.id].questions,
        stepAnsvers:steps[step.id].ansvers,
        funcDispatch:changeSlide
    }
    
    console.log(questions)

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

    function changeSlide2(){
        // dispath(changeAnimate(false))
        dispath(changeAnimateBgImage(true))
    }
    return(
        <div className={s.home}>
            <Image_block idImage={step.id}  />
            <Questions qustion={questions} />
            
        </div>
    )
}
// dispath(changeAnimate(true))
export default  Home