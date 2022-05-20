
import styled from 'styled-components';
import SeatsList from '../../data/SeatsList';

export default function Seats(props) {

  const available= {color:'#C3CFD9', border:'#808F9D'};
  const unavailable= {color:'#FBE192', border:'#F7C52B'};
  const select = {color:'#8DD7CF', border:'#1AAE9E'};

  const {idApiSession:idSession, statusLoad:setLoad, setNome:setNomeMovie, setImg:setURLMovie , setDay:setSchedule, loadStatus:load} = props;

  return(
    <SeatPanel>
      <SeatsOption>
        <SeatsList idApiSession={idSession} statusLoad={setLoad} setNome={setNomeMovie} setImg={setURLMovie} setDay={setSchedule}  />
      </SeatsOption>

      {load ? '' :
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
      }
    </SeatPanel>
  )
} 

const SeatPanel = styled.div`
  display:flex;
  flex-direction:column;
`

const SeatsOption = styled.div`
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