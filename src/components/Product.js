import React from "react";
import { Item } from "./AddItems";
import { useState } from "react";
import { toBeChecked } from "@testing-library/jest-dom/matchers";
export function Product(props) {
    const [name, setName] = useState(props.value);
    const [price, setPrice] = useState(props.price);
    const [quantity, setQuantity] = useState(props.quantity);
    const [disabled, setDisabled] = useState(true)

    const handleClick = ({ target }) => {
        let id = target.id
        props.delete(id);
    }

    const handleCheck = ({ target }) => {
        let id = Number(target.id);
        props.check(id);

    }

    let openBtnEdit = false;

    const handleChange = ({ target }) => {
        setDisabled(false)
        switch (target.name) {
            case 'value':
                setName(target.value);

                break;
            case 'price':
                setPrice(target.value);
                break;
            case 'quantity':
                setQuantity(target.value)
                break;

            default:
                break;
        }


    }




    const handleUpdate = ({ target }) => {
        props.update(Number(target.id), name, price, quantity);

    }
    return (
        <tr className="item-line" key={props.id}>
            <td>
                    <input type="checkbox" id={props.id} onChange={handleCheck} checked={props.checkbox} />
                    <input type="button" id={props.id} value="E" disabled={disabled} onClick={handleUpdate} />
                    <input type="button" id={props.id} value="-" onClick={handleClick} />
            </td>

            <td className="td-value"><input type="text" name="value" id={props.id} value={name} onInput={handleChange} placeholder="Nombre" /></td>
            <td className="td-price"><input type="number" name="price" id={props.id} value={price} onInput={handleChange} placeholder="price" /></td>
            <td className="td-qty"><input  type="number" name="quantity" id={props.id} value={quantity} onInput={handleChange} placeholder="quantity" /></td>


            <td><output>{price * quantity}</output></td>


        </tr>
    )
}