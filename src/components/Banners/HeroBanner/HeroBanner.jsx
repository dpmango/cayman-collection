import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './HeroBanner.module.scss';

const Themes = {
  MAIN: 'main',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
};

const HeroBanner = ({ theme, title, description }) => {
  return (
    <div className={cns(styles.banner, theme && ThemeClasses[theme])}>
      <div className="container">
        <div className={styles.box}>
          <div className="container-inner">
            <div className={styles.content}>
              <div className={cns('h0-title', styles.title)}>{title}</div>
              <div className={cns('p-caption', styles.description)}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
