import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './PropertyBanner.module.scss';

const PropertyBanner = ({ className, title, subtitle, sign }) => {
  return (
    <div className={cns(styles.banner, className)}>
      <div className={styles.image}>
        <img src="/img/banner/fleur-banner.png" srcSet="/img/banner/fleur-banner@2x.png 2x" alt="banner image" />
      </div>
      <div className="container">
        <div className="container-inner">
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <div className={cns('h4-title', styles.subtitle)}>{subtitle}</div>
              <h1 className={cns('h0-title', styles.title)} dangerouslySetInnerHTML={{ __html: title }} />

              <div className={cns('h6-title', styles.sign)}>{sign}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
