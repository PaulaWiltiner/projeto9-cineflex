import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SchedulingPage() {

  return(
    < > 
      <Header />
      <Titulo>Selecione o filme</Titulo>
      <DivSchedules>

        <Schedule>
          <p>Quinta-feira - 24/06/2021</p>
          <ButtonList>
            <Button>15:00</Button>
            <Button>19:00</Button>
          </ButtonList>
        </Schedule>

        <Schedule>
          <p>Quinta-feira - 24/06/2021</p>
          <ButtonList>
            <Button>15:00</Button>
            <Button>19:00</Button>
          </ButtonList>
        </Schedule>
        
      </DivSchedules>

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
const Schedule = styled.div`
  margin-bottom:25px;

  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:left;
`

const ButtonList = styled.div`
  display:flex;
  margin-top: 24px;
`


const Button = styled.button`
  width: 83px;
  height: 43px;
  margin-right: 10px;

  color:#ffffff;
  font-size:18px;
  background: #E8833A;
  
  border: 1px solid #E8833A;
  border-radius: 3px;
`

