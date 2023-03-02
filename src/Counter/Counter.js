import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div className="Counter">
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;
