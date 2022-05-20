import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";
import React from 'react';

export default function SeatsPage() {

  const available= {color:'#C3CFD9', border:'#808F9D'};
  const unavailable= {color:'#FBE192', border:'#F7C52B'};
  const select = {color:'#8DD7CF', border:'#1AAE9E'};

  function handleForm (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }) 
    console.log(form)
  }

  const [form, setForm] = React.useState({
    name: '',
    cpf: '',

  });
  
  return(
    <> 
      <Header />
      <Titulo>Selecione o(s) assento(s)</Titulo>
      <SeatsChoice>
        <SeatPanel>
          <Seats>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={select.color} border={select.border} >1</ButtonSeat>
            <ButtonSeat color={select.color} border={select.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>

            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={select.color} border={select.border} >1</ButtonSeat>
            <ButtonSeat color={select.color} border={select.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={unavailable.color} border={unavailable.border} >1</ButtonSeat>
            <ButtonSeat color={available.color} border={available.border} >1</ButtonSeat>
          </Seats>
          <SeatSubtitle>
            <div>
              <ButtonSeat color={select.color} border={select.border} ></ButtonSeat>
              <p>Selecionado</p>
            </div>
            <div>
              <ButtonSeat color={available.color} border={available.border} ></ButtonSeat>
              <p>Disponível</p>
            </div>
            <div>
              <ButtonSeat color={unavailable.color} border={unavailable.border} ></ButtonSeat>
              <p>Indisponível</p>
            </div>
          </SeatSubtitle>
        </SeatPanel>
        <Form>
          <DivInput>
            <p>Nome do comprador:</p>
            <input type="text" placeholder='Digite o seu nome...' name="description" onChange={handleForm} value={form.description}/>
          </DivInput>
          <DivInput>
            <p>CPF do comprador:</p>
            <input placeholder='Digite o seu CPF...' type="text" name="name" onChange={handleForm} value={form.name}/>
          </DivInput>
        </Form>
        <Link to='/successpage' ><Button>Reservar assento(s)</Button></Link>

      </SeatsChoice>

      <Footer/>
    </>
)
} 

const Titulo = styled.h2`
  font-size: 24px;
  color: #293845;
  text-align:center;
  margin: 120px 0px 40px 0px;
`
const SeatPanel = styled.div`
  display:flex;
  flex-direction:column;
`

const Seats = styled.div`
  display:flex;
  flex-wrap:wrap;

`
const ButtonSeat = styled.button`
  width: 24px;
  height: 24px;
  margin-top: 14px;
  margin-left:8px;
  font-size:12px;
  color: #000000;

  background-color: ${props => props.color};
  border: 1px solid ${props => props.border};;
  border-radius: 12px;
`

const SeatSubtitle = styled.div`
  margin-top:2px;
  display:flex;
  justify-content:space-between;
  padding:0px 42px;

  p {
    margin-top:10px;
    color:#4E5A65;
    font-size:13px;
  }

  div{
    display:flex;
    flex-direction:column;
    align-items:center;
  }

`
const SeatsChoice = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 0px 28px 0px 22px;
  margin-top:-2em;
  margin-bottom:140px;
`

const Form = styled.div`
  margin: 30px 0px;
  width:100%;
`

const DivInput = styled.div`
  margin-top:18px;
  display:flex;
  flex-direction:column;
  color:#293845;
  font-size: 17px;
  width:100%;

  input {
    height: 50px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding-left:20px;
  }

  input::-webkit-input-placeholder {
    color:#AFAFAF;
    font-style: italic;
    font-size: 17px;
  }
`

const Button = styled.button`
  width: 225px;
  height: 43px;

  color:#ffffff;
  font-size:18px;
  background: #E8833A;
  
  border: 1px solid #E8833A;
  border-radius: 3px;
`
