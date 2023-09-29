import React,{useContext, useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddHeader from '../Components/AddHeader/AddHeader'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Heads = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      // navigate('/');
    }
    // console.log(isLoggedIn,"wert")
  },[isLoggedIn])
  return (
    <>
      <Header />
      <Banner />
      <AddHeader />
    </>
  )
}

export default Heads
