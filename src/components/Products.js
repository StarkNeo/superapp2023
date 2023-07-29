import React from "react";
import { useState, useEffect } from "react";
import { Product } from "./Product";

export function Products(props) {
    
    
    //const itemsList= products.map((element, index)=>(<Product key={index} value={element.name} />))
    return (
        <>
           {
           props.items.map((item) => (
           <Product key={item.id} 
           id={item.id} 
           value={item.name} 
           price={item.price} 
           quantity={item.quantity} 
           delete={props.delete} />
           ))
           }

            
        </>

    )
}