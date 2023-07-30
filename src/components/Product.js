import React from "react";
import { Item } from "./AddItems";
import { useState } from "react";
export function Product(props) {
    
    const handleClick=({target})=>{
        let id = target.id
        props.delete(id);
    }
    
    return(
        <tr key={props.key}>
            <td>{props.value}</td> 
            <td className="money">${props.price}</td>
            <td>{props.quantity}</td> 
            <td className="money">${props.price * props.quantity}</td>
            <td><input type="button" id={props.id} value="-" onClick={handleClick} /></td>
            
         </tr>
    )
}