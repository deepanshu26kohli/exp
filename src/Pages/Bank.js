import React,{useContext, useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddBank from '../Components/AddBank/AddBank'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Bank = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate('/');
    }
  },[])
  return (
    <>
    <Header/>
    <Banner/>
    <AddBank/>
    </>
  )
}

export default Bank
