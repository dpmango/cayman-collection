import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './InfoBlock.module.scss';

const InfoBlock = ({ className, list }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.grid}>
            <div className={st.col}>
              <div className={st.block}>
                <p className="p-caption">{list[0]}</p>
              </div>
              <div className={cns(st.block, st.blockImage2)}></div>
            </div>

            <div className={st.col}>
              <div className={cns(st.block, st.blockImage1)}></div>
              <div className={st.block}>
                <p className="p-caption">{list[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
