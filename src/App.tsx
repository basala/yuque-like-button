import classNames from "classnames";
import { useState } from "react";

export function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <span
        className={classNames("like-button", {
          selected,
        })}
        onClick={() => setSelected(!selected)}
      ></span>
    </div>
  );
}
