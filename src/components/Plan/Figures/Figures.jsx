import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Figures.module.scss';

const Figures = ({ className, title, content, list }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.head}>
            <div className="h2-title">{title}</div>
            <div className="row">
              <div className="col col-6">
                <div
                  className={cns('p-caption', styles.content, styles._col1)}
                  dangerouslySetInnerHTML={{ __html: content[0] }}
                />
              </div>
              <div className="col col-6">
                <div className={cns('p-caption', styles.content)} dangerouslySetInnerHTML={{ __html: content[1] }} />
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {list &&
              list.map((el, idx) => (
                <div className={styles.listCard} key={el.id}>
                  <div className={styles.listCardWrapper}>
                    <label>{el.label}</label>
                    <p className={cns(styles.listValue, 'h3-title')}>{el.value}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
