import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieList() {
  
	const [items, setItems] = useState([]);

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(response => {
			setItems(response.data);
		});
	}, []);



  return (<></>)
}