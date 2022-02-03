import React from 'react';
import cns from 'classnames';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { SvgIcon } from '@ui';
import styles from './PropertyFigures.module.scss';

const PropertyFigures = ({ className, intro, list, property, princiapal }) => {
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
                <ResponsiveContainer width="100%" height={690}>
                  <LineChart width={500} height={300} data={property.chart}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#666565" activeDot={{ r: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" height={690}>
                  <LineChart width={500} height={300} data={princiapal.chart}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#666565" activeDot={{ r: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFigures;
