import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,incrementBy} from '../redux/features/counter.feature';

function CounterRedux(props) {
    const dispach = useDispatch();
    const counterStore = useSelector((state)=>{
        return state['counter']
    })

    const incrementClicked =()=>{
        dispach(increment());
    }
    const decrementClicked =()=>{
        dispach(decrement());
    }
    const incrementByClicked =(nr)=>{
        dispach(incrementBy(nr));
    }
    return (
        <div>
            <div class="alert alert-warning" role="alert">
               This counter uses Redux.
            </div>
            <p>{counterStore.count}</p>
            <button onClick={incrementClicked}>+</button>
            <button onClick={decrementClicked}>-</button>
            <button onClick={()=>incrementByClicked(5)}>+5</button>
        </div>
    );
}

export default CounterRedux;