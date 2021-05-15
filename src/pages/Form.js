import React from "react"

import {useState} from "react"

function handleSubmit(e){
    e.preventDefault();
    alert("hii");
}
  
  
function Input(props){
    const [name,setName]=useState("")
    const val=props.place;
    function handleChange(e){
        setName(e.target.value)
    }
    return (
        <form>
            <input type="text" value={name} required onChange={handleChange}></input>
            <button onClick={handleSubmit}>click ME</button>
        </form>
    )
}

export default Input; 