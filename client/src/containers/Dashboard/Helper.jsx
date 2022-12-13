import React from "react";
import { useEffect } from "react";

function Helper(props) {
    useEffect(()=>{
        props.handleAuth()
        props.getUsers()
      },[])
    return (
    null
    )
}

export default Helper;
