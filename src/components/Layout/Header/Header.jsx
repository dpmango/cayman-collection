import React, { useContext, useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';
import throttle from 'lodash/throttle';

import { SvgIcon, Button } from '@ui';
import { useOnClickOutside, useEventListener, useWindowSize } from '@hooks';
import { UiStoreContext } from '@store';

import styles from './Header.module.scss';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Header = observer(({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [openedId, setOpenedId] = useState(null);

  const { width } = useWindowSize();

  const { activeModal } = useContext(UiStoreContext);
  const uiContext = useContext(UiStoreContext);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleMenuNestedClick = useCallback(
    (id) => {
      if (openedId === id) {
        setOpenedId(null);
      } else {
        setOpenedId(id);
      }
    },
    [openedId]
  );
  const handleScroll = useCallback(
    throttle((e) => {
      // const nearFooter = window.scrollY + window.innerHeight > document.body.scrollHeight - 375;
      const startStickyAt = 0;

      if (window.scrollY > startStickyAt) {
        if (!scrolled) {
          setScrolled(true);
          document.body.classList.add('scrolled');
        }
      } else {
        if (scrolled) {
          setScrolled(false);
          document.body.classList.remove('scrolled');
        }
      }
    }, 100),
    [scrolled, setScrolled, width]
  );

  useEventListener('scroll', handleScroll);

  useOnClickOutside(
    menuRef,
    useCallback(
      (e) => {
        setMenuOpened(false);
      },
      [setMenuOpened]
    )
  );

  return (
    <>
      <header className={cns(styles.header, scrolled && styles._scrolled, className)} ref={headerRef}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.hamburger}>
              <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>
            <div className={styles.cta}>
              <Button outline>
                <SvgIcon name="phone" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className={cns(styles.menu, menuOpened && styles._active)}>
        <div className={styles.menuWrapper} ref={menuRef}>
          <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={styles.menuList}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">The Plan</a>
            </li>
            <li>
              <a href="#">The Process</a>
            </li>
            <li>
              <a href="#">The Property</a>
            </li>
            <li
              className={cns(styles.menuNested, openedId === 1 && styles._active)}
              onClick={() => handleMenuNestedClick(1)}>
              <a href="#">About</a>
              <ul onClick={(e) => e.stopPropagation()}>
                <li>
                  <a href="#">Your team</a>
                </li>
                <li>
                  <a href="#">Why Cayman</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li
              className={cns(styles.menuNested, openedId === 2 && styles._active)}
              onClick={() => handleMenuNestedClick(2)}>
              <a href="#">Help</a>
              <ul onClick={(e) => e.stopPropagation()}>
                <li>
                  <a href="#">Your team</a>
                </li>
                <li>
                  <a href="#">Why Cayman</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.menuCta}>
            <Button theme="accent" block>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
