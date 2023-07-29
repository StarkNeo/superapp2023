import React from "react";
import { useState, useEffect } from "react";

export function Summarize(props) {
    const [total, setTotal]=useState(0)
    useEffect(()=>{
        let subtotal=0
        props.values.map((element)=>{
            subtotal += element.price * element.quantity;
            
        })
        setTotal(subtotal);
    },[props.values])
    
    return(
        <>
        <div id="summarize">
        <h2>SUMMARY</h2>
        <label>TOTAL $: </label> 
        <input value={total} disabled/>
        </div>
            
        
        </>
    )
}