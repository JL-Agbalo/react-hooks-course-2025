/**
 * Reducer function to manage the state based on the action type.
 * 
 * @param {Object} state - The current state.
 * @param {Object} action - The action to be performed.
 * @param {string} action.type - The type of action to be performed.
 * @returns {Object} The new state after applying the action.
 * 
 * Action types:
 * - "increment": Increases the count by 1.
 * - "decrement": Decreases the count by 1.
 * - "double": Multiplies the count by 2.
 * 
 * Note: This reducer is best used for managing simple state transitions
 * where the state is an object and the actions are well-defined.
 */

/**
 * ReducerExample component demonstrates the use of the useReducer hook.
 * 
 * This component maintains a count state and provides buttons to increment,
 * decrement, and double the count using the dispatch function from useReducer.
 * 
 * @component
 * @example
 * return (
 *   <ReducerExample />
 * )
 * 
 * Note: This component is useful for scenarios where you need to manage
 * complex state logic or when the state transitions are dependent on the
 * previous state.
 */
import { useReducer } from "react";

const reducer = (state, action) => {
switch (action.type) {
    case "increment":
    return { count: state.count + 1 };
    case "decrement":
    return { count: state.count - 1 };
    case "double":
    return { count: state.count * 2 };
    default:
    return state;
}
};

export const ReducerExample = () => {
const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={() => dispatch({type: "double"})}>Multiply</button>
    </div>
  );
};

export default ReducerExample;

