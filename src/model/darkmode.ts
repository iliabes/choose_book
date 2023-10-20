import { Theme } from "../context/themeContext"

export default function darkMode(theme:Theme){
    const root = document.querySelector(':root') as HTMLElement
    root.style.setProperty('--compponent-bg-default',`var(--compponent-bg-${theme})`)
    root.style.setProperty('--compponent-btn-default',`var(--compponent-btn-${theme})`)
    root.style.setProperty('--compponent-body-default',`var(--compponent-body-${theme})`)
    root.style.setProperty('--compponent-text-default',`var(--compponent-text-${theme})`)
    root.style.setProperty('--compponent-footer-default',`var(--compponent-footer-${theme})`)
}