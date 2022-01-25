import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { SvgIcon } from '@ui';

import { FaqQuestion } from '@c/Home/Faq';
import styles from './Timeline.module.scss';

const Timeline = ({ className, title, timeline, faq }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('h1-title', 'c-gray', styles.title)}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineHead}>
              {timeline.head &&
                timeline.head.map((x, idx) => (
                  <div className={styles.headCol} key={idx}>
                    <span className="h6-title">{x}</span>
                  </div>
                ))}
            </div>

            <div className={styles.timelineRows}>
              {timeline.rows &&
                timeline.rows.map((x, idx) => (
                  <div className={styles.timelineRow} key={idx}>
                    <div className={styles.rowLabel}>{x.label}</div>
                    <div className={styles.rowProgress}>
                      <div
                        className={styles.rowProgressValue}
                        style={{ left: `${x.from}%`, right: `${Math.abs(Number(x.to) - 100)}%` }}></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <ul className={styles.faq}>{faq && faq.map((question, idx) => <FaqQuestion key={idx} {...question} />)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
