import { useMemo, useState } from "react";
import { initialItems } from "../utils";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // since initialItems has 29 million items, this operation is very expensive
  // useMemo computes this in the initial render, then for subsequent renders,
  // if no dependencies in the dependency array change, it just returns the last computed/cached value
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
  );

  return (
    <div>
      <p>Use Memo Example: </p>
      <p>Count: {count}</p>
      <p>Selected item: {selectedItem?.id}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
