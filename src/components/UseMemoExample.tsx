import { useState } from "react";
import { initialItems } from "../utils";

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // since initialItems has 29 million items, this operation is very expensive
  const selectedItem = items.find((item) => item.isSelected);

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
