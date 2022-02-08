import cns from 'classnames';
import Modal from '../../UI/Modal';
import { Button, SvgIcon } from '@ui';
import throttle from 'lodash/throttle';
import styles from './Header.module.scss';
import { observer } from 'mobx-react-lite';
import { UiStoreContext } from '../../../store';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { useEventListener, useOnClickOutside, useWindowSize } from '@hooks';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

const Header = observer(({ className }) => {
  const uiContext = useContext(UiStoreContext);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [openedId, setOpenedId] = useState(null);
  const [active, setActive] = useState(false);

  const location = useLocation();
  const { width } = useWindowSize();

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
    useCallback(() => setMenuOpened(false), [setMenuOpened])
  );

  useEffect(() => {
    setMenuOpened(false);
  }, [location.key]);

  useEffect(() => {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  }, []);

  return (
    <>
      <Modal name="calendar">
        <div
          className="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/hello2759/speak-with-our-concierge-team?embed=true"
        />
        <Helmet>
          <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" />
        </Helmet>
      </Modal>
      <header className={cns(styles.header, scrolled && styles._scrolled, className)} ref={headerRef}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.hamburger}>
              <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>
            <div className={styles.cta}>
              <Button
                outline
                onClick={() => uiContext.setModal('calendar')}
                className={cns(styles.phone, active && styles.active)}>
                <SvgIcon name="phone" />
                <span className={styles.schedule}>Schedule a call</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className={cns(styles.menu, menuOpened && styles._active)}>
        <div className={styles.menuWrapper} ref={menuRef}>
          <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
            <span />
            <span />
            <span />
          </div>
          <ul className={styles.menuList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/plan">The Plan</Link>
            </li>
            <li>
              <Link to="/process">The Process</Link>
            </li>
            <li>
              <Link to="/property">The Property</Link>
            </li>
            <li
              className={cns(styles.menuNested, openedId === 1 && styles._active)}
              onClick={() => handleMenuNestedClick(1)}>
              <a href="#">About</a>
              <ul onClick={(e) => e.stopPropagation()}>
                <li>
                  <a href="/team">Your team</a>
                </li>
                <li>
                  <a href="/about">Why Cayman</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </li>
            <li
              className={cns(styles.menuNested, openedId === 2 && styles._active)}
              onClick={() => handleMenuNestedClick(2)}>
              <a href="#">Help</a>
              <ul onClick={(e) => e.stopPropagation()}>
                <li>
                  <a href="/team">Your team</a>
                </li>
                <li>
                  <a href="/about">Why Cayman</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.menuCta}>
            <Link to="/login">
              <Button theme="accent" block>
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
