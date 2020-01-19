import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  // children?: string | string[]
}
export const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
  return (
    <button
      className="focus:outline-none px-2 py-1 text-600 text-lg font-mono"
      {...buttonProps}
    >
      {children}
    </button>
  )
}
