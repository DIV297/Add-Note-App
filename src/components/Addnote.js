import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const Addnote = () => {
    const context=useContext(noteContext)
    const {addnote}= context;
    const [note,setNote] = useState({title:"",description:"",tag:""});
    const onhandle=(e)=>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag)
        setNote({title:'',description:'',tag:''});
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <>
        <h1>Add Notes</h1>
        <div style={{'display':'block','margin':'auto','width':'80vw','backgroundColor':'lightgray','border':'2px solid black','borderRadius':'10px'}}>
            <form>
                <div className="form-outline mb-4">
                    <input type="text" id="title" name="title" className="form-control" onChange={onChange} value={note.title}/>
                    <label className="form-label" htmlFor="form2Example1">Title</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="description" name="description" className="form-control" onChange={onChange} value={note.description}/>
                    <label className="form-label" htmlFor="form2Example2">Description</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="tag" name="tag" className="form-control" onChange={onChange} value={note.tag}/>
                    <label className="form-label" htmlFor="form2Example2" >Tag</label>
                </div>
                
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={onhandle} disabled={note.title.length===0 || note.description.length<5}>Add</button>

            </form >
        </div>
</>
    )
}

export default Addnote
