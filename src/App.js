import React from 'react'
import { AuthProvider } from './Context/AuthContext'
import Login from './Pages/Login'
import {Route , Routes} from 'react-router-dom'
import Transaction from './Pages/Transaction'
import NotFound from './Pages/NotFound'
import Heads from './Pages/Heads'
import Bank from './Pages/Bank'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTypeOfTransactionData } from './Redux/Action/Header/TypeOfTransaction';
import { fetchAllHeads } from './Redux/Action/Header/GetAllHeads';
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(fetchTypeOfTransactionData());
    // dispatch(fetchAllHeads());
  },[])
  return (
    <>
      <AuthProvider>
      <Routes>
    
        <Route path="/" element={ <Login />} />
        <Route path="/transactions" element={ <Transaction />} />
        <Route path="/heads" element={ <Heads />} />
        <Route path="/bank" element={ <Bank />} />
        <Route path="*" element={<NotFound/>}/>
       
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
