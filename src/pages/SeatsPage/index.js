import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Form from '../../components/SeatsComponents/Form'
import Seats from '../../components/SeatsComponents/Seats'
import { Link } from "react-router-dom";
import { useState } from 'react';
import loading from '../../assets/loading.gif';
import { useParams } from 'react-router-dom';

function ComponentsSeats(){

  return(
    <>

    <Form />
    <Link to='/successpage' >
      <Button>Reservar assento(s)</Button>
    </Link>

    </>
  )
}

export default function SeatsPage() {

  const {idSession} = useParams();

  const [load, setLoad] = useState(true);
  const [nameMovie,setNameMovie]=useState('');
  const [URL,setURLMovie]=useState('');
  const [schedule,setSchedule]=useState({day:'',schedule:''});
   
  console.log(nameMovie,URL)

  return(
    <> 
      <Header />
      <Titulo>Selecione o(s) assento(s)</Titulo>
      
      <SeatsChoice>
        
        <Seats 
          idApiSession={idSession} 
          statusLoad={setLoad} 
          setName={setNameMovie} 
          setImg={setURLMovie} 
          setDay={setSchedule} 
          loadStatus={load}
        />
        
  
        {load ? 
          <Loading>
            <img src={loading} alt=''/> 
          </Loading>
          : 
          <ComponentsSeats />
        }

      </SeatsChoice>

      <Footer 
        name={nameMovie} 
        time={schedule} 
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

const SeatsChoice = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 0px 28px 0px 22px;
  margin-top:-2em;
  margin-bottom:40px;
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

const Loading = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 130px;

  img {
    width:120px;
  }

`
