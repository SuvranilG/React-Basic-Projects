import React, { useState } from 'react'
import "./App.css"
import Button from 'react-bootstrap/Button';
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (event,key)=>{
    // let newListTodo = [...listTodo];
    // newListTodo.splice(key,1);
    let delkey=Number(event.target.dataset.key);
    let newListTodo =listTodo.filter((element,id)=>{
      console.log(delkey,id);
      return id!==delkey;
    })

    setListTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>

        <div id="list-container"  onClick={e=>{
            deleteListItem(e);
        }}>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist  key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}

        </div>
        
      {console.log(listTodo)}
      

      {(listTodo.length)>0?
      <div id="center-div"><Button id="delete-button" onClick={()=>{
        setListTodo([]);
      }}>Delete All</Button></div>:""}
      </div>
      
      
    </div>
  )
}

export default App