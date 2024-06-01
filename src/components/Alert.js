import React from 'react'

export default function Alert(props) {

    const capital = (word) => {
        let neWord = word.toLowerCase();
        return neWord.charAt(0).toUpperCase() + neWord.slice(1);
    }

  return (
    <div style = {{height : '50px'}}>
    {props.alert && <div>
                <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        <div>
        <strong>{capital(props.alert.type)}</strong> : {props.alert.msg}
        </div>
        </div>
    </div>}
    </div>
  )
}
