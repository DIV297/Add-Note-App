import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import Addnote from './Addnote';
import Notesitem from './Notesitem';
const Notes = () => {
  let history=useNavigate()
  const context = useContext(noteContext);
  const { notes, fetchallnotes,editnote} = context;
  const [note, setNote] = useState({id:'' ,etitle: "", edescription: "", etag: "" });

  useEffect(() => {
    if(localStorage.getItem('token')){
    fetchallnotes();
    console.log(localStorage.getItem('token'));
    }
    else{
    history("../", { replace: true });
    }
    // eslint-disable-next-line
  }, [])
  const onhandle = () => {
    refclose.current.click();
    editnote(note.id,note.etitle,note.edescription,note.etag);
    
    // addnote(note.title, note.description, note.tag)
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const updatenote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }
  const ref = useRef(null)
  const refclose = useRef(null)
  return (
    <div> 
    <Addnote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-outline mb-4">
                  <input type="text" id="etitle" name="etitle" value={note.etitle} className="form-control" onChange={onChange} />
                  <label className="form-label" htmlFor="form2Example1">Title</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="edescription" name="edescription" value={note.edescription} className="form-control" onChange={onChange} />
                  <label className="form-label" htmlFor="form2Example2">Description</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="etag" name="etag" className="form-control" value={note.etag} onChange={onChange}/>
                    <label className="form-label" htmlFor="form2Example2">Tag</label>
                </div>

              </form >
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button disabled={note.etitle.length===0 || note.edescription.length<5}type="button" onClick={onhandle} className="btn btn-primary">Update note</button>
            </div>
          </div>
        </div>
      </div>
      <h1>Your Notes</h1>
      {notes.length===0 && 'No notes to display'}
      {
        notes.map((note) => {
          return <Notesitem key={note._id} updatenote={updatenote} notes={note}></Notesitem>;
        })
      }
    </div>
  )
}

export default Notes
