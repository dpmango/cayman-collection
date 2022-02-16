import React, { useState, useCallback, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';
import throttle from 'lodash/throttle';

import { UiStoreContext } from '@store';
import { SvgIcon } from '@ui';
import { useEventListener } from '@hooks';

import { FaqQuestion } from '@c/Home/Faq';
import st from './Timeline.module.scss';

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

      // return () => {
      //   timelineRef.current.removeEventListener('scroll', handleScroll, false);
      // };
    }
  }, [handleScroll, timelineRef.current]);

  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('h1-title', 'c-gray', st.title)}>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </div>

          <ul className={st.timelineNav}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <li key={n} className={cns(activeCol === n && st._active)} onClick={() => handleNavClick(n)}>
                <span>0{n}</span>
              </li>
            ))}
          </ul>

          <div className={st.timeline} ref={timelineRef}>
            <div className={st.timelineHead}>
              {timeline.head &&
                timeline.head.map((x, idx) => (
                  <div className={st.headCol} key={idx}>
                    <span className="h6-title">{x}</span>
                  </div>
                ))}
            </div>

            <div className={st.timelineRows}>
              {timeline.rows &&
                timeline.rows.map((x, idx) => (
                  <div className={cns(st.timelineRow, activeTooltip === x.tooltip.id && st._active)} key={idx}>
                    <div className={st.rowLabel}>
                      <span>{x.label}</span>
                    </div>
                    <div className={st.rowProgress}>
                      <div
                        className={st.rowProgressValue}
                        style={{ left: `${x.from}%`, right: `${Math.abs(Number(x.to) - 100)}%` }}
                        onMouseEnter={() => handleTimelineHover(x.tooltip.id)}
                        onMouseLeave={() => handletimelineHoverOut()}>
                        <div className={st.rowProgressArrow} data-position-to-bottom={timeline.rows.length - idx} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className={st.timelineTooltips}>
            {timeline.rows &&
              timeline.rows.map((x, idx) => (
                <div className={cns(st.tooltip, activeTooltip === x.tooltip.id && st._active)} key={idx}>
                  <div className={st.tooltipWrapper}>
                    <div className={st.tooltipImage}>
                      <img src={x.tooltip.image} alt={x.tooltip.title} />
                    </div>
                    <div className={cns('h5-title', st.tooltipTitle)}>{x.tooltip.title}</div>
                    <div className={st.tooltipCta} onClick={() => uiContext.setModal('person', { id: x.tooltip.id })}>
                      <SvgIcon name="info" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <ul className={st.faq}>{faq && faq.map((question, idx) => <FaqQuestion key={idx} {...question} />)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
