import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

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

const Layout = ({ variant, children }) => {
  return (
    <div className={cns(st.layout, variant && VariantClasses[variant])}>
      {variant === 'main' && <Header className={st.header} />}

      <main className={st.main}>{children}</main>

      {variant === 'main' && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Layout.defaultProps = {
  variant: Variants.MAIN,
};

export default Layout;
