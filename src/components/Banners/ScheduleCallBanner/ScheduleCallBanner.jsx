import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, Button } from '@ui';

import st from './ScheduleCallBanner.module.scss';

const ScheduleCallBanner = ({ className }) => {
  return (
    <div className={cns(st.banner, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.content}>
            <div className={cns('h5-title', 'c-primary')}>
              Speak with <i>Bec</i> today to learn more about this investment opportunity
            </div>

            <div className={cns('mt-lg-2', st.cta)}>
              <Button theme="accent" type="submit" iconRight="arrow-right" className={st.formButton}>
                Schedule a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCallBanner;
