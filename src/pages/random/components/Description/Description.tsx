
import s from './Description.module.sass'


 const Description =  (props:any) => {

    console.log('props :', props);
        return (
            <div className={s.description_cont}>
                
                <p className={s.description}>{props.description}</p>
                <button className={s.again} onClick={props.func}>Поробовать снова</button>
                <a className={s.random_link} href={props.link}>Посмотреть на фантлаб</a>
                <h3 className={s.fant_title}>Посмотреть похожие на фатлаб</h3>
                {props.simularbooks.map((item:any,index:any)=>(<button key={index} className={s.fant_btn}>{item.autor}{item.title}</button>))}
            </div>
        )
    }

export default Description


// {props.simularBooks.map((item,key) => (<button>{item.autor}{item.title}</button>))} 