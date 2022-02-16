import React, { useState } from 'react';
import cns from 'classnames';

import { SvgIcon, CustomChart } from '@ui';
import st from './PropertyPercent.module.scss';

const PropertyPercent = ({ className, from, to, title, description }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cns(st.container, className)}>
      <div className={st.slider}>
        <div className={st.sliderFrom}>{from}%</div>
        <div className={st.sliderCurrent}>
          <div className={st.sliderValue}>{current}%</div>
          <div className={st.sliderGrab}>
            <SvgIcon name="arrow-left" />
            <SvgIcon name="control-grab" />
            <SvgIcon name="arrow-right" />
          </div>
        </div>
        <div className={st.sliderTo}>{to}%</div>
      </div>
      <div className={st.content}>
        <div className={cns('h2-title', st.title)}>{title}</div>
        <div className={cns('p-regular', st.description)} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default PropertyPercent;
