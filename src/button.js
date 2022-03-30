import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const Button = (props)=> {
    const state = useSelector((state)=> state)
    return <div>
        <button>{props.title}</button>

    </div>
}

export default Button;