import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, Button } from '@ui';

import styles from './ScheduleCallBanner.module.scss';

const ScheduleCallBanner = ({ className }) => {
  return (
    <div className={cns(styles.banner, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.content}>
            <div className={cns('h5-title', 'c-primary')}>
              Speak with Bec today to learn more about this investment opportunity
            </div>

            <div className={styles.cta}>
              <Button theme="accent" type="submit" iconRight="arrow-right" className={styles.formButton}>
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
