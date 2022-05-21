import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import React from 'react';



export default function SeatsList(props) {

	const select = {color:'#8DD7CF', border:'#1AAE9E'};
	const available= {color:'#C3CFD9', border:'#808F9D'};
  const unavailable= {color:'#FBE192', border:'#F7C52B'};

	const { 
		idApiSession:idSession, 
		statusLoad:setLoad, 
		setName:setNameMovie, 
		setImg:setURLMovie , 
		setDay:setSchedule,
		listSeat,
		setSeat,
		listNameSeat,
		setNameSeat,
		setdate
	} = props;


	function handleButton (elem,status,name) {
		if(status){
			const listCont=[...listSeat]
			const listName=[...listNameSeat]
			let cont=0;
			if(listCont.length===0){
				setSeat([
					...listSeat,
					elem
				]) 
				setNameSeat([
					...listNameSeat,
					name
				]) 
			}
			for(let i=0;i<=listCont.length-1;i++){
				
				if(listCont[i]===elem){
					listCont.splice(i, 1);
					listName.splice(i, 1);
					setSeat([
							...listCont
						]) 
					setNameSeat([
						...listName
					]) 
					i=listCont.length+1;
					cont=1;
					}
				if(i===listCont.length-1 && cont===0){
					setSeat([
						...listCont,
						elem
					]) 
					setNameSeat([
						...listNameSeat,
						name
					]) 
				}
			}
		}                
	}


	
	function listState(items){
		setItems(items);
		setLoad(false);
		setNameMovie(items.movie.title);
		setURLMovie(items.movie.posterURL);
		const listTime= {day:items.day.weekday,schedule:items.name};
		setSchedule(listTime);
		setdate(items.day.date)
	}

	

	const [items, setItems] = useState([]);

	useEffect(() => {

		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);

		promise.then(response => {
			listState(response.data)
			
		});
		
	 }, []);




	return (
		<>
			{ items.length!==0 ?

				items.seats.map( (seat,index) => 

					{
						let {color,border} = select;
						if(seat.isAvailable && listSeat.indexOf(seat.id)===-1){
							color = available.color;
							border = available.border;
						}
						if(seat.isAvailable===false){
							color = unavailable.color;
							border = unavailable.border;
						}

						return(
							
							<ButtonSeat 
								id={seat.id}
								key={index} 
								color={color} 
								border={border} 
								status={seat.isAvailable}
								onClick={()=>handleButton(seat.id,seat.isAvailable,seat.name)} 
								>
									{seat.name}
							</ButtonSeat>

						
							)
					
					}
				
				)
				

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
	padding:1px;
  color: #000000;

  background-color: ${props => props.color};
  border: 1px solid ${props => props.border};;
  border-radius: 12px;
`
