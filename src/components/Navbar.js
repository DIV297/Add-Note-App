import React,{useEffect} from 'react'
import { Link ,useLocation, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const history=useNavigate();
  
  let location = useLocation();
  if(location.pathname==='/login')
  history.pushState()
  useEffect(() => {
  console.log(location.pathname)
  }, [location]);
  return (
    <div style={{'position':'sticky','top':'0px'}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <Link style={{'display':`${location.pathname==='/'||location.pathname==='/signup'?'none':''}`}} className="navbar-brand" to="/about">iNotebook<span className="sr-only">(current)</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} style={{'display':`${location.pathname==='/'||location.pathname==='/signup'?'none':''}`}} to="/home" >Home</Link>
      </li>
      <li className="nav-item">
        <Link style={{'display':`${location.pathname==='/'||location.pathname==='/signup'?'none':''}`}} className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
      </li>
    </ul>
    {location.pathname==='/home'||location.pathname==='/about'?<Link to='/'><button type='button' className='btn btn-primary mx-2'>Logout</button></Link>:<div><Link to='/'>
    <button type="button" className="btn btn-primary mx-2">Login</button></Link>
    <Link to='/signup'>
    <button type="button" className="btn btn-primary mx-2">SignUp</button></Link> 
    </div>
    }
    </div>
</nav>
    </div>
  )
}

export default Navbar
