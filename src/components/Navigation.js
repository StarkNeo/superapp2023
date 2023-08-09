import React from "react";
import { useState, useEffect } from "react";
import { Item } from "./AddItems";

export function Navigation(props) {
    const [display, setDisplay] = useState(false);

    const handleClick = () => {
            setDisplay(!display);
        
    }
    console.log(display);
    return (
        <>
        <div id="navigation">
            <input type="button" value="+" onClick={handleClick} />
            <input type="button" value="Guardar" onClick={props.save} />
            <input type="button" value="Borrar" onClick={props.delete} />
            <input type="button" value="Mi lista" onClick={props.load} />
          
        </div>
        {display?<Item addItem={props.addItem} />:""}
        </>
        

    )
}