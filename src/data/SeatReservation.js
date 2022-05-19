
import axios from 'axios';

export default function SeatReservation() {


  const dados = {
    ids: [1, 2, 3],
    name: "Fulano",
    cpf: "12345678900"
  }
  const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dados);

  promise.then(()=> {
    console.log('success')
  })

  return (<></>)
}