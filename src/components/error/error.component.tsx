import React from 'react';
import styled from 'styled-components';
import stylevar from '../../constants/styleVariables';

type IError = {
    message:string
}
const ErrorMessage = styled.div`
margin-top: 2rem;
color: ${stylevar.red};
font-size: 1rem;
text-align: center;
width: 100%;
`
export const Error:React.FC<IError> = ({message})=> {
    return(
        <ErrorMessage>
            {message}
        </ErrorMessage>
    )
}