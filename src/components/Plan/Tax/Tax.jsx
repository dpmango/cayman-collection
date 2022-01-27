import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import styles from './Tax.module.scss';

const Tax = ({ className, title, boxTitle, cols }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <h2 className={cns(styles.title)}>{title}</h2>

          <div className={styles.box}>
            <div className={cns('h2-title', styles.boxTitle)}>{boxTitle}</div>

            <div className={cns(styles.grid)}>
              {cols &&
                cols.map((col, idx) => (
                  <div className={styles.col} key={idx}>
                    <div className={styles.colTitle}>{col.title}</div>
                    {col.description && <div className={styles.colDescription}>{col.description}</div>}

                    <ul className={styles.colList}>
                      {col.list &&
                        col.list.map((li, i) => (
                          <li key={i}>
                            <SvgIcon name="link-play" />
                            {li}
                          </li>
                        ))}
                    </ul>

                    {col.source && (
                      <div className={styles.colSource} dangerouslySetInnerHTML={{ __html: col.source }} />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
