import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './PropertyBanner.module.scss';

const PropertyBanner = ({ className, title, subtitle, sign }) => {
  return (
    <div className={cns(st.banner, className)}>
      <div className={st.image}>
        <img src="/img/banner/fleur-banner.png" srcSet="/img/banner/fleur-banner@2x.png 2x" alt="banner image" />
      </div>

      <div className="container">
        <div className="container-inner">
          <div className={st.content}>
            <div className={st.contentWrapper}>
              <div className={cns('h4-title', st.subtitle)}>{subtitle}</div>
              <h1 className={cns('h0-title', st.title)} dangerouslySetInnerHTML={{ __html: title }} />

              <div className={cns('h6-title', st.sign)}>{sign}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
