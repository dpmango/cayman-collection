import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Information.module.scss';

const Information = ({ title, list }) => {
  return (
    <div className={cns(styles.container)}>
      <div className="container">
        <div className="container-inner">
          <div className="h2-title">{title}</div>

          <ul className={styles.menu}>{list && list.map((link, idx) => <li key={idx}>{link}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
