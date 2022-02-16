import cns from 'classnames';
import Modal from '../../UI/Modal';
import { Button, SvgIcon } from '@ui';
import throttle from 'lodash/throttle';
import st from './Header.module.scss';
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
      <header className={cns(st.header, scrolled && st._scrolled, className)} ref={headerRef}>
        <div className="container">
          <div className={st.wrapper}>
            <div className={st.hamburger}>
              <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <Link to="/" className={st.logo}>
              <Logo />
            </Link>
            <div className={st.cta}>
              <Button
                outline
                onClick={() => uiContext.setModal('calendar')}
                className={cns(st.phone, active && st.active)}>
                <SvgIcon name="phone" />
                <span className={st.schedule}>Schedule a call</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className={cns(st.menu, menuOpened && st._active)}>
        <div className={st.menuWrapper} ref={menuRef}>
          <div className={cns('hamburger', menuOpened && 'is-active')} onClick={() => setMenuOpened(!menuOpened)}>
            <span />
            <span />
            <span />
          </div>
          <ul className={st.menuList}>
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
            <li className={cns(st.menuNested, openedId === 1 && st._active)} onClick={() => handleMenuNestedClick(1)}>
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
            <li className={cns(st.menuNested, openedId === 2 && st._active)} onClick={() => handleMenuNestedClick(2)}>
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
          <div className={st.menuCta}>
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
