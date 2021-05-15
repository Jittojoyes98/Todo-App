import React from "react"

import {useState,useEffect} from "react"

function State(){
    const [state,setState]=useState("coding");
    const [thing,setThing]=useState("hello");
    // console.log(setState);
    useEffect(()=>{
      console.log(state);
    },[state]);
    // dependency array works when the dependent value is changed in the browser
    // if dependency array is not used then it will work for any change in the browser
    // not just change with the given value.
  
    // useEffect is rendered each time we do something on any element on the browser.
  
    // useEffect(()=>{
    //   console.log(thing);// actually thing is not changed or its value is permenant
    //                     // its always displayed on the console for the first time rendering.
    // },[thing])// if thing is not changing then it will be displayed once only.
    // if no dependency then it will be consoled each time.
    
    // useEffect(()=>{
    //   console.log(thing);
    // })
    // it only works for the <State/> elements change
  
  
    return(
      <>
        <h1>I like {state}</h1>
        <button onClick={()=>setState("coffee")}>coffee</button>
        <button onClick={()=>setState("chaya")}>chaya</button>
        <button onClick={()=>setState("chicken")}>chicken</button>
      </>
    )
  }

  export default State;