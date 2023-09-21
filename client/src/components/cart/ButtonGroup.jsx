import { useState } from "react";

const ButtonGroup = () => {
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };
    return(
        <div className="btn-group buttons" role="group">
            <button className="btn" onClick={()=>handleDecrement()}>-</button>
            <button className="btn">{counter}</button>
            <button className="btn" onClick={()=> handleIncrement()}>+</button>
        </div>
    )
}
export default ButtonGroup;