import styled from 'styled-components';
import Header from '../../components/Header'


export default function HomePage() {

  return(
    < > 
      <Header />
      <Titulo>Selecione o filme</Titulo>
      <DivFilmes>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
        <div>
          <img src='https://images-na.ssl-images-amazon.com/images/I/812egX6Xv5L.jpg' alt=''/>
        </div>
      </DivFilmes>
    </>
)
} 

const Titulo = styled.h2`
  font-size: 24px;
  color: #293845;
  text-align:center;
  margin: 120px 0px 40px 0px;

`

const DivFilmes = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  padding: 0px 26px;

  div {
    width:145px;
    height:209px;
    padding:3px;
    margin-bottom:14px;

    display:flex;
    justify-content:center;
    align-items:center;

    border: 1px solid #ffffff;
    background-color:#ffffff;
    border-radius: 3px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    img {
      width:129px;
      height:193px;
    }

  }

`


