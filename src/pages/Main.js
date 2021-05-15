import React from "react"

function Main(props){
  return(
    <main>
      <h2>{props.language}</h2>
      {/* note if we need to style an element then in jsx we use {{}} */}
      {/* without using props its not recommended*/}
      {/* <ul style={{textAlign:"left"}}>
        {things.map((items,i)=> <li key={i}>{items}</li>)}
      </ul> */}
      {/* using an object  and using props*/}
      {/* Now we will talk about image adding in react */}
      <ul>
        {props.items.map((items)=>(<li key={items.id}>{items.title}</li>))}
      </ul>
      <img src="https://github.com/Jittojoyes98.png" alt="not available"/>
      {/* if used import then use that name used in the importing time */}
    </main>

  );
}

export default Main;

