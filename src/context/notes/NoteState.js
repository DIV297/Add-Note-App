// import react from "react";
import { useState } from "react";
import Alert from "../../components/Alert";
import noteContext from "./noteContext";
const host = "http://localhost:5000";
const NoteState = (props) => {
  // const s ={
  //     "name":"Divansh",
  //     "class":"Btech"
  // }
  // const [state,setState]= useState(s)
  // const update=()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name":"bajaj",
  //             "class":"IT"
  //         })
  //     }, 1000);
  // }
  const notesinitial = [
  ]
  const [notes, setNotes] = useState(notesinitial);
  //fetch notes
  const fetchallnotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

    });
    const json = await response.json();
    setNotes(json)
  }
  //Add note
  const addnote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    setNotes(notes.concat(json))
    showAlert("success",'Note Added Successfully','block')

  }
  //Edit note
  const editnote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)
    // setNotes(json)
    let Newnotes = JSON.parse(JSON.stringify(notes))//this is done so that copy of array is made and update notes will be executed without loading in the frontend itself
    for (let index = 0; index < Newnotes.length; index++) {
      const element = Newnotes[index];
      if (element._id === id) {
        Newnotes[index].title = title;
        Newnotes[index].description = description;
        Newnotes[index].tag = tag;
        break;
      }

    }
    setNotes(Newnotes);
    showAlert("success",'Note Edited Successfully','block')

  }
  //Delete note
  const deletenote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      // body:JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json)
    const Newnotes = notes.filter((note) => {
      return note._id !== id;
    })
    setNotes(Newnotes);
    showAlert("success",'Note Deleted Successfully','block')
  }




  const [message, setMessage] = useState('');
  const [type, setType] = useState(' ');
  const [display,setDisplay]=useState('none');

  const showAlert = (type, message,display) => {

    setMessage(message);
    setType(type)
    setDisplay(display)
    setTimeout(() => {
      setMessage(' ')
    setType(' ')
    setDisplay('none')
    },[2000])
    
  }
  return (

    <>
      <Alert message={message} type={type} display={display}/>
      <noteContext.Provider value={{ showAlert, notes, setNotes, addnote, deletenote, fetchallnotes, editnote }}>
        {props.children}
      </noteContext.Provider></>

  )

}
export default NoteState