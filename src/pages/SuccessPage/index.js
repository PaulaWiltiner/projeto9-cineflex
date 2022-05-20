import styled from 'styled-components';
import Header from '../../components/Header'
import { Link } from "react-router-dom";

export default function SuccessPage() {

  return(
    <>
      <Header />
      <Titulo>Pedido feito com sucesso!</Titulo>
      <TextSuccess>
        <h2>Filme e sessão</h2>
        <div>
          <p>Enola Homes</p>
          <p>24/06/2021 15:00</p>
        </div>
      </TextSuccess>
      <TextSuccess>
        <h2>Ingressos</h2>
        <div>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
      </TextSuccess>
      <TextSuccess>
        <h2>Comprador</h2>
        <div>
          <p>Nome: João da Silva Sauro</p>
          <p>CPF: 123.456.789-10</p>
        </div>
      </TextSuccess>
      <DivButton>
        <Link to='/homepage' ><Button>Voltar pra Home</Button></Link>
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

const TextSuccess = styled.div`
  display:flex;
  justify-content:left;
  flex-direction:column;
  padding: 0px 26px;
  color:#293845;
  margin-bottom:30px;

  h2{
    font-weight:bold;
    font-size:24px;
    margin-bottom:12px;
  }

  p{
    font-size:22px;
    margin-bottom:4px;
  }
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


