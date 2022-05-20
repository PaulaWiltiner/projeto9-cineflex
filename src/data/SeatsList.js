import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function ButtonItem({seat,index}){

	const available= {color:'#C3CFD9', border:'#808F9D'};
  const unavailable= {color:'#FBE192', border:'#F7C52B'};
	if(seat.isAvailable){
		return (<ButtonSeat id={seat.id} key={index} color={available.color} border={available.border} >{seat.name}</ButtonSeat>)
	}else{
		return (<ButtonSeat id={seat.id} key={index} color={unavailable.color} border={unavailable.border} >{seat.name}</ButtonSeat>)}
}

export default function SeatsList(props) {

  
	const {idApiSession:idSession, statusLoad:setLoad, setNome:setNomeMovie, setImg:setURLMovie , setDay:setSchedule} = props;
	const [items, setItems] = useState([]);
	
	useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);

		promise.then(response => {
			setItems(response.data);
			
		});
	}, [idSession]);

	if(items.length!==0 ){
		setLoad(false);
		setNomeMovie(items.movie.title);
		setURLMovie(items.movie.posterURL);
		const listaTime= {day:items.day.weekday,schedule:items.name};
		setSchedule(listaTime);
	}


	return (
		<>
			{ items.length!==0 ?

				items.seats.map( (seat,index) => 

				<ButtonItem key={index} seat={seat} index={index} />)

				: ""

				}
		</>
	)
}

const ButtonSeat = styled.button`
  width: 24px;
  height: 24px;
  margin-top: 14px;
  margin-left:8px;
  font-size:10px;
	text-align:center;
  color: #000000;

  background-color: ${props => props.color};
  border: 1px solid ${props => props.border};;
  border-radius: 12px;
`
