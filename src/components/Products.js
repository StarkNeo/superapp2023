import React from "react";
import { useState, useEffect } from "react";
import { Product } from "./Product";

export function Products(props) {
    
    
    return (
        <>
        
        {
           props.items.map((item) => (
           <Product key={item.id} 
           id={item.id}
           value={item.name} 
           price={item.price} 
           quantity={item.quantity}
           checkbox ={item.checked} 
           delete={props.delete}
           update={props.update}
           check={props.check}
           
           />
           ))
           }

           
            
        </>

    )
}