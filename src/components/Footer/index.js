import styled from 'styled-components';


export default function FooterPage(props) {

  const {name,time,posterURL} = props;

  return(
    <DivFooter>
      <ImageFooter>
        <img src={posterURL} alt=''/>
      </ImageFooter>
      <TextFooter>
        <p>{name}</p>
        <p>{time.day} {time.schedule}</p>
      </TextFooter>
    </DivFooter>
  )

} 

const TextFooter = styled.div`
  display:flex;
  flex-direction:column;
`
const ImageFooter = styled.div`
  width:64px;
  height:89px;
  padding:8px;

  display:flex;
  justify-content:center;
  align-items:center;

  border: 1px solid #ffffff;
  background-color:#ffffff;
  border-radius: 3px;

  img {
    width:50px;
    height:74px;
  }


`

const DivFooter = styled.div`

  height: 110px;
  width:100%;
  padding: 14px 12px;
  border-top: 1px solid #9EADBA;

  display:flex;
  justify-content:left;
  align-items: center;

  background-color: #C3CFD9;
  box-shadow:  0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  position:fixed;
  bottom:0px;
  left:0px;

  p{
    color: #293845;
    font-size:24px;
    margin-left:14px;
  }


`;