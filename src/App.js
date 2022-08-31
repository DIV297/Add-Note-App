import './App.css';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div className="App" style={{ 'backgroundColor': 'aliceblue' }}>
    
      <NoteState>
      
        <Router>
         <Navbar/>
          <Routes>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>

          </Routes>
        </Router>
      </NoteState>
    </div>
    </>
  );
}

export default App;
