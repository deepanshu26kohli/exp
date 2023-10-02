import React from 'react'
import { useState , useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddTransaction from '../Components/AddTransaction.js/AddTransaction'
import ShowTransaction from '../Components/ShowTransaction/ShowTransaction'
import { fetchAllTransactions } from '../Redux/Action/Transaction/GetAllTransactions'
import { useDispatch } from 'react-redux'
import { fetchBalance } from '../Redux/Action/Balance/Balance'
import { fetchIncome } from '../Redux/Action/Income/Income'
import { fetchExpense } from '../Redux/Action/Expense/Expense'
import { fetchCash } from '../Redux/Action/Cash/Cash'
import { fetchBankBalance } from '../Redux/Action/BankBalance/BankBalance'
const Transaction = () => {
  const dispatch = useDispatch()
  const [refresh,setRefresh] = useState(false);
  useEffect(()=>{
    dispatch(fetchAllTransactions());
    dispatch(fetchBalance());
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchCash());
    dispatch(fetchBankBalance());
  },[refresh])
  return (
    <>
      <Header />
      <Banner />
      <AddTransaction refresh = {refresh} setRefresh = {setRefresh}/>
      <ShowTransaction refresh = {refresh} setRefresh = {setRefresh}/>
    </>
  )
}

export default Transaction
