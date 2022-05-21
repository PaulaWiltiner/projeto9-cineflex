import styled from 'styled-components';
import Header from '../../components/Header'
import Resume from '../../components/SuccessComponents/Resume'
import { Link } from "react-router-dom";

export default function SuccessPage({form,name,time ,date,listNameSeat }) {

  return(
    <>
      <Header />
      <Titulo>Pedido feito com sucesso!</Titulo>
      <Resume 
         form={form}  
         name={name} 
         time={time} 
         date={date}
         listNameSeat={listNameSeat} 
      />
      <DivButton>
        <Link to='/' ><Button>Voltar pra Home</Button></Link>
      </DivButton>
    </>
  )
} 

const Titulo = styled.h2`
  font-size: 24px;
  color: #293845;
  text-align:center;
  color: #247A6B;
  font-weight:bold;
  padding: 0px 100px;
  margin: 110px 0px 50px 0px;

`

const DivButton = styled.div`
  display:flex;
  justify-content:center;
  padding: 0px 26px;
`

const Button = styled.button`
  width: 225px;
  height: 43px;
  margin-top: 30px;

  color:#ffffff;
  font-size:18px;
  background: #E8833A;
  
  border: 1px solid #E8833A;
  border-radius: 3px;
`


