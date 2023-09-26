import React from 'react'
import Login from './Pages/Login'
import {Route , Routes} from 'react-router-dom'
import Transaction from './Pages/Transaction'
import NotFound from './Pages/NotFound'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/transactions" element={ <Transaction />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
