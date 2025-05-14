import React, { createContext } from 'react'

export const ThemeContext = createContext()
const UseContextExample = () => {
    const theme = createContext(ThemeContext)
    console.log(theme)
  return (
    <div>
        <h1>{theme}</h1>
    </div>
  )
}

export const Notes =()=>{
    const theme = useContext(ThemeContext)
    return(
      <>
        <h1 style={{color :theme == 'dark'?"black" :"red"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloremque aliquid tempore odio quidem illo, hic autem numquam rerum, qui impedit, ipsa nihil veniam temporibus mollitia reiciendis reprehenderit harum alias?
        </h1>
      </>
    )
  }

export default UseContextExample