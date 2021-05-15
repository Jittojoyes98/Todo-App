import React from "react"

// import {useState,useEffect} from "react"

function Secret(){
  return <h1>Welcome</h1>
}


function Available(){
    return <h1>log in please</h1>
}

function Authourise({val,name}){
  console.log(name)
  return (
    <>
      {val ? <Secret/> : <Available/>}
    </> 
  );
}

export default Authourise;