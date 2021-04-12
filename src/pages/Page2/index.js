//import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Page2() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    
    function handleClick() {
        dispatch({type: 'addCount'})
    }

    return (
        <>
            <h1>PAGE 2</h1>
            <h2>{count}</h2>
            <button onClick={handleClick}>AUMENTAR</button>
        </>
    )
}
