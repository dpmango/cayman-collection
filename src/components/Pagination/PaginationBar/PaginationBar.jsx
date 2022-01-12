import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { SvgIcon } from '@ui';

import styles from './PaginationBar.module.scss';

const Themes = {
  MAIN: 'main',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
};

const PaginationBar = ({ theme, title, link }) => {
  return (
    <div className={cns(styles.container, theme && ThemeClasses[theme])}>
      <div className="container">
        <div className="container-inner">
          <Link to={link} className={styles.box}>
            <div className={cns('h4-title', styles.title)}>{title}</div>
            <SvgIcon name="caret-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaginationBar;
