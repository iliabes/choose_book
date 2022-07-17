import {createContext} from 'react'
interface Props{
    theme:Theme,
    switchTheme: (theme:Theme) => void
}


export enum Theme {
    'DARK' = 'dark',
    'LIGHT' = 'light',
    
}

 export const ThemeContext = createContext<Props>({
     theme:Theme.DARK,
     switchTheme : ()=>{}
 });

 export default ThemeContext