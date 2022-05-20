import styled from 'styled-components';

export default function Header() {

  return(
    <DivHeader>
      <h1>CINEFLEX</h1>
    </DivHeader>
  )
} 

const DivHeader = styled.div`

  height: 70px;
  width:100%;

  display:flex;
  justify-content:center;
  align-items: center;

  background-color: #C3CFD9;
  box-shadow:  0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  position:fixed;
  top:0px;
  left:0px;

  h1{
    color: #E8833A;
    font-size:34px;
  }

`;