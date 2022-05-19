import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SessionsList() {
  
	const [items, setItems] = useState([]);
  //https://mock-api.driven.com.br/api/v5/cineflex/movies/ID_DO_FILME/showtimes
	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes");

		promise.then(response => {
			setItems(response.data);
		});
	}, []);

  return (<></>)
}