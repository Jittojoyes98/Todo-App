import './App.css';
import React,{useState} from "react"
import Todoform from "./TodoForm"
import Todo from './Todo';
// import State from "./pages/State"
// import Footer from "./pages/Footer"
// import Header from "./pages/Header"
// import Main from "./pages/Main"
// import Error from "./pages/Error"

// import Input from "./pages/Form.js"
// import {Link, Route,Switch} from "react-router-dom"

// import Authourise from "./pages/Authorise"


function App() {
  const [ todoList, SetTodoList ] = useState([
    {
      id: 1,
      isCompleted: false,
      text: "homework"
    },
    {
      id: 2,
      isCompleted: false,
      text: "Assignment"
    }
  ]); 
  const addTodo = (todo) => {
    SetTodoList([...todoList, { text: todo}]);
    // console.log(todoList[todoList.length-1].id);
  };
  const remove=(index)=>{
    const newTodo=[...todoList];
    newTodo[index].isCompleted=(!newTodo[index].isCompleted);
    SetTodoList(newTodo)
  }
  return (
    <div className="App">
      <div className="main-wrapper">
        <Todoform addTodo={addTodo}/>
        <Todo todoList={todoList} remove={remove} />
      </div>
    </div>
    
  );
}

//  now this is great


export default App;
