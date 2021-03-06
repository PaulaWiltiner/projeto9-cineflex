import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function SessionsList(props) {


	const {
		idApiMovie:idMovie, 
		statusLoad:setLoad, 
		setName:setNameMovie,
		setImg:setURLMovie 
	} = props;
	
	const [items, setItems] = useState([]);

	function listState(items){
		setItems(items);
		setLoad(false);
		setNameMovie(items.title);
		setURLMovie(items.posterURL);
	}
	
	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);

		promise.then(response => {
			listState(response.data);
			
		});
	}, []);



	return (
		<>
			{ items.length!==0 ?
				items.days.map( (session,index) => 
					<Schedule id={session.id} key={index}>

						<p>{session.weekday} - {session.date}</p>

						<ButtonList>
						{session.showtimes.map( (time) => 
							<Link to={`/seatspage/${time.id}`} >
								<Button >{time.name}</Button>
							</Link>)
						}
						</ButtonList>

					</Schedule>)
				: ""
				}
		</>
	)
}

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


