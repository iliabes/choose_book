import s from './Footer.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'


function Footer() {
    return (
      <footer className={s.footer}>
        
        <div className={s.icon_cont}>
          <GenerateSvg id={'vk'}/>
        </div>
        <div className={s.icon_cont}>
          <GenerateSvg id={'githab'}/>
        </div>
        <div className={s.icon_cont}>
          <GenerateSvg id={'telega'}/>
      
        </div>

      </footer>
      )
  }
  
  export default Footer;