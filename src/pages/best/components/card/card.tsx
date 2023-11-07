import s from './card.module.sass'

interface IItem {
    genre:string | undefined,
    id:any,
    title:string | undefined,
    autor:string | undefined,
    description:string | undefined,
    link: string |  undefined
    func:(id:number)=>void
}

const Card = (props:IItem) => {

    return(
        <div onClick={()=>{props.func(props.id)}} className={s.card}>
            <div className={s.cord_cont}>
                <div className={s.left_block}>
                    <img className={s.bookImg}  src={`./../../../../../public/books/${props.id}.jpeg`} alt=" book" />
                </div>
                    <div className={s.right_block}>
                        <div className={s.cont_title}>
                            <h2 className={s.autor}>{props.autor}</h2>
                            <p className={s.autor}>{props.title}</p>
                        </div>
                        <div className={s.bottom_block}>
                        <p className={s.genre}>{props.genre}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default  Card