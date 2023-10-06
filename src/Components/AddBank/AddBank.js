import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBank } from '../../Redux/Action/Bank/AddBank';
const AddBank = (props) => {
  const [bankName, setBankName] = useState("");
  const [holderName, setHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankBalance, setBankBalance] = useState(0);
  const dispatch = useDispatch();
  const submitHead = (e) => {
    e.preventDefault()
    dispatch(postBank({ bank_name: bankName, holder_name: holderName, account_number: accountNumber, ifsc_code: ifscCode, bank_balance: bankBalance }))
    setBankName("");
    setHolderName("");
    setAccountNumber("");
    setIfscCode("");
    setBankBalance(0);
    props.setRefresh(() => {
      if (props.refresh) {
        return false
      }
      else {
        return true
      }
    });
  }
  return (
    <div className="container mt-3">
      <div className="row p-3 mx-1 mx-md-0 border rounded">
        <div className="col-12 ">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-6 col-12">
              <h5>Add Bank</h5>
            </div>
          </div>
        </div>
        <div className=" col-12">
          <form className='row ' onSubmit={submitHead} >
            <div className="form-group col-md-3 col-12">
              <label >Bank Name</label>
              <input value={bankName} onChange={(e) => { setBankName(e.target.value) }} type="text" className="form-control" placeholder="Enter Bank Name" />
            </div>
            <div className="form-group col-md-3 col-12">
              <label >Holder Name</label>
              <input value={holderName} onChange={(e) => { setHolderName(e.target.value) }} type="text" className="form-control" placeholder="Enter Holder Name" />
            </div>
            <div className="form-group col-md-3 col-12">
              <label >Account Number</label>
              <input value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value) }} type="text" className="form-control" placeholder="Enter Account Number" />
            </div>
            <div className="form-group col-md-3 col-12">
              <label >IFSC Code</label>
              <input value={ifscCode} onChange={(e) => { setIfscCode(e.target.value) }} type="text" className="form-control" placeholder="Enter IFSC Code" />
            </div>
            <div className="form-group col-md-3 col-12">
              <label >Bank Balance</label>
              <input value={bankBalance} onChange={(e) => { setBankBalance(e.target.value) }} type="number" className="form-control" placeholder="Enter Bank Balance" />
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-sm btn-dark my-3">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="row ">
          <div className="col-2">
            <h5>Add Cash</h5>
          </div>
          <div className="col-2">
            <input type="number" placeholder='Add Cash amount' />
            <button type="submit" className="btn btn-sm btn-dark my-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddBank
