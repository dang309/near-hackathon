import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
//
import { NavItemRoot, NavItemSub } from './NavItem';
import { PaperStyle } from './style';

export function getActive(path, pathname) {
  return path ? !!matchPath({ path, end: false }, pathname) : false;
}

// ----------------------------------------------------------------------

NavListRoot.propTypes = {
  list: PropTypes.shape({
    children: PropTypes.array,
    path: PropTypes.string,
  }),
};

export function NavListRoot({ list }) {
  const menuRef = useRef(null);

  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(false);

  const hasChildren = list.children;

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <NavItemRoot item={list} active={active} />;
}

// ----------------------------------------------------------------------

NavListSub.propTypes = {
  list: PropTypes.shape({
    children: PropTypes.array,
    path: PropTypes.string,
  }),
};

function NavListSub({ list }) {
  const menuRef = useRef(null);

  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemSub
          ref={menuRef}
          open={open}
          item={list}
          active={active}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        />

        <PaperStyle
          open={open}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {(list.children || []).map((item) => (
            <NavListSub key={item.title} list={item} />
          ))}
        </PaperStyle>
      </>
    );
  }

  return <NavItemSub item={list} active={active} />;
}
