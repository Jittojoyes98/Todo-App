{/* <Link to="/fetch"> 
        link to go
      </Link>
      <Switch>
        <Route exact path="/">
        </Route>
        {/* <Input place="kizhakkambalam"/> */}
        {/* <Route exact path="/">
          <Header name="Big Data"/>
          <Main language="python" items={itemObjects}/>
        </Route> */}
        {/* now adding a list in react to main */}
        {/* <Route exact path="/footer">
          <Footer type={new Date().getFullYear()}/>
        </Route> */}
          
        {/* This is a jsx comment , Also note the js value */}
        {/* <Route exact path="/authority">
          <Authourise val={false} name="jitto"/>
        </Route> */}

        {/* <State/>
        <br/> */}
        {/* <UseRefExplanation/> */}
        {/* <UseReducerExample/> */}
        {/* <Route exact path="/fetch">
          <FetchAPI user="Jittojoyes98"/>
        </Route>
        
        <Route exact path="/btn">
          <State/>
        </Route>
        <Route exact path="/input">
          <Input/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch> */}
      {/* <h1>Hii Here</h1> */}
      // <div>
    //   <Column/>
    // </div>
    // now check that this is always in a div in the developer tools
    // now to make it independent of a div
    // note the closing

    // function FetchAPI({user}){
    //     const [data,setData]=useState(null);
    //     const [load,setLoad]=useState(false);
    //     const [error,setError]=useState(null);
    //     useEffect(()=>{
    //         if(!user){
    //           return;
    //         }
    //         setLoad(true);
    //         fetch('https://api.github.com/users/Jittojoyes98')
    //           .then((response)=>response.json())
    //           .then((data)=>setData(data))
    //           .then(()=>setLoad(false))
    //           .catch(setError);
    //     },[])
      
    //     if(error){
    //       return <h1>{JSON.stringify(error,null,2)}</h1>
    //     }
      
    //     if(data){
    //       return(
    //         <>
    //           <h1>{data.login}</h1>
    //           <img src={data.avatar_url}></img>
    //           {/* <h1>{JSON.stringify(data)}</h1> */}
    //         </>
    //       );
    //     }
      
    //     if(load){
    //       // console.log("yes");
    //       return <h1>Loading...</h1>
    //     }
      
    //     return null;
        
    //   }
    // function UseReducerExample(){
//   const [val,toggle]=useReducer((val)=>(!val),false);
//   return(
//     <>
//       <input type="checkbox" onClick={toggle}></input>
//       <p>{val?"checked":"not checked"}</p>
//     </>
//   );
// }



// const {name :personName}={name:"abc"};

// console.log(personName);

// import logo from ".IMG/logo192.png"
// if there is an  image present then we can just import them



// // now we can use props using the react propetry


// check documentation for react fragments

// we can use javascript as well



// function Column(){
//   return(
//     <h1>hiiii</h1>
//     // using fragments instead
//     // <>
//     //   <td>hii</td>
//     //   <td>hello</td>
//     // </>

//   );
// }

// just create a button and just render it 




// const things=["book","pen","pencil","rubber"];

// const itemObjects=things.map((items,i)=>({id:i,title:items}))








// function UseRefExplanation(){
//   const val=useRef(null);
//   function handleClick(){
//     console.log(val.current);// note this value
//     val.current.focus();
//   }
//   return(
//     <>  
//       <input ref={val}/>
//       <button onClick={handleClick}>Understand useRef</button>
//     </>

//   );
// }