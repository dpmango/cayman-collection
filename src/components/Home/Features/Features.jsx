import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Features.module.scss';

const Features = ({ className, title, content, links }) => {
  return (
    <div className={cns(styles.intro, className)}>
      <div className="container-inner">
        <div className="h2-title tac">{title}</div>
        <div className={styles.grid}>
          <div className={cns('p-caption', styles.content)} dangerouslySetInnerHTML={{ __html: content }} />

          <ul className={styles.menu}>
            {links &&
              links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
