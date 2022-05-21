import styled from 'styled-components';

export default function Resume({form,name,time ,date,listNameSeat }) {

  function formataCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return(
    <>
      <TextSuccess>
          <h2>Filme e sessão</h2>
          <div>
            <p>{name}</p>
            <p>{date} {time.schedule}</p>
          </div>
        </TextSuccess>
        <TextSuccess>
          <h2>Ingressos</h2>
          <div>
            {listNameSeat.map((elem) => 
              <p>Assento {elem}</p>
            )}
          </div>
        </TextSuccess>
        <TextSuccess>
          <h2>Comprador</h2>
          <div>
            <p>Nome: {form.name}</p>
            <p>CPF: {formataCPF(form.cpf)}</p>
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