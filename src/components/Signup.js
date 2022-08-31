import React, { useContext , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'

const Signup = () => {
  let history = useNavigate()
   const [credentials, setCredentials] = useState({name:'',email:'', password:'' })
    const context = useContext(noteContext);
    const { showAlert } = context;
  const handleSubmit = async () => {
    // login(user.email,user.password);
    
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,password })

    });
    const json = await response.json();
        console.log(json)
        if (json.answer===0) {
            localStorage.setItem('token', json.authtoken);
            showAlert("success", "successfully account created",'block')
            history("../", { replace: true });
            showAlert("success", "successfully account created. You can now login",'block')
        }
        else if(json.answer===2) {
            showAlert("danger", "User already exist.Try to login", "block")
            // alert('Invalid Credentials')
        }
        else if(json.answer===1) {
          showAlert("danger", "Invalid Crudentials - Your password and name should be contain atleast 5 alphabets", "block")
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
    <h2 style={{'marginTop':'10vh'}}>Create Account to INotebook App</h2>

    <form onSubmit={handleSubmit} style={{
      'display': 'inline-block',
      'width': '75vw',
      'border': '2px solid black', 'padding': '2vh', 'height': '60vh', 'borderRadius':'30px','marginTop': '10vh'
  }}>
<div className="form-outline mb-4">
    <input type="text" name='name' id='name' className="form-control" onChange={onChange}/>
    <label className="form-label" htmlFor="name" >Username</label>
  </div>

  <div className="form-outline mb-4">
    <input type="email" name='email' id='email' className="form-control" onChange={onChange}/>
    <label className="form-label" htmlFor="email" >Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" name='password' id='password' className="form-control" onChange={onChange}/>
    <label className="form-label" htmlFor="password" >Password</label>
  </div>

 

  <button type="button" className="btn btn-primary btn-block mb-4"  onClick={clickbutoon}>SignUp</button>

</form></>
  )
}

export default Signup
