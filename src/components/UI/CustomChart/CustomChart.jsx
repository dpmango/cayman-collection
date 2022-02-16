import React from 'react';
import cns from 'classnames';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { SvgIcon, CutstomChart } from '@ui';
import st from './CustomChart.module.scss';

const CustomChart = ({ className, includeLegend }) => {
  return (
    <div className={cns(st.chart, className)}>
      <div className={st.chartWrapper}>
        <div className={st.axisY}>
          <div className={st.axisYCol}>
            $<span>8</span>m
          </div>
          <div className={st.axisYCol}>
            $<span>6</span>m
          </div>
          <div className={st.axisYCol}>
            $<span>5</span>m
          </div>
          <div className={st.axisYCol}>
            $<span>2</span>m
          </div>
        </div>
        <div className={st.body}>
          <div className={st.bodyGraph}></div>
          <div className={st.tooltip}>
            <div className={st.tooltipSection}>
              <span>Total income:</span>
              $1,345,765
            </div>
            <div className={st.tooltipSection}>
              <span>Property value:</span>
              $3,345,765
            </div>
          </div>
          <div className={st.bodyDecor} />
        </div>
      </div>

      <div className={st.bottom}>
        <div className={st.axisX}>
          <div className={st.axisXCol}>
            <span>y0</span>
          </div>
          <div className={st.axisXCol}>
            <span>y5</span>
          </div>
          <div className={st.axisXCol}>
            <span>y10</span>
          </div>
          <div className={st.axisXCol}>
            <span>y15</span>
          </div>
          <div className={st.axisXCol}>
            <span>y20</span>
          </div>
        </div>

        {includeLegend && (
          <div className={st.legend}>
            <div className={st.control}>
              <div className={st.controlGrab}>
                <SvgIcon name="arrow-left" />
                <SvgIcon name="control-grab" />
                <SvgIcon name="arrow-right" />
              </div>
            </div>
            <div className={cns('h2-title', st.legendTitle)}>Rental income:</div>
            <p className={st.legendDescription}>Rental income as a % of property value based on historical values</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomChart;
