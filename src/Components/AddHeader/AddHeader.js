import React from 'react'

const AddHeader = () => {
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
            <input type="number" className="form-control" placeholder="Enter Header Name" />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Select Color</label>
            <input type="color" className="form-control"  />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Type of Transaction</label>

            <select className="form-control" >
              <option value="">Select Transaction</option>
              {/* {
                                headerResult && headerResult.map((e, id) => {
                                    return <option key={id} value={JSON.stringify(e)}>{e.Header}</option>
                                })
                            } */}
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
