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

const PaginationBar = ({ theme, prev, next }) => {
  return (
    <div className={cns(styles.container, theme && ThemeClasses[theme])}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.box}>
            {prev && (
              <Link to={prev.link} className={'lg-hidden'}>
                <SvgIcon name="caret-left" />
                <div className={cns('h4-title', styles.title)}>{prev.title}</div>
              </Link>
            )}
            {next && (
              <Link to={next.link} className={styles.nextLink}>
                <div className={cns('h4-title', styles.title)}>{next.title}</div>
                <SvgIcon name="caret-right" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationBar;
