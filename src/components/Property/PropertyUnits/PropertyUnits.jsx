import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button, SvgIcon, RangeSlider } from '@ui';

import styles from './PropertyUnits.module.scss';

const PropertyUnits = ({ className, list }) => {
  const [sliderValue, setSliderValue] = useState([1, 3]); // in millions

  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.head}>
            <div className={styles.headIcon}>
              <SvgIcon name="bank" />
            </div>
            <div className={styles.headLabel}>Range</div>
            <div className={styles.headSlider}>
              <RangeSlider
                value={sliderValue}
                min={1}
                max={3}
                step={0.1}
                onChange={(v) => setSliderValue(v)}
                tipFormatter={(v) => `$${v}m`}
              />
            </div>
          </div>
          <div className={styles.unitsScope}>
            Displaying Units between {sliderValue[0]}m & {sliderValue[1]}m{' '}
          </div>

          <div className={styles.unitsGrid}>
            {list &&
              list.map((unit) => (
                <div className={styles.unit} key={unit.id}>
                  <div className={styles.unitImage}>
                    <img src={unit.image} alt={unit.title} />
                  </div>
                  <div className={styles.unitContent}>
                    <div className={cns('h6-title', styles.unitTitle)}>{unit.title}</div>
                    <div className={styles.unitMeta}>
                      <div className={styles.unitMetaCol}>
                        <span className={styles.unitMetaLabel}>Price:</span>
                        <span className={cns(styles.metaValue)}>{unit.price}</span>
                      </div>
                      <div className={styles.unitMetaCol}>
                        <span className={styles.unitMetaLabel}>Area:</span>
                        <span className={cns(styles.metaValue)}>{unit.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyUnits;
