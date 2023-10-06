import React, { useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddTransaction from '../Components/AddTransaction.js/AddTransaction'
import ShowTransaction from '../Components/ShowTransaction/ShowTransaction'
const Transaction = (props) => {
  useEffect(()=>{
    console.log('Transaction refresh')
    props.setRefresh(() => {
      if (props.refresh) {
          return false
      }
      else {
          return true
      }
  });
  },[])
  return (
    <>
      <Header refresh = {props.refresh} setRefresh = {props.setRefresh}/>
      <Banner refresh = {props.refresh} setRefresh = {props.setRefresh}/>
      <AddTransaction refresh = {props.refresh} setRefresh = {props.setRefresh}/>
      <ShowTransaction refresh = {props.refresh} setRefresh = {props.setRefresh}/>
    </>
  )
}

export default Transaction
