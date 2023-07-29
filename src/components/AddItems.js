import React from "react";
import { useState, useEffect } from "react";

export function Item(props) {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [unit, setUnit] = useState('');
    const [quantity, setQuantity] = useState('');
    const [id, setId] = useState(1);




    const changeValue = ({ target }) => {
        switch (target.id) {
            case 'category':
                setCategory(target.value)
                break;
            case 'name':
                setName(target.value);
                break;
            case 'price':
                setPrice(target.value);
                break;
            case 'unit':
                setUnit(target.value);
                break;
            case 'quantity':
                setQuantity(target.value);
                break;
            default:
                break;
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let item = {
            category: category,
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            unit: unit,
        }
        props.addItem(item)
        setCategory('')
        setName('')
        setPrice('')
        setQuantity('')
        setUnit('')
        setId(lastId => lastId + 1);
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <h2 className="title">ADD ITEMS HERE</h2>
                <div className="input">
                    <label htmlFor="category">DEPARTMENT</label>
                    <input name="category" id="category" type="text" value={category} placeholder="category" onChange={changeValue} />
                </div>
                <div className="input">
                    <label htmlFor="name">DESCRIPTION</label>
                    <input id="name" type="text" value={name} placeholder="Add item here" onChange={changeValue} />
                </div>
                <div className="input">
                    <label htmlFor="price">PRICE</label>
                    <input id="price" type="number" value={price} placeholder="price" onChange={changeValue} />
                </div>
                <div className="input">
                    <label htmlFor="quantity">QUANTITY</label>
                    <input id="quantity" type="number" value={quantity} placeholder="quantity" onChange={changeValue} />
                </div>
                <div className="input">
                    <label htmlFor="unit">UNIT</label>
                    <input id="unit" type="text" value={unit} placeholder="unit meassure" onChange={changeValue} />
                </div>
                <input type="submit" value="add" />
            </form>

        </>

    )
}