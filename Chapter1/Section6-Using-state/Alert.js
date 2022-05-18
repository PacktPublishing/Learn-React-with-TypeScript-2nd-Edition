import { useState } from "react";

export function Alert({ type = "information", heading, children, closable }) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close">
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
