import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Wysiwyg } from '@ui';
import st from './CeoNote.module.scss';

const CeoNote = ({ className, title, content, image, sign }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className="h0-title c-gray lg-visible">{title}</div>

          <div className={st.image}>
            <img src={image} alt="Fleaur sign" />
          </div>

          <div className={st.grid}>
            <div>{/* keep */}</div>

            <div className={st.content}>
              <div className="h0-title c-gray lg-hidden">{title}</div>

              <Wysiwyg className={st.wysiwyg} content={content} />

              <div className={st.sign}>
                <h6 className="h6-title">- Fleur Coleman, CEO</h6>
                <img src={sign} alt="Fleaur sign" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoNote;
