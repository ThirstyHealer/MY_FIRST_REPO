import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import UncontrolledForm from './Component/ControlledForm.jsx'
import ControlledForm from './Component/ControlledForm.jsx'
import Checkbox_and_radio from './Component/Checkbox_and_radio.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffectExample from './Hooks/Use_effect_example.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
          <Route index  element={<UseContextExample />}/>
          <Route path='use-effect' elements= {<UseEffectExample />} />
          
      </Route>
    </Routes>
   </BrowserRouter>
  </StrictMode>,
)
