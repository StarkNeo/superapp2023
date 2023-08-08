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
    const getItemsByCategory = (category) => {
        let total = 0;
        props.items.map((e) => {
            if (e.category === category) {
                if (e.checked === true) {
                    total += (e.price * e.quantity);
                }

            }

        })
        return total;
    }
    return (
        <div className="category">
            {category.map((cat, index) => (

                <>
                    <table className="body-category">
                        <thead>
                            <tr className="head-category">
                                <th colSpan={3}><h2 key={index}>{cat}</h2></th>
                                <th colSpan={2} className="money">${getItemsByCategory(cat)}</th>
                            </tr>
                            <tr className="head-names">
                                <th>Actions</th>
                                <th>Nombre</th>
                                <th> Precio</th>
                                <th>Cantidad</th>
                                <th>subtotal</th>
                            </tr>
                        </thead>

                        <tbody>


                            {props.items.map((e, index) => {
                                let arrayItems = [];
                                if (e.category === cat) {
                                    arrayItems.push(e);

                                }

                                return <Products id={index} items={arrayItems} delete={props.delete} update={props.update} check={props.check} />
                            })}

                        </tbody>
                    </table>




                </>

            ))}
        </div>



    )
}