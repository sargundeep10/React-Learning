import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement , increment } from "./counterSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)

    console.log({count})
    return(
        <div>
            <h2>Coffee</h2>
            <img src = "data:image/jpeg;base64,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" alt="cofee-cup"/>
            <div>
                
                <button onClick={() => dispatch(increment())}>+</button>

                <button onClick={() => dispatch(decrement())}>-</button>
                <div>
            <table>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Coffee</td>
                        <td>{count}</td>
                    </tr>
                </tbody>
            </table>

        </div>
            </div>
        </div>
    )
}

export default Cart;