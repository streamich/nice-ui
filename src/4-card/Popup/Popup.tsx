import * as React from 'react';
import {PopupControlled, PopupControlledProps} from './PopupControlled';
import {context} from './context';

export interface PopupProps extends Omit<PopupControlledProps, 'open'> {}

export const Popup: React.FC<PopupProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <context.Provider value={{close: () => setOpen(false)}}>
      <PopupControlled
        {...props}
        onEsc={open ? () => setOpen(false) : undefined}
        onHeadClick={handleClick}
        onClickAway={handleClickAway}
        open={open}
      />
    </context.Provider>
  );
};
