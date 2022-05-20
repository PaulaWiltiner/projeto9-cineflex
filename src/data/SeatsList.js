import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SeatsList() {
  
	const [items, setItems] = useState([]);
  //https://mock-api.driven.com.br/api/v5/cineflex/showtimes/ID_DA_SESSAO/seats

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/2/seats");

		promise.then(response => {
			setItems(response.data);
		});
	}, []);



 

  return (<></>)
}