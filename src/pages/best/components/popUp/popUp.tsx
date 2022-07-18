import s from './card.module.sass'

const popUp = () => {
    return(
        <div className={s.popUp}>
            <div className={s.cord_cont}>
                <div className={s.left_block}>
                    <img src={require('./../../../../assets/img/books/0.webp')} alt="" />
                </div>
                <div className={s.right_block}>
                    <h2 className={s.autor}>Ден Симонс</h2>
                    <p className={s.autor}>Гиперион</p>
                </div>
            </div>
                <div className={s.bottom_block}>
                    <p className={s.genre}>Фантастика</p>
                </div>
        </div>
    )
}

export default  popUp