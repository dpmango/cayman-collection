import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './InfoBlock.module.scss';

const InfoBlock = ({ className, list }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.grid}>
            <div className={styles.col}>
              <div className={styles.block}>
                <p className="p-caption">{list[0]}</p>
              </div>
              <div className={cns(styles.block, styles.blockImage2)}></div>
            </div>

            <div className={styles.col}>
              <div className={cns(styles.block, styles.blockImage1)}></div>
              <div className={styles.block}>
                <p className="p-caption">{list[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
