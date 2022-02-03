import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import styles from './PropertyFigures.module.scss';

const PropertyFigures = ({ className, intro, list }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.intro}>
            <div className={cns(styles.content)} dangerouslySetInnerHTML={{ __html: intro }} />
          </div>

          <div className={styles.grid}>
            {list &&
              list.map((el, idx) => (
                <div className={styles.listCard} key={el.id}>
                  <div className={styles.listCardWrapper}>
                    <label className={styles.listLabel}>{el.label}</label>
                    <p className={cns(styles.listValue, 'h3-title')}>{el.value}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFigures;
