import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Banner = () => {
    const balance  = useSelector((state)=>state.getBalanceReducer)
    const income  = useSelector((state)=>state.getIncomeReducer)
    const expense  = useSelector((state)=>state.getExpenseReducer)
    const cash = useSelector((state)=>state.getCashReducer)
    const bankBalance = useSelector((state)=>state.getBankBalanceReducer)
    // console.log(bankBalance)
    return (
        <>
            <div className="container banner mt-3">
            <div className="row my-3 justify-content-between">
                    <div className="col-md-11 col-6">
                        <Link to="/heads" ><button className='btn btn-dark btn-sm'>Heads/Party</button></Link>
                    </div>
                    <div className="col-md col">
                        <Link to="/bank" ><button className='btn btn-dark btn-sm'>Bank/Cash</button></Link>
                    </div>
                </div>
                <div className="row mt-2  d-flex justify-content-md-between justify-content-center  ">
                    <div className="col-md-2 m-md-0 my-2 box-bal  col-11  d-flex align-items-center   rounded">
                        <i className="fa-solid fa-wallet fa-2xl mx-1" style={{ color: "#199719", fontSize: "3.3rem" }} />
                        <div >
                            <h5 >Balance</h5>
                            <h5>{balance.totalAmount?<>₹{balance.totalAmount}</>:<i style={{fontWeight:"1"}}>Null</i>}</h5>
                        </div>
                    </div>
                    <div className=" col-md-2 m-md-0 my-2 box-inc  col-11 d-flex align-items-center rounded">
                        <i className="fa-solid fa-arrow-trend-up mx-1 " style={{ color: "#00aaff", fontSize: "3.3rem" }} />
                        <div>
                            <h5>Income</h5>
                            <h5>{income.income?<>₹{income.income}</>:<i style={{fontWeight:"1"}}>Null</i>}</h5>
                        </div>
                    </div>
                    <div className=" col-md-2 m-md-0 my-2 box-exp col-11 d-flex align-items-center rounded">
                        <i className="fa-solid fa-arrow-trend-down mx-2" style={{ color: "red", fontSize: "3.3rem" }} />
                        <div>
                            <h5>Expense</h5>
                            <h5>{expense.expense?<>₹{expense.expense}</>:<i style={{fontWeight:"1"}}>Null</i>}</h5>
                        </div>
                    </div>
                    <div className=" col-md-2 m-md-0 my-2 box-cash col-11 d-flex align-items-center rounded">
                        <i className="text-warning fa-solid fa-indian-rupee-sign mx-2" style={{ color: "yellow", fontSize: "3.3rem" }} />
                        <div>
                            <h5>Available Cash</h5>
                            <h5>{cash.totalAmount?<>₹{cash.totalAmount}</>:<i style={{fontWeight:"1"}}>Null</i>}</h5>
                        </div>
                    </div>
                    <div className="box-bank col-md-2 m-md-0 my-2  box-exp col-11 d-flex align-items-center rounded">
                        <i className="fa-solid text-dark fa-bank mx-2" style={{ color: "red", fontSize: "3.3rem" }} />
                        <div>
                            <h5>Bank</h5>
                            <h5>{bankBalance.totalAmount?<>₹{bankBalance.totalAmount}</>:<i style={{fontWeight:"1"}}>Null</i>}</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Banner
