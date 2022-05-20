import styled from 'styled-components';
import React from 'react';

export default function Form() {

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
    <DivForm>
      <DivInput>
        <p>Nome do comprador:</p>
        <input type="text" placeholder='Digite o seu nome...' name="description" onChange={handleForm} value={form.description}/>
      </DivInput>
      <DivInput>
        <p>CPF do comprador:</p>
        <input placeholder='Digite o seu CPF...' type="text" name="name" onChange={handleForm} value={form.name}/>
      </DivInput>
    </DivForm>
  )
} 

const DivForm = styled.div`
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