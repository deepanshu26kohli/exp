import React,{useState,useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddBank from '../Components/AddBank/AddBank'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ShowBank from '../Components/ShowBank/ShowBank'
import { useDispatch } from 'react-redux'
import { fetchAllBanks } from '../Redux/Action/Bank/GetAllBanks'
const Bank = () => {
  const dispatch = useDispatch()
  const [refresh,setRefresh] = useState(false);
  useEffect(()=>{
    dispatch(fetchAllBanks());
  },[refresh])
  return (
    <>
    <Header/>
    <Banner/>
    <AddBank refresh = {refresh} setRefresh = {setRefresh}/>
    <ShowBank refresh = {refresh} setRefresh = {setRefresh}/>
    </>
  )
}

export default Bank
