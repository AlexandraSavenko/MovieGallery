// import { useEffect, useState } from 'react'
import css from './ThemeSwitcher.module.css'
import clsx from 'clsx'
export default function ThemeSwitcher () {
    // const [theme, setTheme] = useState('light')

    // const handleTheme = (currentTheme) => {
    //     console.log('theme switcher')
    //     setTheme(currentTheme)
    //     document.body.setAttribute('data-theme', theme)
    // }

    const switchTheme = (e) => {
if(e.target.checked){
    document.querySelector('body').setAttribute('data-theme', 'dark')
}else{
    document.querySelector('body').setAttribute('data-theme', 'light')

}
    }
    return <div className={css.themeBox}>
        <label className={css.switch}>
            <input type='checkbox' onChange={switchTheme}/>
            <span className={clsx(css.slider, css.round) }></span>
        </label>
        {/* <div className={clsx(css.themeBtn, {[css.active]: theme === 'light'})} onClick={() => handleTheme('light')}></div>
        <div className={clsx(css.themeBtn, {[css.active]: theme === 'dark'})} onClick={() => handleTheme('dark')}></div> */}
    </div>
}