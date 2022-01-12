import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Stats.module.scss';

const Stats = ({ className, title, cols }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('h2-title tac c-gray', styles.title)}>{title}</div>

          <div className={styles.grid}>
            {cols &&
              cols.length &&
              cols.map((x) => (
                <div className={styles.col} key={x.id}>
                  <div className={styles.colTitle} dangerouslySetInnerHTML={{ __html: x.title }} />
                  <p className={cns(styles.colDescription)}>{x.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
