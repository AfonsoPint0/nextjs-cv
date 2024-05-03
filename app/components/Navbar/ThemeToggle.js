"use client"
import { useEffect, useState } from "react"
export default function ThemeToggle() {
    
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = localStorage.getItem("theme")
        if((theme === null && prefersDarkMode) || theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")            
        }
    }, [darkMode])
    
    return(
        <div onClick={() => setDarkMode(!darkMode)}>
            {
            darkMode ?
                 <button className="p-1 rounded-2xl hover:bg-white hover:text-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#clip0_707_2192)"><path d="M10 14.167a4.167 4.167 0 1 0 0-8.333 4.167 4.167 0 0 0 0 8.333ZM10 .834v1.667M10 17.5v1.667M3.517 3.518 4.7 4.7M15.3 15.3l1.183 1.184M.833 10H2.5M17.5 10h1.667M3.517 16.484 4.7 15.301M15.3 4.7l1.183-1.182"></path></g></svg>
                 </button>
            : 
               <button className="p-1 rounded-2xl hover:bg-zinc-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.5 10.658A7.5 7.5 0 1 1 9.342 2.5a5.833 5.833 0 0 0 8.158 8.158Z"></path></svg>
                </button>
            }
        </div>
    )
}
