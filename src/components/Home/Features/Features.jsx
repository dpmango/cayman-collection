import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './Features.module.scss';

const Features = ({ className, title, content, links }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className="h2-title tac">{title}</div>
          <div className={st.grid}>
            <div className={cns('p-caption', st.content)} dangerouslySetInnerHTML={{ __html: content }} />

            <ul className={st.menu}>
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
    </div>
  );
};

export default Features;
