import React from 'react';

interface Props extends React.SVGAttributes<SVGSVGElement> {
  width: string | number | undefined
  height: string | number | undefined
}

export const IconPlus: React.FC<Props> = ({ width, height, ...svgProps }) => {
  return (
    <svg {...svgProps} viewBox={`0 0 24 24`} width={width} height={height}>
      <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4zm9 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2z" />
    </svg>
  )
}
