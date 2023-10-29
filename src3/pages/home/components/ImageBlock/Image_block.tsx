
import s from './ImageBlock.module.sass'
import classNames from 'classnames'


import { useAppSelector } from "../../../../hooks/store"


export const ImageBlock =  () => {
    let step = useAppSelector(state => (state.bookSlice))    
    console.log('111111333423',step)
    let animate = step.animate
    let animateBgImage = step.animateBgImage
    let bg = step.id[1]


    return (
        <div className={s.image_block}>
                <div className={s.window}>
                    <div  className={classNames(s.main_container,{[s.main_container_inactive]:animateBgImage,}) }>
                        <img className={s.bg_image} src={`./../../../../public/bg/${bg}.jpg`} alt="bookShalter" />
                    </div>
                    {/* <div  className={classNames(s.circle,{[s.circle_active]:animate})}></div> */}
                    {/* <div className={classNames(s.square,{[s.square_active]:animate})}></div> */}
                    <button onClick={()=>{}}></button>
            </div>
    )
        </div>
    )

}




export default ImageBlock