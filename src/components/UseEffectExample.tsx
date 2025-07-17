import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // the code we want to run, when any one of the dependency array changes
    console.log("The count is:", count);

    // optional return function
  }, [count]); // dependency array, if empty, it will run once on client side mount

  return (
    <div>
      <p>Use Effect example:</p>
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>{" "}
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
