import styled from 'styled-components';
import Header from '../../components/Header'
import Filmes from '../../components/HomeComponents/Filmes'
import loading from '../../assets/loading.gif'
import {useState} from 'react';

export default function HomePage() {

  const [load, setLoad] = useState(true);

  return(
    < > 
      <Header />
      <Titulo>Selecione o filme</Titulo>
      <Filmes statusLoad={setLoad}/>
      <Loading>
      {load ? <img src={loading} alt=''/> : ''}
      </Loading>
    </>
)
} 

const Titulo = styled.h2`
  font-size: 24px;
  color: #293845;
  text-align:center;
  margin: 120px 0px 40px 0px;

`
const Loading = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 130px;

  img {
    width:120px;
  }

`

