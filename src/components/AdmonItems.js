import React from "react";
import { useState, useEffect } from "react";
import { Item } from "./AddItems";
import { Category } from "./Category";
import { Summarize } from "./Summary";
import { Navigation } from "./Navigation";

export function AdminItems() {
    const [items, setItems] = useState([]);


    const addItem = (item) => {
        setItems(() => [item, ...items])

    };

    const deleteItem = (id) => {
        let newArray = items.filter(element => element.id != id);
        setItems(newArray);
    }

    const checkItem =(id)=>{
        let newArray = items.map((element)=>element);
        let indice = newArray.findIndex((element)=>element.id === id)
        let elementFound = newArray[indice] ;
        elementFound.checked = !elementFound.checked;
        newArray.splice(indice,1,elementFound)
        setItems(newArray);
    }

    const updateItem =(id,newName,newPrice,newQuantity)=>{
        let newArray = items.map((element)=>element);
        let indice = newArray.findIndex((element)=>element.id === id)
        let elementFound = newArray[indice] ;
        elementFound.name = newName;
        elementFound.price = newPrice;
        elementFound.quantity = newQuantity;
        newArray.splice(indice,1,elementFound)
        setItems(newArray)
        saveList();
       
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

    console.log(items)

    return (
        <>
            <h1 className="app-title">SUPERAPP 2023</h1>
                
            <div id="headApp">
                <Navigation addItem={addItem} save={saveList} delete={deleteList} load={loadList}  />
                {/*<Item addItem={addItem} />*/}
                <Summarize values={items} />

            </div>
            <div id="body">
                <Category items={items} delete={deleteItem} update={updateItem} check={checkItem} />

            </div>



        </>

    )
}