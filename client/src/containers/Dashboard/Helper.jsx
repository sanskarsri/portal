import React from "react";
import { useEffect } from "react";

function Helper(props) {
    useEffect(()=>{
        props.getUsers()
        props.handleAuth()
      },[])
    return (
    null
    )
}

export default Helper;
