
import s from './Book_block.module.sass'



 const Book_block =  () => {


    return (
         <div className={s.image_block}>
                <div className={s.window}>
                    <div className={s.book_block}>
                        <img className={s.bg_image} src={require(`./../../../../assets/img/books/0.webp`)} alt="bookShalter" />
                        <h2 className={s.title}>Имя ветра</h2>
                        <h3 className={s.autor}>Патрик Руфус</h3>
                    </div>
             </div>
         </div>
    )
}

export default Book_block