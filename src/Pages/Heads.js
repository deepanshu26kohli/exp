import React,{useContext, useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddHeader from '../Components/AddHeader/AddHeader'
import ShowHead from '../Components/ShowHead.js/ShowHead'
import { fetchAllHeads } from '../Redux/Action/Header/GetAllHeads'
import { useDispatch } from 'react-redux'
const Heads = () => {
  const dispatch = useDispatch()
  const [refresh,setRefresh] = useState(false);
  useEffect(()=>{
    dispatch(fetchAllHeads());
  },[refresh])
  return (
    <>
      <Header />
      <Banner />
      <AddHeader refresh = {refresh} setRefresh = {setRefresh} />
      <ShowHead refresh = {refresh} setRefresh = {setRefresh} />
    </>
  )
}

export default Heads
