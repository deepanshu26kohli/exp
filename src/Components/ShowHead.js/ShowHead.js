import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { printfxn, BASEURL, headers } from '../../Config/siteconfig';
import { fetchAllHeads } from '../../Redux/Action/Header/GetAllHeads';
import { deleteHead } from '../../Redux/Action/Header/DeleteHead';
import axios from 'axios';
const ShowHead = (props) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000");
    const [type, setType] = useState("");
    const dispatch = useDispatch();
    const allHeads = useSelector((state) => state.getAllHeadsReducer);
    const typeOfTransaction = useSelector((state) => state.typeOfTransactionReducer);
    const [editId, setEdit] = useState("");
    function delete_Head(id) {
        dispatch(deleteHead(id));
        props.setRefresh(() => {
            if (props.refresh) {
                return false
            }
            else {
                return true
            }
        });
    }
    function getEditHeadData(h_id) {
        axios.get(`${BASEURL}/edit-head/${h_id}`, { headers })
            .then(response => {
                console.log(response.data)
                setName(response.data.head.name)
                setColor(response.data.head.color)
                setType(response.data.head.type_of_transaction_id)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    function editSubmitForm(e){
        e.preventDefault();
        let editedHead = { name,color,typeoftransaction_id:type };
        //apicall
        axios.put(`${BASEURL}/update-head/${editId}`,editedHead, { headers })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        setEdit("")
        setName("")
        setType("")
        setColor("#000000")
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
            getEditHeadData(editId);
        }
    }, [editId])
    return (
        <>
            <div className='container border rounded mt-3 p-3'>
                <h3>All Headers/Parties</h3>
                <div className='table-responsive border rounded p-3'>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Color-Code</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allHeads.length ? allHeads.map((e) => {
                                    return editId !== e.id ? (
                                        <tr key={e.id}>
                                            <td>{e.name}</td>
                                            <td>
                                                <div style={{ "width": "1.5vw", "height": "1.5vw", backgroundColor: `${e.color}`, "display": "block", }} className='border rounded-circle shadow'></div>
                                            </td>
                                            <td>{e.type_of_transaction[0].name}</td>
                                            <td>
                                                <div className='row justify-content-between  w-25 w-sm-100'>
                                                    <div className='col-4'>
                                                        <button className='btn-sm btn-success btn shadow' onClick={() => setEdit(e.id)}>Edit</button>
                                                    </div>
                                                    <div className='col-4'>
                                                        <button onClick={() => delete_Head(e.id)} className=' btn-sm btn-danger btn shadow'>Delete</button>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={e.id}>
                                            <td style={{ "width": "13vw" }}>
                                                <input required type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                                            </td>
                                            <td style={{ "width": "13vw" }}>
                                                <input required type="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-25 form-control" />
                                            </td>
                                            <td style={{ "width": "13vw" }}>
                                                <select required className="form-select" name='typeoftransaction_id' value={type} onChange={(e) => { setType(e.target.value) }} >
                                                    <option value="">Select Transaction</option>
                                                    {
                                                        typeOfTransaction.length && typeOfTransaction.map((e) => {
                                                            return <option key={e.id} value={e.id}>{e.name}</option>
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <div className='row justify-content-between  w-25 w-sm-100'>
                                                    <div className='col-4'>
                                                        <button onClick={editSubmitForm} className='btn-sm btn-warning btn shadow'>Update</button>
                                                    </div>
                                                    <div className='col-4'>
                                                        <button onClick={() => setEdit("")} className=' btn-sm btn-info btn shadow'>Back</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>)
                                }):<p>No Headers/Parties Added yet</p>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowHead
