import s from './card.module.sass'

const Card = () => {
    return(
        <div className={s.card}>
            <div className={s.cord_cont}>
                <div className={s.left_block}>
                    <img className={s.bookImg}  src={require('./../../../../assets/img/books/0.webp')} alt=" book" />
                </div>
                <div className={s.right_block}>
                    <h2 className={s.autor}>Ден Симонс</h2>
                    <p className={s.autor}>Гиперион</p>
                    <div className={s.bottom_block}>
                     <p className={s.genre}>Фантастика</p>
                     <p className={s.genre}>Фентези</p>
                     <p className={s.genre}>Приключения</p>
                     
                    </div>
                </div>
            </div>

        </div>
    )
}

export default  Card