import React, { useState } from 'react';


function Counter(props) {
    const [state, setState] = useState({
        count: 0
    })

    const incrementClicked = () => {
        setState({
            count: state.count + 1,
        })
    }
    const decrementClicked = () => {
        setState({
            count: state.count - 1,
        })
    }
    const incrementByClicked = (nr) => {
        setState({
            count: state.count + nr,
        })
    }
    return (
        <div>
            <div class="alert alert-warning" role="alert">
               This counter do not use Redux.
            </div>
            <p>{state.count}</p>
            <button onClick={incrementClicked}>+</button>
            <button onClick={decrementClicked}>-</button>
            <button onClick={() => incrementByClicked(5)}>5</button>
        </div>
    );
}

export default Counter;