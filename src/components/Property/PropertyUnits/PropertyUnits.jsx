import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button, SvgIcon, RangeSlider } from '@ui';

import UnitScope from './UnitScope';
import st from './PropertyUnits.module.scss';

const PropertyUnits = ({ className, list }) => {
  const [sliderValue, setSliderValue] = useState([1, 3]); // in millions
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <>
      <section className={cns(st.container, className)}>
        <div className="container">
          <div className="container-inner">
            <div className={st.head}>
              <div className={st.headIcon}>
                <SvgIcon name="bank" />
              </div>
              <div className={st.headLabel}>Range</div>
              <div className={st.headSlider}>
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
            <div className={st.unitsScope}>
              Displaying Units between {sliderValue[0]}m & {sliderValue[1]}m{' '}
            </div>

            <div className={st.unitsGrid}>
              {list &&
                list.map((unit) => (
                  <div
                    className={cns(st.unit, selectedUnit === unit.id && st._selected)}
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit.id)}>
                    <div className={st.unitImage}>
                      <img src={unit.image} alt={unit.title} />
                    </div>
                    <div className={st.unitContent}>
                      <div className={cns('h6-title', st.unitTitle)}>{unit.title}</div>
                      <div className={st.unitMeta}>
                        <div className={st.unitMetaCol}>
                          <span className={st.unitMetaLabel}>Price:</span>
                          <span className={cns(st.metaValue)}>{unit.price}</span>
                        </div>
                        <div className={st.unitMetaCol}>
                          <span className={st.unitMetaLabel}>Area:</span>
                          <span className={cns(st.metaValue)}>{unit.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <UnitScope unitId={selectedUnit} />
    </>
  );
};

export default PropertyUnits;
