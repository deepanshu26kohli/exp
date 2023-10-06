import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postTransaction } from '../../Redux/Action/Transaction/AddTransaction';

const AddTransaction = (props) => {
  const typeOfTransaction = useSelector((state) => state.typeOfTransactionReducer);
  const allHeads = useSelector((state) => state.getAllHeadsReducer);
  const allBanks = useSelector((state) => state.getAllBanksReducer);
  const [amount,setAmount] = useState(0);
  const [type,setType] = useState("");
  const [head,setHead] = useState("");
  const [bank,setBank] = useState("");
  const [date,setDate] = useState(new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState("")
  const dispatch = useDispatch();
  const submitTransaction = (e)=>{
    e.preventDefault();
    dispatch(postTransaction({amount,head_id:head,bank_id:bank,typeoftransaction_id:type,date,notes:note}));
    setAmount(0);
    setType("");
    setHead("");
    setBank("");
    setDate(new Date().toISOString().slice(0, 10));
    setNote("");
    console.log("added")
    props.setRefresh(()=>{
      if (props.refresh){
          return false
      }
      else{
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
            <h5>Add Transaction</h5>
          </div>
        </div>
      </div>
      <div className=" col-12">
        <form className='row' onSubmit={submitTransaction}>
          <div className="form-group col-md-3 col-12">
            <label>Amount</label>
            <input onChange={(e)=>setAmount(e.target.value)} value={amount} name="amount" type="number" className="form-control" placeholder="Enter amount" />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Heads</label>

            <select required className="form-select" name='head_id' value={head} onChange={(e)=>{setHead(e.target.value)}} >
              <option value="">Select Head/Party</option>
              {
                            allHeads.length && allHeads.map((e) => {
                                    return <option key={e.id} value={e.id}>{e.name}</option>
                            })
              }
            </select>
          </div>
          <div className="form-group col-12 col-md-3" >
            <label >Type of transaction</label>
            <select required className="form-select" name='typeoftransaction_id' value={type} onChange={(e)=>{setType(e.target.value)}} >
              <option value="">Select Transaction</option>
              {
                            typeOfTransaction.length && typeOfTransaction.map((e) => {
                                    return <option key={e.id} value={e.id}>{e.name}</option>
                            })
              }
            </select>
          </div>
          <div className="form-group col-12 col-md-3" >
            <label >Banks/Cash</label>
            <select required className="form-select" name='bank_id' value={bank} onChange={(e)=>{setBank(e.target.value)}} >
              <option value="">Select Bank/Cash</option>
              {
                            allBanks.length && allBanks.map((e) => {
                                    return <option key={e.id} value={e.id}>{e.bank_name}</option>
                            })
              }
              <option value={2}>Cash</option>
            </select>
          </div>
          <div className="col-md-4 col-12 form-group">
            <label >Date</label>
            <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" className="form-control" />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label >Add Note here</label>
            <textarea value={note} onChange={(e)=>{setNote(e.target.value)}} className="form-control" rows="3"></textarea>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-sm btn-dark my-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddTransaction
