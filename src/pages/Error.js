import React from "react"
import { useLocation } from "react-router";

function Error(){
    let location=useLocation();
    // console.log(location);
    return(
        <h1>{location.pathname} Page does not exist </h1>
    )
}
export default Error;