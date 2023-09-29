import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddHeader.css'
import { fetchTypeOfTransactionData } from '../../Redux/Action/Header/TypeOfTransaction';
const AddHeader = () => {
  const dispatch = useDispatch();
  const typeOfTransaction = useSelector((state) => state.typeOfTransactionReducer);
  console.log("aagya",typeOfTransaction); 
  
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
        <form className='row ' >
          <div className="form-group col-md-3 col-12">
            <label >Name</label>
            <input type="text" className="form-control" placeholder="Enter Header Name" />
          </div>
          <div className="form-group col-md-2 col-12">
            <label >Select Color</label>
            <input type="color" className="form-control w-50"   />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Type of Transaction</label>

            <select className="form-select" >
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
              <button type="submit" className="btn btn-sm btn-dark my-3">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
  )
}

export default AddHeader
