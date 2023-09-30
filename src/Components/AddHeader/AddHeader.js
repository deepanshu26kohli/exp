import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddHeader.css'
import { postHead } from '../../Redux/Action/Header/AddHead';
const AddHeader = (props) => {
  const typeOfTransaction = useSelector((state) => state.typeOfTransactionReducer);
  const [name,setName] = useState("");
  const [color,setColor] = useState("#000000");
  const [type,setType] = useState("");
  const dispatch = useDispatch();
  const submitHead = (e)=>{
    e.preventDefault()
    dispatch(postHead({name,color,typeoftransaction_id:type}))
    setName("")
    setColor("#000000")
    setType("")
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
            <h5>Add Header/Party</h5>
          </div>
        </div>
      </div>
      <div className=" col-12">
        <form className='row ' onSubmit={submitHead}>
          <div className="form-group col-md-3 col-12">
            <label >Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={name} name="name" type="text" className="form-control" placeholder="Enter Header Name" required />
          </div>
          <div className="form-group col-md-2 col-12">
            <label >Select Color</label>
            <input required onChange={(e)=>setColor(e.target.value)} value={color} name="color" type="color" className="form-control w-50"   />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Type of Transaction</label>
            <select required className="form-select" name='typeoftransaction_id' value={type} onChange={(e)=>{setType(e.target.value)}} >
              <option value="">Select Transaction</option>
              {
                            typeOfTransaction.length && typeOfTransaction.map((e) => {
                                    return <option key={e.id} value={e.id}>{e.name}</option>
                            })
              }
            </select>
          </div>
          <div className="row">
            <div className="col">
              <button  type="submit" className="btn btn-sm btn-dark my-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddHeader
