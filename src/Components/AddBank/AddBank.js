import React from 'react'

const AddBank = () => {
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
        <form className='row ' >
          <div className="form-group col-md-3 col-12">
            <label >Bank Name</label>
            <input type="text" className="form-control" placeholder="Enter Bank Name" />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Holder Name</label>
            <input type="text" className="form-control" placeholder="Enter Holder Name" />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Account Number</label>
            <input type="text" className="form-control" placeholder="Enter Account Number" />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >IFSC Code</label>
            <input type="text" className="form-control" placeholder="Enter IFSC Code" />
          </div>     
          <div className="form-group col-md-3 col-12">
            <label >Bank Balance</label>
            <input type="number" className="form-control" placeholder="Enter Bank Balance" />
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

export default AddBank
