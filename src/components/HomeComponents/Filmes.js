import styled from 'styled-components';
import MovieList from '../../data/MovieList'



export default function Filmes(props) {


  return(

    <DivFilmes>
      <MovieList statusLoad={props.statusLoad} />
    </DivFilmes>
  )
} 


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

