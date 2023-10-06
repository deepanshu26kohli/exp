import React,{useState,useEffect } from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import AddBank from '../Components/AddBank/AddBank'
import ShowBank from '../Components/ShowBank/ShowBank'
const Bank = (props) => {
  return (
    <>
    <Header refresh = {props.refresh} setRefresh = {props.setRefresh}/>
    <Banner refresh = {props.refresh} setRefresh = {props.setRefresh}/>
    <AddBank refresh = {props.refresh} setRefresh = {props.setRefresh}/>
    <ShowBank refresh = {props.refresh} setRefresh = {props.setRefresh}/>
    </>
  )
}

export default Bank
