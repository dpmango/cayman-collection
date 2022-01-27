import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import styles from './Figures.module.scss';

const Figures = ({ className, title, content, list, ways }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.head}>
            <h2 className="h2-title">{title}</h2>
            <div className="row">
              <div className="col col-6 col-lg-12">
                <div
                  className={cns('p-caption', styles.content, styles._col1)}
                  dangerouslySetInnerHTML={{ __html: content[0] }}
                />
              </div>
              <div className="col col-6 col-lg-12">
                <div className={cns('p-caption', styles.content)} dangerouslySetInnerHTML={{ __html: content[1] }} />
              </div>
            </div>
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

          <div className={styles.ways}>
            <div className={styles.waysTitle} dangerouslySetInnerHTML={{ __html: ways.title }} />

            <div className={styles.waysGrid}>
              {ways.list &&
                ways.list.map((el, idx) => (
                  <div className={cns(styles.wayCard, el.num && styles._numed)} key={el.id}>
                    <div
                      className={cns(
                        styles.wayCardIcons,
                        [1, 3].includes(Number(el.num)) && styles._equals,
                        [2, 4].includes(Number(el.num)) && styles._plus
                      )}>
                      <SvgIcon name="equals" />
                      <SvgIcon name="plus" />
                    </div>

                    <div className={styles.wayCardWrapper}>
                      {el.num && (
                        <div className={cns(styles.wayCardNum, 'h6-title')}>
                          <span>{el.num}</span>
                        </div>
                      )}

                      <label className={styles.listLabel}>{el.label}</label>
                      <p className={cns(styles.listValue, 'h3-title')}>{el.value}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className={styles.total}>
              <div className={styles.wayCardWrapper}>
                <label className={styles.listLabel}>{ways.total.label}</label>
                <p className={cns(styles.listValue, 'h3-title')}>{ways.total.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Figures;
