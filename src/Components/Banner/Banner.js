import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <>
            <div className="container banner mt-3">
            <div className="row my-3 justify-content-between">
                    <div className="col-md-11 col-6">
                        <Link to="/heads" ><button className='btn btn-dark btn-sm'>Heads/Party</button></Link>

                    </div>
                    <div className="col-md col">
                        <Link to="/bank" ><button className='btn btn-dark btn-sm'>Bank</button></Link>
                    </div>
                </div>
                <div className="row mt-2  d-flex justify-content-md-between justify-content-center  ">
                    <div className="col-md-3 m-md-0 my-2 box-bal  col-11  d-flex align-items-center   rounded">
                        <i class="fa-solid fa-wallet fa-2xl mx-2" style={{ color: "#199719", fontSize: "3.3rem" }} />
                        <div >
                            <h5 >Balance</h5>
                            <h5>₹12345</h5>
                        </div>
                    </div>
                    <div className=" col-md-3 m-md-0 my-2 box-inc  col-11 d-flex align-items-center rounded">
                        <i class="fa-solid fa-arrow-trend-up mx-2 " style={{ color: "#00aaff", fontSize: "3.3rem" }} />
                        <div>
                            <h5>Income</h5>
                            <h5>₹12345</h5>
                        </div>
                    </div>
                    <div className=" col-md-3 m-md-0 my-2 box-exp col-11 d-flex align-items-center rounded">
                        <i class="fa-solid fa-arrow-trend-down mx-2" style={{ color: "red", fontSize: "3.3rem" }} />
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
