import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './Stats.module.scss';

const Stats = ({ className, title, cols }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('h2-title tac c-gray', st.title)}>{title}</div>

          <div className={st.grid}>
            {cols &&
              cols.length &&
              cols.map((x) => (
                <div className={st.col} key={x.id}>
                  <div className={st.colTitle} dangerouslySetInnerHTML={{ __html: x.title }} />
                  <p className={cns(st.colDescription)}>{x.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
