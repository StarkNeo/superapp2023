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

    const saveList =()=>{
        
        localStorage.setItem("list",JSON.stringify(items));
    }
    const deleteList =()=>{
        localStorage.clear("list");
        setItems([]);
    }

    const loadList =()=>{
        return localStorage.list? setItems(JSON.parse(localStorage.getItem('list'))):''
       
    }

    

    return (
        <>

            <div id="headApp">
                <h1 className="app-title">SUPERAPP 2023</h1>
                <Item addItem={addItem} />
                <Summarize values={items} save={saveList} delete={deleteList} load={loadList}/>

            </div>
            <div id="body">
                <Category items={items} delete={deleteItem} />

            </div>



        </>

    )
}