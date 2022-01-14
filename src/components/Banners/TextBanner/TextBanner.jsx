import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './TextBanner.module.scss';

const Themes = {
  MAIN: 'main',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
};

const TextBanner = ({ className, theme, title, description }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={cns(styles.banner, theme && ThemeClasses[theme], className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.content}>
            <div className={cns('h5-title', styles.title)}>{title}</div>
            <p className="p-small">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
