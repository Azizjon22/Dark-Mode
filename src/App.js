import { useEffect, useState } from "react"


const App = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  },[])

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const hendleThemeSwitch = () => {
    setTheme(theme ===  "dark" ? "light" : "dark")
  }


  return (
    <div className='h-screen bg-white-200 dark:bg-black flex justify-center items-center'>
      <button onClick={hendleThemeSwitch} className='bg-green-200 p-4 rounded-3xl'> 
        Dark Mode
      </button>
    </div>
  )
}

export default App
