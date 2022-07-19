/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div
      css={css`
        display: inline-flex;
        flex-direction: column;
        text-align: left;
        padding: 10px 15px;
        border-radius: 4px;
        border: 1px solid transparent;
        color: ${type === 'warning' ? '#e7650f' : '#118da0'};
        background-color: ${type === 'warning' ? '#f3e8da' : '#dcf1f3'};
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        `}
      >
        <span
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
          css={css`
            width: 30px;
          `}
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span
          css={css`
            font-weight: bold;
          `}
        >
          {heading}
        </span>
        {closable && (
          <button
            aria-label="Close"
            onClick={handleCloseClick}
            css={css`
              border: none;
              background: transparent;
              margin-left: auto;
              cursor: pointer;
            `}
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div
        css={css`
          margin-left: 30px;
          color: #000;
        `}
      >
        {children}
      </div>
    </div>
  );
}
