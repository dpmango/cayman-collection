import React from 'react';
import cns from 'classnames';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { SvgIcon, CutstomChart } from '@ui';
import styles from './CustomChart.module.scss';

const CustomChart = ({ className }) => {
  return (
    <div className={cns(styles.chart, className)}>
      <div className={styles.chartWrapper}>
        <div className={styles.axisY}>
          <div className={styles.axisYCol}>
            $<span>8</span>m
          </div>
          <div className={styles.axisYCol}>
            $<span>6</span>m
          </div>
          <div className={styles.axisYCol}>
            $<span>5</span>m
          </div>
          <div className={styles.axisYCol}>
            $<span>2</span>m
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyGraph}></div>
          <div className={styles.tooltip}>
            <div className={styles.tooltipSection}>
              <span>Total income:</span>
              $1,345,765
            </div>
            <div className={styles.tooltipSection}>
              <span>Property value:</span>
              $3,345,765
            </div>
          </div>
          <div className={styles.bodyDecor} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.axisX}>
          <div className={styles.axisXCol}>
            <span>y0</span>
          </div>
          <div className={styles.axisXCol}>
            <span>y5</span>
          </div>
          <div className={styles.axisXCol}>
            <span>y10</span>
          </div>
          <div className={styles.axisXCol}>
            <span>y15</span>
          </div>
          <div className={styles.axisXCol}>
            <span>y20</span>
          </div>
        </div>

        <div className={styles.legend}>
          <div className={styles.control}>
            <div className={styles.controlGrab}>
              <SvgIcon name="arrow-left" />
              <SvgIcon name="control-grab" />
              <SvgIcon name="arrow-right" />
            </div>
          </div>
          <div className={cns('h2-title', styles.legendTitle)}>Rental income:</div>
          <p className={styles.legendDescription}>Rental income as a % of property value based on historical values</p>
        </div>
      </div>
    </div>
  );
};

export default CustomChart;
