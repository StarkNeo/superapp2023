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
        <fieldset>
        <h5>List Actions</h5>
        <input type="button" value="Save List" onClick={props.save} />
        <input type="button" value="Remove List" onClick={props.delete} />
        <input type="button" value="My list" onClick={props.load} />
        </fieldset>
        </div>
            
        
        </>
    )
}