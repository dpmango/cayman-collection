import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './Information.module.scss';

const Information = ({ list }) => {
  return (
    <div className={cns(st.container)}>
      <div className="container">
        <div className="container-inner">
          <div className="h2-title">
            We provide the most{' '}
            <span
              className={st.tooltipTrigger}
              data-tip="We communicate with you every step of the way, and provide an allocated personal contact for all your questions.">
              efficient
            </span>
            ,{' '}
            <span
              className={st.tooltipTrigger}
              data-tip="We communicate with you every step of the way, and provide an allocated personal contact for all your questions.">
              transparent
            </span>{' '}
            & expert service to meet your financial goals.
          </div>

          <ul className={st.menu}>{list && list.map((link, idx) => <li key={idx}>{link}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
