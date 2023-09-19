import React from 'react';
import ToDo_List from './App.js'
import './index.css'
import { FaTimesCircle } from "react-icons/fa";



const TodoList = (props) =>
{

	return (
		<>
		 <div className = "list">

		<h3 onClick ={ () =>
			{
				props.onSelect(props.id)
			}} 
		><FaTimesCircle/></h3>
		<li>{props.text}
		</li>
		</div>
		</>);
};

export default TodoList;