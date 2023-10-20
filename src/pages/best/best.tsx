import s from './best.module.sass'
import Card from './components/card/card'
import PopUp from './components/popUp/popUp';
import books from '../../bd/books.js'; 
import { useState } from 'react';



const Best = () => {
    let [anim,setAnim] = useState(false) 
    let [idBook,setIdBook] = useState(0) 

    function switcPopUp(num:number){
        setAnim(!anim)
        setIdBook(num)
    }

    return(
        <div className={s.best}>
            <PopUp func={switcPopUp} id={idBook} anim={anim}/>
            <div className={s.top_block}>
                <h1 className={s.title}>Топ 100 книг </h1>
                <p className={s.sign}>По моей версии</p>
            </div>
            <div className={s.cont_best}>
            {books.map((item:any,index:any)=>( 
                <Card func={switcPopUp}  
                key={index} 
                link={item.link} 
                genre={item.genre}   
                id={item.id} 
                title={item.title} 
                autor={item.autor} 
                description={item.description}/>
            ))}
            </div>
            
            </div>

)
}

export default  Best