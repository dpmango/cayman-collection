import React, { useState } from 'react';
import cns from 'classnames';

import { SvgIcon, CustomChart } from '@ui';
import styles from './PropertyPercent.module.scss';

const PropertyPercent = ({ className, from, to, title, description }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cns(styles.container, className)}>
      <div className={styles.slider}>
        <div className={styles.sliderFrom}>{from}%</div>
        <div className={styles.sliderCurrent}>
          <div className={styles.sliderValue}>{current}%</div>
          <div className={styles.sliderGrab}>
            <SvgIcon name="arrow-left" />
            <SvgIcon name="control-grab" />
            <SvgIcon name="arrow-right" />
          </div>
        </div>
        <div className={styles.sliderTo}>{to}%</div>
      </div>
      <div className={styles.content}>
        <div className={cns('h2-title', styles.title)}>{title}</div>
        <div className={cns('p-regular', styles.description)} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default PropertyPercent;
