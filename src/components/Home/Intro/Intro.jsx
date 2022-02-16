import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './Intro.module.scss';

const Info = ({ className, cols }) => {
  return (
    <div className={cns(st.intro, className)}>
      <div className="container">
        <div className={st.box}>
          <div className="container-inner">
            <div className={st.grid}>
              {cols &&
                cols.length &&
                cols.map((x) => (
                  <div className={st.col} key={x.id}>
                    <div className="h4-title" dangerouslySetInnerHTML={{ __html: x.title }} />
                    <p className={cns('p-small', st.description)}>{x.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
