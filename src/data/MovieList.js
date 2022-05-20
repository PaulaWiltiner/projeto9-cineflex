import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function MovieList(props) {
  
	const [items, setItems] = useState([]);
	
	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(response => {
			setItems(response.data);
			
		});
	}, []);

	if(items.length!==0){
		props.statusLoad(false)
	}

	return (
		<>
			{ items.length!==0 ?
				items.map( (movie,index) => 
				<Link key={index} to={`/schedulingpage/${movie.id}`}>
				<div >
					<img src={movie.posterURL} alt=''/>
				</div>
				</Link>)
				: ""
				}
		</>
	)
}