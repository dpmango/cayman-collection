import React, { useContext, useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';
import debounce from 'lodash/debounce';

import { SvgIcon, Button } from '@ui';
import { useOnClickOutside, useWindowSize } from '@hooks';
import { UiStoreContext } from '@store';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Header = observer(({ className }) => {
  const [scroll, setScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const { width } = useWindowSize();

  const { activeModal } = useContext(UiStoreContext);
  const uiContext = useContext(UiStoreContext);

  const headerRef = useRef(null);

  useOnClickOutside(
    headerRef,
    useCallback(
      (e) => {
        if (width >= 768) {
          setMenuOpened(false);
        }
      },
      [setMenuOpened, width]
    )
  );

  return (
    <>
      <header className={cns(styles.header, scrolled && styles._scrolled, className)} ref={headerRef}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.hamburger}>
              <div className={cns('hamburger', menuOpened && 'is-active')}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>
            <div className={styles.cta}>
              <Button>
                <SvgIcon name="phone" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
});

export default Header;
