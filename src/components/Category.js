import React from "react";
import { useState, useEffect } from "react";
import { Products } from "./Products";

export function Category(props) {
    const [category, setCategory] = useState([]);
    const categories = [];

    useEffect(() => {
        props.items.forEach(element => {
            let found = categories.includes(element.category);
            if (!found) {
                categories.push(element.category);

            }

        });
        setCategory(categories)

    }, [props.items]);
    const getItemsByCategory =(category)=>{
        let total = 0;
        props.items.map((e)=>{
            if (e.category === category) {
                total+=(e.price * e.quantity);
            }
            
        })
        return total;
    }
    return (
        <div>
            {category.map((cat, index) => (

                <>
                    
                    
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={3}><h2 key={index}>{cat}</h2></th>
                                <th colSpan={2} className="money">${getItemsByCategory(cat)}</th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th colSpan={2}>Subtotal</th>
                            </tr>
                        </thead>
                        
                        {props.items.map((e, index) => {
                            let arrayItems = [];
                            if (e.category === cat) {
                                arrayItems.push(e);
                                
                            }
                            
                            return <Products key={index} items={arrayItems} delete={props.delete} />
                        })}
                        
                        
                    </table>




                </>

            ))}
        </div>



    )
}