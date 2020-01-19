import React from 'react';

import { Button } from './button';

interface Props extends React.HTMLAttributes<HTMLElement> {
  label?: string
  icon: Function
}
export const ButtonAppear: React.FC<Props> = ({
  icon,
  children,
  ...buttonProps
}) => {
  return (
    <Button {...buttonProps}>
      <div className="group flex flex-row-reverse overflow-x-hidden">
        <div className="z-10">
          {icon({ className: 'bg-white inline align-top z-10' })}
        </div>
        <div className="w-0 group-hover:w-full whitespace-no-wrap transition-width">
          {children}
        </div>
      </div>
    </Button>
  )
}
