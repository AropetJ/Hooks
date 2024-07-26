import { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

function NameList() {
  const [list, setList] = useState(["Aropet", "Joel", "Meshach"]);
  const [name, setName] = useState("");

  function addName() {
    setList([...list, name]);
    setName("");
  }

  return (
    <>
    <ul>
      {
        list.map((name) => (
          <li key={name}>{name}</li>
        ))
      }
    </ul>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}/>
    <button onClick={addName}>Add Name</button>
    </>
  )
}

function App() {

  return (
    <>
    <Counter/>
    <NameList/>
    </>
  )
}

export default App;