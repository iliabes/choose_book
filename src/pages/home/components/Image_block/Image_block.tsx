
import s from './Image_block.module.sass'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from "../../../../hooks/store"

export const Image_block =  ({idImage}:any) => {
    let step = useAppSelector(state => (state.bookSlice))
    console.log('step :', step);
    
    let animate = step.animate
    let animateBgImage = step.animateBgImage
    let bg = idImage
    const refContainer = useRef<any>();
    const anim = useRef<any>(0);

 
    let classname = classNames(s.circle, { [s.circl]: animate });

    function shift(){refContainer.current.style.transform = `translateX(${0}px)`;}


    useEffect(()=>{


        // setTimeout(shift,1000)
        
    },[])


    return (
         <div className={s.image_block}>
                <div className={s.window}>
                    <div ref={refContainer} className={classNames(s.main_container,{[s.main_container_inactive]:animateBgImage,}) }>
                        <img src={require(`./../../../../assets/img/bg/${bg}.jpg`)} alt="bookShalter" />
                    </div>
                    <div ref={anim} className={classNames(s.circle,{[s.circle_active]:animate})}></div>
                    <div className={classNames(s.square,{[s.square_active]:animate})}></div>
             </div>
         </div>
    )
}