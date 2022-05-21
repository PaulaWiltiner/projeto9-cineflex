import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Form from '../../components/SeatsComponents/Form'
import Seats from '../../components/SeatsComponents/Seats'
import SuccessPage from '../SuccessPage'
import { useState } from 'react';
import loading from '../../assets/loading.gif';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Submit({form,listSeat,setChangePage}){
  const data={
    ids:listSeat,
    name:form.name,
    cpf:form.cpf
  };
  const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", data);

  promise.then(()=> {
    setChangePage(false)
  })
}

function ComponentsSeats({form,setForm,listSeat,setChangePage}){

  return(
    <>

    <Form form={form} setForm={setForm}/>
    <Button onClick={()=>Submit({form,listSeat,setChangePage})}>Reservar assento(s)</Button>

    </>
  )
}


export default function SeatsPage() {

  const {idSession} = useParams();

  const [form, setForm] = useState({
    name: '',
    cpf: '',

  });

  const [load, setLoad] = useState(true);
  const [nameMovie,setNameMovie]=useState('');
  const [URL,setURLMovie]=useState('');
  const [schedule,setSchedule]=useState({day:'',schedule:''});
  const [date,setdate]=useState('');
  const [listSeat, setSeat] = useState([]);
  const [listNameSeat, setNameSeat] = useState([]);
  const [changePage, setChangePage] = useState(true);
   
 
  return(
    <> 
      {changePage ? 
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
                listSeat={listSeat}
                setSeat={setSeat}
                listNameSeat={listNameSeat}
                setNameSeat={setNameSeat}
                setdate={setdate}
              />
              
        
              {load ? 
                <Loading>
                  <img src={loading} alt=''/> 
                </Loading>
                : 
                <ComponentsSeats 
                  form={form} 
                  setForm={setForm} 
                  listSeat={listSeat}
                  setChangePage={setChangePage}
                />
              }

            </SeatsChoice>

            <Footer 
              name={nameMovie} 
              time={schedule} 
              posterURL={URL}
            />
          </>
            : 
            
            <SuccessPage 
              form={form}  
              name={nameMovie} 
              time={schedule} 
              date={date}
              listNameSeat={listNameSeat} 
            />
            
            }

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
  margin-bottom:140px;
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
