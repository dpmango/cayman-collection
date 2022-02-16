import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './InfoBlockAlt.module.scss';

const InfoBlockAlt = ({ className, list }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.grid}>
            <div className={st.col}>
              <div className={cns(st.block, st._primary)}>
                <div className="h4-title t-captial">{list[0]}</div>
              </div>

              <div className={st.block}>
                <p className="p-caption w-500">{list[1]}</p>
              </div>
            </div>

            <div className={st.col}>
              <div className={st.block}>
                <p className="p-caption w-500">{list[2]}</p>
              </div>
              <div className={cns(st.block, st._primary)}>
                <div className="h4-title t-captial">{list[3]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlockAlt;
