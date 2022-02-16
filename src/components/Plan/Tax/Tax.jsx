import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import st from './Tax.module.scss';

const Tax = ({ className, title, boxTitle, cols }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <h2 className={cns(st.title)}>{title}</h2>

          <div className={st.box}>
            <div className={cns('h2-title', st.boxTitle)}>{boxTitle}</div>

            <div className={cns(st.grid)}>
              {cols &&
                cols.map((col, idx) => (
                  <div className={st.col} key={idx}>
                    <div className={st.colTitle}>{col.title}</div>
                    {col.description && <div className={st.colDescription}>{col.description}</div>}

                    <ul className={st.colList}>
                      {col.list &&
                        col.list.map((li, i) => (
                          <li key={i}>
                            <SvgIcon name="link-play" />
                            {li}
                          </li>
                        ))}
                    </ul>

                    {col.source && <div className={st.colSource} dangerouslySetInnerHTML={{ __html: col.source }} />}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;
