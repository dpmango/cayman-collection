import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { observer } from 'mobx-react-lite';

import { UiStoreContext } from '@store';
import Header from '@c/Layout/Header';
import Footer from '@c/Layout/Footer';

import st from './Layout.module.scss';

const Variants = {
  MAIN: 'main',
  AUTH: 'auth',
};

const VariantClasses = {
  [Variants.MAIN]: '',
  [Variants.AUTH]: st._auth,
};

const Layout = observer(({ variant, children }) => {
  const { screenBlocked } = useContext(UiStoreContext);
  const uiContext = useContext(UiStoreContext);

  return (
    <div className={cns(st.layout, variant && VariantClasses[variant])}>
      {variant === 'main' && <Header className={st.header} />}

      <main className={st.main}>{children}</main>

      {variant === 'main' && <Footer />}

      <div
        className={cns(st.blocker, screenBlocked && st._active)}
        onClick={() => uiContext.setScreenBlocked(!screenBlocked)}></div>
    </div>
  );
});

Layout.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Layout.defaultProps = {
  variant: Variants.MAIN,
};

export default Layout;
