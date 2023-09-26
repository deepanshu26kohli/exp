import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
     <div className='container mt-5'>
                <div className="row  justify-content-between ">
                    <div className="col-md-5 col-12   d-flex align-items-center justify-content-start">
                        <h2 className='logo' >ExpenseManager</h2>
                    </div>
                    <div className="col-md-5 col-12   d-flex flex-column align-items-md-end align-items-start  ">
                            
                           <span className='logout'>Logout <i class="fa-solid  fa-arrow-right-from-bracket"/></span> 
                    </div>
                </div>
      </div>
    </>
  )
}
export default Header
