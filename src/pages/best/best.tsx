import s from './best.module.sass'
import Card from './components/card/card'

const Best = () => {
    return(
        <div className={s.best}>
            <div className={s.top_block}>
            <h1 className={s.title}>Топ 100 книг </h1>
            <p className={s.sign}>По моей версии</p>
            </div>
            <div className={s.cont_best}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default  Best