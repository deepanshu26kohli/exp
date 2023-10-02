import React from 'react'
import { printfxn, BASEURL, headers } from '../../Config/siteconfig';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const ShowTransaction = (props) => {
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");
    const [head, setHead] = useState("");
    const [bank, setBank] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [note, setNote] = useState("")
    const allHeads = useSelector((state) => state.getAllHeadsReducer);
    const typeOfTransaction = useSelector((state) => state.typeOfTransactionReducer);
    const allBanks = useSelector((state) => state.getAllBanksReducer);
    // console.log("show transactuion",allHeads,typeOfTransaction);
    const allTransactions = useSelector((state) => state.getAllTransactionReducer);
    // console.log("show transactuion",allHeads,typeOfTransaction,allTransactions);
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
    function getEditTransactionData(id){
        axios.get(`${BASEURL}/edit-transaction/${id}`, { headers })
            .then(response => {
                console.log(response.data);
                setAmount(response.data.transaction.amount);
                setDate(response.data.transaction.date);
                setNote(response.data.transaction.notes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const editSubmitForm = (e)=>{
        e.preventDefault();
        let editedTransaction = {amount,head_id:head,bank_id:bank,typeoftransaction_id:type,date,notes:note};
        //apicall
        axios.put(`${BASEURL}/update-transaction/${editId}`,editedTransaction, { headers })
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
                <h3>Transaction History</h3>
                <div className='table-responsive border rounded p-3'>
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
                                allTransactions.length ? allTransactions.map((e) => {
                                    return editId !== e.id ? (
                                        <tr key={e.id}>
                                            <td>{e.amount}</td>
                                            <td>{e.head[0].name}</td>
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
                                                <input required type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='head_id' value={head} onChange={(e) => { setHead(e.target.value) }} >
                                                    <option value="">Select Head/Party</option>
                                                    {
                                                        allHeads.length && allHeads.map((e) => {
                                                            return <option key={e.id} value={e.id}>{e.name}</option>
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td style={{ "width": "10vw" }}> 
                                            <select required className="form-select" name='bank_id' value={bank} onChange={(e) => { setBank(e.target.value) }} >
                                                <option value="">Select Bank/Cash</option>
                                                {
                                                    allBanks.length && allBanks.map((e) => {
                                                        return <option key={e.id} value={e.id}>{e.bank_name}</option>
                                                    })
                                                }
                                                <option value={2}>Cash</option>
                                            </select></td>
                                            <td style={{ "width": "5vw" }}>
                                            <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" className="form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <select required className="form-select" name='typeoftransaction_id' value={type} onChange={(e) => { setType(e.target.value) }} >
                                                    <option value="">Select Transaction</option>
                                                    {
                                                        typeOfTransaction.length && typeOfTransaction.map((e) => {
                                                            return <option key={e.id} value={e.id}>{e.name}</option>
                                                        })
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
                                    : <tr>
                                        <td>No Transaction Added Yet</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowTransaction
