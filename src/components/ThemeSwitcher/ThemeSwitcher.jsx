import { useEffect, useState } from 'react'
import css from './ThemeSwitcher.module.css'
import clsx from 'clsx'
export default function ThemeSwitcher () {
    const [theme, setTheme] = useState('light')

    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme");
    //     if (savedTheme) {
    //       setTheme(savedTheme);
    //       document.body.setAttribute("data-theme", savedTheme);
    //     }
    //   }, []);

    const handleTheme = (currentTheme) => {
        console.log('theme switcher')
        setTheme(currentTheme)
        document.body.setAttribute('data-theme', theme)
    }
    return <div className={css.themeBox}>
        <div className={clsx(css.themeBtn, {[css.active]: theme === 'light'})} onClick={() => handleTheme('light')}></div>
        <div className={clsx(css.themeBtn, {[css.active]: theme === 'dark'})} onClick={() => handleTheme('dark')}></div>
    </div>
}