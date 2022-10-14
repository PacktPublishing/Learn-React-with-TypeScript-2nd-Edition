import { Component } from "react";

export class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  render() {
    const {
      type = "information",
      heading,
      children,
      closable,
      onClose
    } = this.props;

    if (!this.state.visible) {
      return null;
    }
    const handleCloseClick = () => {
      this.setState({ visible: false });
      if (onClose) {
        onClose();
      }
    };
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
          <button aria-label="Close" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
        <div>{children}</div>
      </div>
    );
  }
}
