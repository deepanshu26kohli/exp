import React,{useState} from 'react'
import { AuthProvider } from './Context/AuthContext'
import Login from './Pages/Login'
import {Route , Routes} from 'react-router-dom'
import Transaction from './Pages/Transaction'
import NotFound from './Pages/NotFound'
import Heads from './Pages/Heads'
import Bank from './Pages/Bank'
import { useDispatch} from 'react-redux'
import { fetchTypeOfTransactionData } from './Redux/Action/Header/TypeOfTransaction';
import { fetchAllHeads } from './Redux/Action/Header/GetAllHeads';
import { fetchAllBanks } from './Redux/Action/Bank/GetAllBanks';
import { fetchAllTransactions } from './Redux/Action/Transaction/GetAllTransactions';
import { fetchBalance } from './Redux/Action/Balance/Balance';
import { fetchBankBalance } from './Redux/Action/BankBalance/BankBalance';
import { fetchIncome } from './Redux/Action/Income/Income';
import { fetchExpense } from './Redux/Action/Expense/Expense';
import { fetchCash } from './Redux/Action/Cash/Cash'
const App = () => {
  const dispatch = useDispatch();
  const [refresh,setRefresh] = useState(false);
  React.useEffect(()=>{
    if (localStorage.getItem('_k') !== null)
    {
    console.log('refreshed');
    dispatch(fetchTypeOfTransactionData());
    dispatch(fetchAllHeads());
    dispatch(fetchAllBanks());
    dispatch(fetchAllTransactions());
    dispatch(fetchBalance());
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchCash());
    dispatch(fetchBankBalance());
  }
  },[refresh])
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/" element={ <Login refresh = {refresh} setRefresh = {setRefresh}/>} />
        <Route path="/transactions" element={ <Transaction refresh = {refresh} setRefresh = {setRefresh}/>} />
        <Route path="/heads" element={ <Heads refresh = {refresh} setRefresh = {setRefresh}/>} />
        <Route path="/bank" element={ <Bank refresh = {refresh} setRefresh = {setRefresh}/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </AuthProvider>
    </>
  )
}
export default App
