import React from 'react'
import { printfxn, BASEURL, headers } from '../../Config/siteconfig';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const ShowTransaction = (props) => {
    const [amount, setAmount] = useState(0);
    const [searchHead,setSearchHead] = useState("");
    const [searchData,setSearchData] = useState([]);
    const [type, setType] = useState("");
    const [head, setHead] = useState("");
    const [bank, setBank] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [note, setNote] = useState("")

    const allHeads = useSelector((state) => state.getAllHeadsReducer);

    const typeOfTransaction = useSelector((state) => state.typeOfTransactionReducer);
    const allBanks = useSelector((state) => state.getAllBanksReducer);
    const allTransactions = useSelector((state) => state.getAllTransactionReducer);
    function search(searchHead){
             console.log(searchHead);
             if(searchHead){
                axios.get(`${BASEURL}/search/${searchHead}`, { headers })
                .then(response => {
                    setSearchData(response.data)
                    console.log(searchData)
                })
                .catch(error => {
                    console.error('Error Searching Head:', error);
                });
             }
             else{
                console.log("fill valid search")
                setSearchData([])
             }
           
    }
    const [editId, setEdit] = useState("");
    function delete_Transaction(id) {
        axios.delete(`${BASEURL}/delete-transaction/${id}`, { headers })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error Deleting Bank:', error);
            });
        props.setRefresh(() => {
            if (props.refresh) {
                return false
            }
            else {
                return true
            }
        });
    }
    function getEditTransactionData(id) {
        axios.get(`${BASEURL}/edit-transaction/${id}`, { headers })
            .then(response => {
                console.log(response.data);
                setAmount(response.data.transaction.amount);
                setDate(response.data.transaction.date);
                setNote(response.data.transaction.notes);
                setType(response.data.transaction.typeoftransaction_id);
                setBank(response.data.transaction.bank_id);
                setHead(response.data.transaction.head_id)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const editSubmitForm = (e) => {
        e.preventDefault();
        let editedTransaction = { amount, head_id: head, bank_id: bank, typeoftransaction_id: type, date, notes: note };
        //apicall
        axios.put(`${BASEURL}/update-transaction/${editId}`, editedTransaction, { headers })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        setAmount(0);
        setType("");
        setHead("");
        setBank("");
        setDate(new Date().toISOString().slice(0, 10));
        setNote("");
        setEdit("");
        props.setRefresh(() => {
            if (props.refresh) {
                return false
            }
            else {
                return true
            }
        });
    }
    useEffect(() => {
        if (editId !== "") {
            console.log("edit")
            getEditTransactionData(editId);
        }
    }, [editId])
    return (
        <>
            <div className='container border rounded mt-3 p-3'>
                <div className="row">
                    <div className="col-6">
                        <h3>Transaction History</h3>
                    </div>
                    <div className="col-4">
                        
                        <select required className="form-select w-50" name='head_id' value={searchHead} onChange={(e) => { setSearchHead(e.target.value) }} >
                            <option value="all">All Heads/Parties</option>
                            {
                                allHeads.length && allHeads.map((e) => {
                                    return <option key={e.id} value={e.id}>{e.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='col-2'>
                        <button className='btn-dark btn-sm text-white border-0' onClick={()=>search(searchHead)}>Search</button>
                    </div>
                </div>
                <div className='table-responsive border rounded p-3 mt-2'>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Heads</th>
                                <th>Bank/Cash</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Notes</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { 
                            searchData.length > 0 ? searchData.map((e) => {
                                    return editId !== e.id ? (
                                        <tr key={e.id}>
                                            <td>{e.amount}</td>
                                            <td style={{ color: `${e.head[0].color}` }}>{e.head[0].name}</td>
                                            <td>{e.bank[0].bank_name}</td>
                                            <td>{e.date}</td>
                                            <td>{e.typeoftransaction[0].name}</td>
                                            <td>{e.notes}</td>
                                            <td>
                                                <div className='row justify-content-between  w-50 w-sm-100'>
                                                    <div className='col-4'>
                                                        <button className='btn-sm btn-success btn shadow' onClick={() => setEdit(e.id)}>Edit</button>
                                                    </div>
                                                    <div className='col-4'>
                                                        <button onClick={() => delete_Transaction(e.id)} className=' btn-sm btn-danger btn shadow'>Delete</button>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>):  <tr key={e.id}>
                                            <td style={{ "width": "5vw" }}>
                                                <input required type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" style={{width:"13vw"}} />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='head_id' value={head} onChange={(e) => { setHead(e.target.value) }}>                  
                                                    {
                                                        allHeads.length && allHeads.map((x) => {
                                                            return e.head[0].id != x.id?(<option key={x.id} value={x.id}>{x.name}</option>):<option selected value={e.head[0].id}>{e.head[0].name}</option>
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='bank_id' value={bank} onChange={(e) => { setBank(e.target.value) }} >
                                                    
                                                    {
                                                        allBanks.length && allBanks.map((x) => {
                                                            return e.bank[0].id != x.id?(<option key={x.id} value={x.id}>{x.name}</option>):<option selected value={e.bank[0].id}>{e.bank[0].bank_name}</option>
                                                        })
                                                    }
                                                    <option value={999}>Cash</option>
                                                </select></td>
                                            <td style={{ "width": "5vw" }}>
                                                <input value={date} onChange={(e) => { setDate(e.target.value) }} type="date" className="form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='typeoftransaction_id' value={type} onChange={(e) => { setType(e.target.value) }} > 
                                                    {
    
                                                        typeOfTransaction.length && typeOfTransaction.map((x) => {
                                                            return e.typeoftransaction[0].id != x.id?(<option key={x.id} value={x.id}>{x.name}</option>):<option selected value={e.typeoftransaction[0].id}>{e.typeoftransaction[0].name}</option>
                                                        })
                                                        // setType(e.typeoftransaction[0].id)
                                                    }                                                 
                                                </select>
                                            </td>
                                            <td style={{ "width": "5vw" }}>
                                                <input required type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)} className="form-control" />
                                            </td>
                                            <td>
                                                <div className='row justify-content-between  w-50 w-sm-100'>
                                                    <div className='col-4'>
                                                        <button className='btn-sm btn-warning btn shadow' onClick={editSubmitForm} >Update</button>
                                                    </div>
                                                    <div className='col-4'>
                                                        <button onClick={() => setEdit("")} className=' btn-sm btn-info btn shadow'>Back</button>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>})
                                :allTransactions.length ? allTransactions.map((e) => {
                                    return editId !== e.id ? (
                                        <tr key={e.id}>
                                            <td>{e.amount}</td>
                                            <td style={{ color: `${e.head[0].color}` }}>{e.head[0].name}</td>
                                            <td>{e.bank[0].bank_name}</td>
                                            <td>{e.date}</td>
                                            <td>{e.typeoftransaction[0].name}</td>
                                            <td>{e.notes}</td>
                                            <td>
                                                <div className='row justify-content-between  w-50 w-sm-100'>
                                                    <div className='col-4'>
                                                        <button className='btn-sm btn-success btn shadow' onClick={() => setEdit(e.id)}>Edit</button>
                                                    </div>
                                                    <div className='col-4'>
                                                        <button onClick={() => delete_Transaction(e.id)} className=' btn-sm btn-danger btn shadow'>Delete</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={e.id}>
                                            <td style={{ "width": "5vw" }}>
                                                <input required type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" style={{width:"13vw"}} />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='head_id' value={head} onChange={(e) => { setHead(e.target.value) }} >
                                                    
                                                    {
                                                        allHeads.length && allHeads.map((x) => {
                                                            return e.head[0].id != x.id?(<option key={x.id} value={x.id}>{x.name}</option>):<option selected value={e.head[0].id}>{e.head[0].name}</option>
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='bank_id' value={bank} onChange={(e) => { setBank(e.target.value) }} >    
                                                    {
                                                        allBanks.length && allBanks.map((x) => {
                                                            return e.bank[0].id != x.id?(<option key={x.id} value={x.id}>{x.name}</option>):<option selected value={e.bank[0].id}>{e.bank[0].bank_name}</option>
                                                        })
                                                    }
                                                    <option value={999}>Cash</option>
                                                </select></td>
                                            <td style={{ "width": "5vw" }}>
                                                <input value={date} onChange={(e) => { setDate(e.target.value) }} type="date" className="form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='typeoftransaction_id' value={type} onChange={(e) => { setType(e.target.value) }} > 
                                                    {
    
                                                        typeOfTransaction.length && typeOfTransaction.map((x) => {
                                                            return e.typeoftransaction[0].id != x.id?(<option key={x.id} value={x.id}>{x.name}</option>):<option selected value={e.typeoftransaction[0].id}>{e.typeoftransaction[0].name}</option>
                                                        })
                                                        // setType(e.typeoftransaction[0].id)
                                                    }                                                 
                                                </select>
                                            </td>
                                            <td style={{ "width": "5vw" }}>
                                                <input required type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)} className="form-control" />
                                            </td>
                                            <td>
                                                <div className='row justify-content-between  w-50 w-sm-100'>
                                                    <div className='col-4'>
                                                        <button className='btn-sm btn-warning btn shadow' onClick={editSubmitForm} >Update</button>
                                                    </div>
                                                    <div className='col-4'>
                                                        <button onClick={() => setEdit("")} className=' btn-sm btn-info btn shadow'>Back</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                                    : <p className='mx-auto'>
                                        No Transactions Added Yet
                                    </p>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowTransaction
