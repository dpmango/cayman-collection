import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './Benefits.module.scss';

const Benefits = ({ className, subtitle, title, list }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          {subtitle && <div className={cns('h4-title c-gray mb-1')}>{subtitle}</div>}

          <div className="h0-title c-gray">{title}</div>
          <div className={st.grid}>
            {list &&
              list.map((col, idx) => (
                <div key={idx}>
                  <h2 className={cns('h4-title c-gray', st.colLabel)} dangerouslySetInnerHTML={{ __html: col.label }} />
                  <div className={cns('p-regular', st.colDesc)} dangerouslySetInnerHTML={{ __html: col.description }} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
