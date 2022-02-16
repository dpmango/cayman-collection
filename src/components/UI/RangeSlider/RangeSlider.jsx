import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import Slider from 'rc-slider';

import { Button, SvgIcon } from '@ui';

import st from './RangeSlider.module.scss';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = ({ className, value, onChange, ...props }) => {
  return (
    <div className={st.slider}>
      <Range value={value} onChange={onChange} {...props} />
    </div>
  );
};

export default RangeSlider;
