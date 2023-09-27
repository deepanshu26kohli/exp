import React, { useState } from 'react'
import image from '../Images/expensebg.jpg';
const Login = () => {
    const [error, setError] = useState(false);
    return (
        <>

            <div style={{ "height": "100vh", backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",position:"relative" }} >
            <div style={{position: "absolute",top: 0,left: 0,right: 0,bottom: 0,backdropFilter: 'blur(.5rem)',}} className='flex-column w-100 align-items-center justify-content-center d-flex'>
                
                <div className="container border rounded p-5 flex-column align-items-center justify-content-around d-flex" style={{ "background-color": "white", "height": "auto","width":"auto", }}>
                <h1 style={{ "color": "blue", "marginBottom": "1rem" }}>Expense Manager</h1>
                    <div className="row mb-3">
                        <div className="col">
                            <h2>Login</h2>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <input className='px-2 rounded' type="text" name="email" id="" required placeholder="Email" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <input className='px-2 rounded' type="password" name="password" id="" required placeholder="Password" />
                        </div>
                    </div>
                    {
                        error ? <div className="row my-2"> <div className="col">
                            <p style={{ "color": "red" }}>Please enter Valid Credentials</p>
                        </div></div> : <></>
                    }
                    <div className="row my-4">
                        <div className="col">
                            <button className='btn btn-success btn-sm'>Login</button>
                        </div>
                    </div>
                </div >
                </div>
            </div>
        </>
    )
}

export default Login