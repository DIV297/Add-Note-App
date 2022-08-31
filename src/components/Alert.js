import React from 'react'

const Alert = (props) => {
    let random=props.type;
    if(props.type==='danger'){
        random='Error'
    }
    return (
        <div style={{'display':`${props.display}`,'position':'sticky','top':'0px'}}>
            
            {<div className={`alert alert-${props.type}`} role="alert">
            <strong>{random}</strong> : {props.message}
            </div>}
        </div>
    )
}

export default Alert
