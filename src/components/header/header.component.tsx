import React from 'react';
import styled from 'styled-components';
import stylevar from '../../constants/styleVariables';

const HeaderText = styled.header`
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: ${stylevar.yellow};
  font-size: 3rem;
  text-align: center;
`
const Header: React.FC = () => {
  return (
   <HeaderText>Don't F*** with Chuck </HeaderText>
  );
}

export default Header;
