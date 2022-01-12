import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './InfoBlockAlt.module.scss';

const InfoBlockAlt = ({ className, list }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.grid}>
            <div className={styles.col}>
              <div className={cns(styles.block, styles._primary)}>
                <div className="h4-title t-captial">{list[0]}</div>
              </div>

              <div className={styles.block}>
                <p className="p-caption w-500">{list[1]}</p>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.block}>
                <p className="p-caption w-500">{list[2]}</p>
              </div>
              <div className={cns(styles.block, styles._primary)}>
                <div className="h4-title t-captial">{list[3]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlockAlt;
