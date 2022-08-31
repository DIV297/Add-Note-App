import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
const Login = () => {
    let history = useNavigate()
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const context = useContext(noteContext);
    const { showAlert } = context;

    // const [user,setUser]=useState({email:'',password:''});
    const handleSubmit = async () => {
        // login(user.email,user.password);
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            showAlert("success", "successfully login")
            history("../home", { replace: true });
            showAlert("success", "successfully login", "block")
        }
        else {
            showAlert("danger", "Invalid credentials", "block")
            // alert('Invalid Credentials')
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const clickbutoon = () => {
        console.log('clicked button');
        handleSubmit();
    }
    return (
        <>
            <div>
                <h2 style={{'marginTop':'10vh'}}>Login to INotebook App</h2>
                <form onSubmit={handleSubmit} style={{
                    'display': 'inline-block',
                    'width': '75vw',
                    'border': '2px solid black', 'padding': '2vh', 'height': '60vh', 'borderRadius':'30px','marginTop': '10vh'
                }}>
                    <div className="form-outline mb-4 my-3">
                        <input type="email" id="email" name="email" className="form-control" onChange={onChange} value={credentials.email} />
                        <label className="form-label" htmlFor="email">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" name="password" className="form-control" onChange={onChange} value={credentials.password} />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="form2Example31" onChange={onChange} />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!" onChange={onChange}>Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" onClick={clickbutoon} className="btn btn-primary btn-block mb-4">Sign in</button>


                </form>
            </div></>
    )
}

export default Login
