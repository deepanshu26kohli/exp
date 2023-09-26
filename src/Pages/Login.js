import React, { useState } from 'react'
import image from '../Images/expensebg.jpg';
const Login = () => {
    const [error, setError] = useState(false);
    return (
        <>

            <div style={{ "height": "100vh", backgroundImage: `url(${image})`, backdropFilter: 'blur(10px)' ,}} className='flex-column w-100 align-items-center justify-content-center d-flex'>
                <h1 style={{ "color": "blue", "marginBottom": "5rem" }}>Expense Manager</h1>
                <div className="container border rounded p-5 flex-column align-items-center justify-content-around d-flex" style={{ "background-color": "white", "height": "30vh","width":"auto" }}>
                    <div className="row ">
                        <div className="col">
                            <h2>Login</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <input className='px-2 rounded' type="text" name="" id="" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <input className='px-2 rounded' type="password" name="" id="" placeholder="Password" />
                        </div>
                    </div>
                    {
                        error ? <div className="row "> <div className="col">
                            <p style={{ "color": "red" }}>Please enter Valid Credentials</p>
                        </div></div> : <></>
                    }
                    <div className="row ">
                        <div className="col">
                            <button className='btn btn-success btn-sm'>Login</button>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Login