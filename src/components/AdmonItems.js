import React from "react";
import { useState, useEffect } from "react";
import { Item } from "./AddItems";
import { Category } from "./Category";
import { Summarize } from "./Summary";

export function AdminItems() {
    const [items, setItems] = useState([]);
    
    const addItem = (item) => {
        setItems(() => [item, ...items])
    };

    const deleteItem = (id) => {
        let newArray = items.filter(element => element.id != id);
        setItems(newArray);
    }
    console.log(items)
    return (
        <>
            <h1 className="title">SUPERAPP 2023</h1>
            <div id="headApp">
            <Item addItem={addItem} />
            <Summarize values={items} />
            
            </div>
            
            <Category items={items} delete={deleteItem} />
            
            

        </>

    )
}