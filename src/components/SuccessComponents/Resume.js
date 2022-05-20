import styled from 'styled-components';

export default function Resume() {

  return(
    <>
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
      </>
  )
} 

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