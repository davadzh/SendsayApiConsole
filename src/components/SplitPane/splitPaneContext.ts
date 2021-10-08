import {createContext, Dispatch, MouseEventHandler, SetStateAction} from 'react';

type SplitPaneContextType = {
  clientLeftWidth: number | null,
  setClientLeftWidth: Dispatch<SetStateAction<number | null>>,
  onMouseHoldDown: MouseEventHandler<HTMLButtonElement>,
};

const SplitPaneContext = createContext({} as SplitPaneContextType);

export default SplitPaneContext;