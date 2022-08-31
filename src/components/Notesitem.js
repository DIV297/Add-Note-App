import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Notesitem = (props) => {
    const { notes,updatenote } = props 
    const context = useContext(noteContext)
    const {deletenote}=context;
    return (
        <div style={{'display':'inline-block'}}>
            <div className="card" style={{ "width": "30vh",
    "margin": "25px"}}>
                <div className="card-body">
                    {console.log(notes.title)}
                    <h5 className="card-title">{notes.title}</h5>
                    <p className="card-text">{notes.description}</p>
                    <i style={{"cursor":"pointer"}} className="fa-solid fa-trash mx-2" onClick={()=>{deletenote(notes._id)}}></i>
                    <i style={{"cursor":"pointer"}} className="fa-solid fa-pen-to-square" onClick={()=>{updatenote(notes)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Notesitem
