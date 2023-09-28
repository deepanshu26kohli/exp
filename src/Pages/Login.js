import React, { useState } from 'react'
import image from '../Images/expensebg.jpg';
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        console.log(email, password)
        axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password
        })
            .then(response => {
                console.log(response.data);
                console.log(response.data.data);
                toast.success(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <>

            <div style={{ "height": "100vh", backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }} >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(1rem)', }} className='flex-column w-100 align-items-center justify-content-center d-flex'>

                    <div className="container border rounded p-5 flex-column align-items-center justify-content-around d-flex" style={{ backgroundColor: "white", "height": "auto", "width": "auto", }}>
                        <h1 style={{ "color": "blue", "marginBottom": "1rem" }}>Expense Manager</h1>
                        <div className="row mb-3">
                            <div className="col">
                                <h2>Login</h2>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input className='px-2 rounded' type="email" name="email" id="" required placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input className='px-2 rounded' type="password" name="password" id="" required placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col">
                                <button onClick={login} className='btn btn-success btn-sm'>Login</button>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            <ToastContainer autoClose={800} />
        </>
    )
}

export default Login