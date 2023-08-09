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
        <figure id="summarize">
            <label>TOTAL $: </label>
            <input id="summTotal" value={total.toFixed(1)} disabled />

        </figure>

    )
}