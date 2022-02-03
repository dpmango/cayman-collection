import React from 'react';
import cns from 'classnames';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { SvgIcon, CustomChart } from '@ui';
import styles from './PropertyFigures.module.scss';

const PropertyFigures = ({ className, intro, list, property, princiapal, list2 }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.intro}>
            <div className={cns(styles.content)} dangerouslySetInnerHTML={{ __html: intro }} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="container">
            <div className="container-inner">
              <h2 className="h2-title">{property.title}</h2>
            </div>
          </div>
        </div>

        <div className={styles.sectionContent}>
          <div className="container">
            <div className="container-inner">
              <div className={styles.chart}>
                <CustomChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="container">
            <div className="container-inner">
              <h2 className="h2-title">{princiapal.title}</h2>
            </div>
          </div>
        </div>

        <div className={styles.sectionContent}>
          <div className="container">
            <div className="container-inner">
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
              <div className={styles.chart}>
                <CustomChart />
              </div>
              <div className={styles.grid}>
                {list2 &&
                  list2.map((el, idx) => (
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
        </div>
      </div>
    </section>
  );
};

export default PropertyFigures;
