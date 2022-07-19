import { useState } from 'react';
import { ReactComponent as CrossIcon } from './cross.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as WarningIcon } from './warning.svg';

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
      className={`inline-flex flex-col text-left px-4 py-3 rounded-md border-1 border-transparent ${
        type === 'warning' ? 'text-amber-900' : 'text-teal-900'
      } ${type === 'warning' ? 'bg-amber-50' : 'bg-teal-50'}
    `}
    >
      <div className="flex items-center mb-1">
        <span
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
          className="w-7"
        >
          {type === 'warning ' ? (
            <WarningIcon className="fill-amber-900 w-5 h-5" />
          ) : (
            <InfoIcon className="fill-teal-900 w-5 h-5" />
          )}
        </span>
        <span className="font-bold">{heading}</span>
        {closable && (
          <button
            aria-label="Close"
            onClick={handleCloseClick}
            className="border-none bg-transparent ml-auto cursor-pointer"
          >
            <CrossIcon />
          </button>
        )}
      </div>
      <div className="ml-7 text-black">{children}</div>
    </div>
  );
}
