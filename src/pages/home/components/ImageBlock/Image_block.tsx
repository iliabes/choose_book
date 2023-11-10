
import s from './ImageBlock.module.sass'
import classNames from 'classnames'
import imgCovers from '../../../../bd/imgCovers'

import { useAppSelector } from "../../../../hooks/store"


export const ImageBlock =  () => {
    let step = useAppSelector(state => (state.bookSlice))    
    // let animate = step.animate
    let animateBgImage = step.animateBgImage
    let bg = step.id[1]


    return (
        <div className={s.image_block}>
                <div className={s.window}>
                    <div  className={classNames(s.main_container,{[s.main_container_inactive]:animateBgImage,}) }>
                        <img className={s.bg_image} src={imgCovers[bg]} alt="bookShalter" />
                    </div>
            </div>
        </div>
    )

}




export default ImageBlock