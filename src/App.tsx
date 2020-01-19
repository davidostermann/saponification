import React from 'react';

import { ButtonAppear } from './button-appear';
import { IconPlus } from './icons/icon-plus';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {}

const iconPlus = (props: IconProps) => (
  <IconPlus width="28" height="28" {...props} />
)

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1>Recettes</h1>
      <div className="absolute pt-2 pr-2 top-0 right-0">
        <ButtonAppear icon={iconPlus}>
          <span className="text-sm pr-1">Nouveau component</span>
        </ButtonAppear>
      </div>
    </div>
  )
}

export default App
