import styled from 'styled-components';
import SessionsList from '../../data/SessionsList'

export default function Time(props) {

  const {idApiMovie:idMovie, statusLoad:setLoad, setNome:setNomeMovie, setImg:setURLMovie } = props;

  return(
    <DivSchedules>

      <SessionsList idApiMovie={idMovie} statusLoad={setLoad} setNome={setNomeMovie} setImg={setURLMovie} />
        
    </DivSchedules>
  )
} 


const DivSchedules = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  padding: 0px 26px;
  margin-bottom:140px;

    p {
      font-size: 20px;
      color: #293845;
    }

  
`
