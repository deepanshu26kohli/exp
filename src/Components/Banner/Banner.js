import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <>
    <div className="container banner mt-3">
        <div className="row  d-flex justify-content-md-between justify-content-center  ">
            <div className="col-md-3 m-md-0 my-2 box-bal  col-11  d-flex align-items-center   rounded">
                <i class="fa-solid fa-wallet fa-2xl mx-2" style={{ color: "#199719",fontSize:"3.3rem" }}/>
                <div >
                    <h5 >Balance</h5>
                    <h5>₹12345</h5>
                </div>
            </div>
            <div className=" col-md-3 m-md-0 my-2 box-inc  col-11 d-flex align-items-center rounded">
            <i class="fa-solid fa-arrow-trend-up mx-2 " style={{ color: "#00aaff",fontSize:"3.3rem" }}/>
                    <div>
                        <h5>Income</h5>
                        <h5>₹12345</h5>
                    </div>    
            </div>
            <div className=" col-md-3 m-md-0 my-2 box-exp col-11 d-flex align-items-center rounded">
            <i class="fa-solid fa-arrow-trend-down mx-2" style={{ color: "red",fontSize:"3.3rem" }}/>
                    <div>
                        <h5>Expense</h5>
                        <h5>₹12345</h5>
                    </div>    
            </div>
        </div>
    </div>
</>
  )
}

export default Banner
