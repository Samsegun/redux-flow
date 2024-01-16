import { useState } from "react";
import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
    const [restockValue, setRestockValue] = useState(1);
    const numOfCakes = useAppSelector(state => state.cake.numOfCakes);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>

            <input
                type='number'
                value={restockValue}
                onChange={e => setRestockValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(restockValue))}>
                Restock cakes
            </button>
        </div>
    );
};

export default CakeView;
