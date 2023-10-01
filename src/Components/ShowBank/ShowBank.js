import { printfxn, BASEURL, headers } from '../../Config/siteconfig';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
const ShowBank = (props) => {
    const allBanks = useSelector((state) => state.getAllBanksReducer);
    // console.log("banks",allBanks)
    const [bankName, setBankName] = useState("");
    const [holderName, setHolderName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [bankBalance, setBankBalance] = useState(0);
    const [editId, setEdit] = useState("");
    function delete_Bank(id) {
        axios.delete(`${BASEURL}/delete-bank/${id}`, { headers })
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
    function getEditBankData(id) {
        axios.get(`${BASEURL}/edit-bank/${id}`, { headers })
            .then(response => {
                console.log(response.data)
                setBankName(response.data.bank.bank_name)
                setHolderName(response.data.bank.holder_name)
                setAccountNumber(response.data.bank.account_number)
                setBankBalance(response.data.bank.bank_balance)
                setIfscCode(response.data.bank.ifsc_code)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    function editSubmitForm(e) {
        e.preventDefault();
        let editedBank = { bank_name: bankName, holder_name: holderName, account_number: accountNumber, ifsc_code: ifscCode, bank_balance: bankBalance };
        axios.put(`${BASEURL}/update-bank/${editId}`, editedBank, { headers })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        setBankName("");
        setHolderName("");
        setAccountNumber("");
        setIfscCode("");
        setBankBalance(0);
        setEdit("")
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
            getEditBankData(editId);
        }
    }, [editId])
    return (
        <>
            <div className='container border rounded mt-3 p-3'>
                <h3>All Banks</h3>
                <div className='table-responsive border rounded p-3'>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th>Bank Name</th>
                                <th>Holder Name</th>
                                <th>Account Number</th>
                                <th>IFSC Code</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBanks.length && allBanks.map((e) => {
                                    return editId !== e.id ? (
                                        <tr key={e.id}>
                                            <td>{e.bank_name}</td>
                                            <td>{e.holder_name}</td>
                                            <td>{e.account_number}</td>
                                            <td>{e.ifsc_code}</td>
                                            <td>{e.bank_balance}</td>
                                            <td>
                                                <div className='row justify-content-between  w-50 w-sm-100'>
                                                    <div className='col-6'>
                                                        <button className='btn-sm btn-success btn shadow' onClick={() => setEdit(e.id)}>Edit</button>
                                                    </div>
                                                    <div className='col-6'>
                                                        <button onClick={() => delete_Bank(e.id)} className=' btn-sm btn-danger btn shadow'>Delete</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={e.id}>
                                            <td style={{ "width": "10vw" }}>
                                                <input required type="text" name="bank_name" value={bankName} onChange={(e) => setBankName(e.target.value)} className="form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <input required type="text" name="color" value={holderName} onChange={(e) => setHolderName(e.target.value)} className=" form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <input required type="text" name="color" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className=" form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <input required type="text" name="color" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} className=" form-control" />
                                            </td>
                                            <td style={{ "width": "10vw" }}>
                                                <input required type="text" name="color" value={bankBalance} onChange={(e) => setBankBalance(e.target.value)} className=" form-control" />
                                            </td>
                                            <td>
                                                <div className='row justify-content-between  w-50 w-sm-100'>
                                                    <div className='col-6'>
                                                        <button onClick={editSubmitForm} className='btn-sm btn-warning btn shadow'>Update</button>
                                                    </div>
                                                    <div className='col-6'>
                                                        <button onClick={() => setEdit("")} className=' btn-sm btn-info btn shadow'>Back</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowBank
