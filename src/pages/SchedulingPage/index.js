import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Time from '../../components/SchedulingComponents/Time'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import loading from '../../assets/loading.gif'

export default function SchedulingPage() {

  const { idMovie} = useParams();

  const [nameMovie,setNameMovie]=useState('');
  const [URL,setURLMovie]=useState('');
  const [load, setLoad] = useState(true);

  return(
    < > 
      <Header />

      <Titulo>Selecione o filme</Titulo>

      <Time 
        idApiMovie={idMovie} 
        statusLoad={setLoad}
        setName={setNameMovie} 
        setImg={setURLMovie} 
      />

      <Loading>
        {load ? <img src={loading} alt=''/> : ''}
      </Loading>

      <Footer 
        name={nameMovie} 
        time={{day:'',schedule:''}} 
        posterURL={URL} 
      />
      

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