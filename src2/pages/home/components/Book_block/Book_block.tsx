import s from './Book_block.module.sass'


 const Book_block =  (props:any) => {
    console.log('props',props);
    


    return (
         <div className={s.image_block}>
                <div className={s.window}>
                    <div className={s.book_block}>
                        <img className={s.bg_image} src={`./../../../../assets/img/books/${props.idBook}.jpeg`} alt="bookShalter" />
                        <h2 className={s.title}>{props.title}</h2>
                        <h3 className={s.autor}>{props.autor}</h3>
                    </div>
             </div>
         </div>
    )
}

export default Book_block