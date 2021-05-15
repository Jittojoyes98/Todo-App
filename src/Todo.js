import React from "react"
import Todoform from "./TodoForm"

export default function Todo({todoList,remove}){
    return(
        <div className="todo-wrapper">{
            todoList.map((item,index)=>
            <Todos item={item} index={index} remove={remove}/>
            )  
        }  
        </div>
    )
}

function Todos({item,index,remove}){
    return(
    <div className="todo-container">
        <p style={{textDecoration:(item.isCompleted)?"line-through":""}}>
            <input type="checkbox" onChange={()=>remove(index)}/>{''}
            {item.text}
        </p>
    </div>
    )
}