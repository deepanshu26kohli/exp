import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { printfxn } from '../../Config/siteconfig';
import { fetchAllHeads } from '../../Redux/Action/Header/GetAllHeads';
import { deleteHead } from '../../Redux/Action/Header/DeleteHead';
const ShowHead = (props) => {
    const dispatch = useDispatch();
    const allHeads = useSelector((state) => state.getAllHeadsReducer);
    const [editId, setEdit] = useState("");  
    function delete_Head(id){
        dispatch(deleteHead(id));
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
                                allHeads.length && allHeads.map((e) => {
                                    return editId != e.id?(
                                    <tr key={e.id}>
                                        <td>{e.name}</td>
                                        <td>
                                            <div style={{ "width": "1.5vw", "height": "1.5vw", backgroundColor: `${e.color}`, "display": "block", }} className='border rounded-circle shadow'></div>
                                        </td>
                                        <td>{e.type_of_transaction[0].name}</td>
                                        <td>
                                            <div className='row justify-content-between  w-25 w-sm-100'>
                                                <div className='col-4'>
                                                    <button className='btn-sm btn-success btn shadow'  onClick={() => setEdit(e.id)}>Edit</button>
                                                </div>
                                                <div className='col-4'>
                                                    <button onClick={()=>delete_Head(e.id)}  className=' btn-sm btn-danger btn shadow'>Delete</button>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>):(<tr key={e.id}>
                                        <td>{e.name}</td>
                                        <td>
                                            <div style={{ "width": "1.5vw", "height": "1.5vw", backgroundColor: `${e.color}`, "display": "block", }} className='border rounded-circle shadow'></div>
                                        </td>
                                        <td>{e.type_of_transaction[0].name}</td>
                                        <td>
                                            <div className='row justify-content-between  w-25 w-sm-100'>
                                                <div className='col-4'>
                                                    <button className='btn-sm btn-success btn shadow'>Update</button>
                                                </div>
                                                <div className='col-4'>
                                                    <button onClick={() => setEdit("")} className=' btn-sm btn-danger btn shadow'>Back</button>
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

export default ShowHead
