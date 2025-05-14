import React, { useContext } from 'react'
import UserList from './Component/UserList'
import UseEffectExample, { UserFetchData } from './Hooks/Use_effect_example'
import UseContextExample, { ThemeContext } from './Hooks/UseContextExample'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
     <ThemeContext.Provider value={ 'dark' }>
    <UseEffectExample />
    <UserFetchData />
    <UseContextExample />
    
    </ThemeContext.Provider>
   

    </div>
  )
}

 

export default App