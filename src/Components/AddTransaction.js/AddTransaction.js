import React from 'react'

const AddTransaction = () => {
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
        <form className='row ' >
          <div className="form-group col-md-3 col-12">
            <label >Amount</label>
            <input type="number" className="form-control" placeholder="Enter amount" />
          </div>
          <div className="form-group col-md-3 col-12">
            <label >Header</label>

            <select className="form-control" >
              <option value="">Select Header</option>
              {/* {
                                headerResult && headerResult.map((e, id) => {
                                    return <option key={id} value={JSON.stringify(e)}>{e.Header}</option>
                                })
                            } */}
            </select>
          </div>
          <div className="form-group col-12 col-md-3" >
            <label >Type of transaction</label>
            <select className="form-control" >
              <option value="">Select Type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Purchase">Purchase</option>
              <option value="Sale">Sale</option>
              <option value="Investment">Investment</option>
            </select>
          </div>
          <div className="form-group col-12 col-md-3" >
            <label >Mode of transaction</label>
            <select className="form-control"  >
              <option value="">Select Mode</option>
              <option value="Cash">Cash</option>
              <option value="Add Bank">Bank</option>
            </select>
          </div>
          {/* {
                        modeRef.current.value === "Add Bank" ? <div className="col-md-4 col-12 form-group" >
                            <label >Select Bank</label>
                            <select className="form-control" onChange={myBank} >
                                <option value="">Bank List</option>
                                {
                                    bankListResult && bankListResult.map((e, id) => {
                                        return <option key={id} value={JSON.stringify(e)}>
                                            {e.bankName}--{e.holderName}
                                        </option>
                                    })
                                }
                            </select>
                        </div> : ""
                    } */}
          <div className="col-md-4 col-12 form-group">
            <label >Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label >Add Note here</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          {/* <p className='col-12' style={{ 'color': "red" }}>{formErr}</p> */}
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
