import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
      <div className='container mt-5'>
        <div className="row  justify-content-between ">
          <div className="col-md-5 col-12   d-flex align-items-center justify-content-start">
            <Link className='logo'  to="/transactions"><h2 >ExpenseManager</h2></Link>
          </div>
          <div className="col-md-5 col-12   d-flex flex-column align-items-md-end align-items-start  ">
            <button className='logout border-0' onClick={logout} >Logout <i className="fa-solid  fa-arrow-right-from-bracket" /></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
