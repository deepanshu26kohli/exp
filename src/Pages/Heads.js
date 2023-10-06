import React,{useContext, useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddHeader from '../Components/AddHeader/AddHeader'
import ShowHead from '../Components/ShowHead.js/ShowHead'
const Heads = (props) => {
  return (
    <>
      <Header refresh = {props.refresh} setRefresh = {props.setRefresh}/>
      <Banner refresh = {props.refresh} setRefresh = {props.setRefresh}/>
      <AddHeader refresh = {props.refresh} setRefresh = {props.setRefresh} />
      <ShowHead refresh = {props.refresh} setRefresh = {props.setRefresh} />
    </>
  )
}

export default Heads
