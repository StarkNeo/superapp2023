import React from "react";
import { useState, useEffect } from "react";

export function Summarize(props) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let subtotal = 0
        props.values.map((element) => {
            if (element.checked === true) {
                subtotal += element.price * element.quantity;

            }



        })
        setTotal(subtotal);
    }, [props.values])

    return (
        <>
            <figure id="summarize">
                <figcaption>SUMMARY</figcaption>
                
                <label>TOTAL : </label>
                <input id="summTotal" value={total} disabled />
                <fieldset>
                    <h5>List Actions</h5>
                    <input type="button" value="Save" onClick={props.save} />
                    <input type="button" value="Remove" onClick={props.delete} />
                    <input type="button" value="My list" onClick={props.load} />
                </fieldset>
            </figure>


        </>
    )
}