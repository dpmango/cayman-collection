import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './QuoteBanner.module.scss';

const QuoteBanner = ({ className, subtitle, text, sign }) => {
  return (
    <div className={cns(styles.banner, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.content}>
            <div className={cns('h6-title', styles.subtitle)}>{subtitle}</div>
            <p className={cns('h1-title', styles.text)}>{text}</p>
            {sign && <p className={cns('h6-title', styles.sign)}>{sign}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
