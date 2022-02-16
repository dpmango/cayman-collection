import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './QuoteBanner.module.scss';

const QuoteBanner = ({ className, subtitle, text, sign }) => {
  return (
    <div className={cns(st.banner, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.content}>
            <div className={cns('h6-title', st.subtitle)}>{subtitle}</div>
            <p className={cns('h1-title', st.text)}>{text}</p>
            {sign && <p className={cns('h6-title', st.sign)}>{sign}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
