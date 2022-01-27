import React, { useState, useCallback, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';
import throttle from 'lodash/throttle';

import { UiStoreContext } from '@store';
import { SvgIcon } from '@ui';
import { useEventListener } from '@hooks';

import { FaqQuestion } from '@c/Home/Faq';
import styles from './Timeline.module.scss';

const timelineCSSWidth = 120;

const Timeline = ({ className, title, timeline, faq }) => {
  const timelineRef = useRef(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeCol, setActiveCol] = useState(1);

  const uiContext = useContext(UiStoreContext);

  const handleTimelineHover = useCallback((id) => {
    setActiveTooltip(id);
  }, []);

  const handletimelineHoverOut = useCallback(() => {
    // setActiveTooltip(null);
  }, []);

  const handleNavClick = useCallback(
    (n) => {
      const borderFix = n % 2 === 0 ? 2 : 0;

      timelineRef.current.scroll({
        left: (n - 1) * timelineCSSWidth + borderFix,
        top: 0,
        behavior: 'smooth',
      });
    },
    [timelineRef]
  );

  const handleScroll = useCallback(
    throttle((e) => {
      const scrollX = timelineRef.current.scrollLeft;

      const scrolledCols = Math.floor(scrollX / timelineCSSWidth) + 1;

      setActiveCol(scrolledCols);
    }, 100),
    [timelineRef]
  );

  // useEventListener('scroll', handleScroll, timelineRef.current);

  useEffect(() => {
    if (timelineRef && timelineRef.current) {
      timelineRef.current.addEventListener('scroll', handleScroll, false);
      return () => {
        timelineRef.current.removeEventListener('scroll', handleScroll, false);
      };
    }
  }, [handleScroll]);

  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('h1-title', 'c-gray', styles.title)}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </div>

          <ul className={styles.timelineNav}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <li key={n} className={cns(activeCol === n && styles._active)} onClick={() => handleNavClick(n)}>
                <span>0{n}</span>
              </li>
            ))}
          </ul>

          <div className={styles.timeline} ref={timelineRef}>
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
                  <div className={cns(styles.timelineRow, activeTooltip === x.tooltip.id && styles._active)} key={idx}>
                    <div className={styles.rowLabel}>
                      <span>{x.label}</span>
                    </div>
                    <div className={styles.rowProgress}>
                      <div
                        className={styles.rowProgressValue}
                        style={{ left: `${x.from}%`, right: `${Math.abs(Number(x.to) - 100)}%` }}
                        onMouseEnter={() => handleTimelineHover(x.tooltip.id)}
                        onMouseLeave={() => handletimelineHoverOut()}>
                        <div className={styles.rowProgressArrow} data-position-to-bottom={timeline.rows.length - idx} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className={styles.timelineTooltips}>
            {timeline.rows &&
              timeline.rows.map((x, idx) => (
                <div className={cns(styles.tooltip, activeTooltip === x.tooltip.id && styles._active)} key={idx}>
                  <div className={styles.tooltipWrapper}>
                    <div className={styles.tooltipImage}>
                      <img src={x.tooltip.image} alt={x.tooltip.title} />
                    </div>
                    <div className={cns('h5-title', styles.tooltipTitle)}>{x.tooltip.title}</div>
                    <div
                      className={styles.tooltipCta}
                      onClick={() => uiContext.setModal('person', { id: x.tooltip.id })}>
                      <SvgIcon name="info" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <ul className={styles.faq}>{faq && faq.map((question, idx) => <FaqQuestion key={idx} {...question} />)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
