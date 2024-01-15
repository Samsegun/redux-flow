import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

const IcecreamView = () => {
    const [restockValue, setRestockValue] = useState(1);

    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of icecream - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>

            <input
                type='number'
                value={restockValue}
                onChange={e => setRestockValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(restockValue))}>
                Restock icecream
            </button>
        </div>
    );
};

export default IcecreamView;
