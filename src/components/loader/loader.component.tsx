import React from 'react';
import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const LoaderRing = styled.div`
margin-top: 1rem;
display: inline-block;
width: 64px;
height: 64px;
&:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${Rotate} 1.2s linear infinite;
  }
`;

export const Loader = ()=>{
    return(
        <LoaderRing></LoaderRing>
    )
}