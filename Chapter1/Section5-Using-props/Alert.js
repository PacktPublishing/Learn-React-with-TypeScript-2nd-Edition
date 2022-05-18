export function Alert({ type = "information", heading, children }) {
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
      <div>{children}</div>
    </div>
  );
}
