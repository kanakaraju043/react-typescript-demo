import React, { useReducer } from "react";


const initialState = {
    count: 0,
  };

  type CounterState = {
    count: number
  }


  type PayLoadAction = {
    type: 'increment' | 'decrement'
    payload: number
  }

  type ResetAction = {
    type: 'reset'

  }


  type CounterAction = PayLoadAction | ResetAction   // this is called descreminated unions


  function reducerMethod(state: CounterState, action: CounterAction) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };

      case "decrement":
        return { count: state.count - action.payload };

        case 'reset': 
        return initialState

      default:
        return state;
    }
  }


const CounterReducer = () => {

    const [state, dispatch] = useReducer(reducerMethod, initialState)
  
  return (
    <div>
        count: {state.count}
        <button onClick={() => dispatch({type: 'increment', payload: 10})}> Increment by 10</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 10})}> Decrement by 10</button>
    </div>
  )
};

export default CounterReducer;
