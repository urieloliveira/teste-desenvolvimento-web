/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';

import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  PopperPlacementType,
} from '@material-ui/core';

interface ISelectProps {
  label: any;
  content: any;
  styleButton?: any;
  orientation?: PopperPlacementType;
  style?: any;
}

const CustomSelect: React.FC<ISelectProps> = ({
  label,
  content,
  orientation,
  styleButton,
  style,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const anchorRef = useRef<React.MutableRefObject<any>>();

  const handleToggle = () => {
    setShowMenu(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (
      anchorRef.current &&
      (anchorRef as React.MutableRefObject<any>).current.contains(event.target)
    ) {
      return;
    }

    setShowMenu(false);
  };

  // return focus to the button when we transitioned from !showMenu -> showMenu
  const prevOpen = React.useRef(showMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && showMenu === false) {
      (anchorRef as React.MutableRefObject<any>).current.focus();
    }

    prevOpen.current = showMenu;
  }, [showMenu]);

  return (
    <div style={style}>
      <div>
        <Button
          style={styleButton || { padding: '8px 16px', borderRadius: 50 }}
          variant="outlined"
          ref={anchorRef as React.MutableRefObject<any>}
          aria-controls={showMenu ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {label}
        </Button>
        <Popper
          open={showMenu}
          anchorEl={(anchorRef as React.MutableRefObject<any>).current}
          role={undefined}
          transition
          placement={orientation || 'bottom-end'}
          disablePortal
          style={{ zIndex: 5 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps}>
              <Paper
                elevation={4}
                style={{
                  marginTop: 12,
                  minWidth: 240,
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  {content}
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default CustomSelect;
