import React, {useState} from 'react';
import TodoList from './ListData.js'
import './App.css';

function ToDo_List() {
  const [item, setItem] = useState("");
  const [itemName, setItemName] = useState([]);
  const Get_item = (event) =>
  {
    setItem(event.target.value);
  }
  const Add_item = () =>
  {
    setItemName((olditem) =>
      {
        return [...olditem, item];
      });
    setItem('');

  }
  const Delete_item =(id) =>
  {
    console.log("deleted");
    setItemName((olditem) =>
    {
      return olditem.filter((arryelmt, index) =>
      {
        return index !== id;
      })
    })

  }
  return (
    <>
    <div className = "wraper">
    <div className = "main">

   <h1 className="heading">todo list</h1>
   <div  className = "input">
   <input type="text" placeholder= "Add an Item" onChange = {Get_item} value={item}/>
   <button className = "add_button" onClick = {Add_item}>+</button>
   </div>
  
   <ul>
   
   {itemName.map((arrydata, index) =>
    {
      return <TodoList key = {index} 
      id = {index}
       text={arrydata}
       onSelect = {Delete_item}/>
    })}
   </ul>
   
   </div>
   </div>
   </>
  );
}

export default ToDo_List;
