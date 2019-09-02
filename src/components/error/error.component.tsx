import React from 'react';
import './error.style.scss';
type IError = {
    message:string
}

export const Error:React.FC<IError> = ({message})=> {
    return(
        <div className="error-message">
            {message}
        </div>
    )
}