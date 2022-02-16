import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './HeroBanner.module.scss';

const Themes = {
  MAIN: 'main',
  LILAC: 'lilac',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
  [Themes.LILAC]: st._lilac,
};

const HeroBanner = ({ theme, title, description }) => {
  return (
    <div className={cns(st.banner, theme && ThemeClasses[theme])}>
      <div className="container">
        <div className={st.box}>
          <div className="container-inner">
            <div className={st.content}>
              <div className={cns('h0-title', st.title)} dangerouslySetInnerHTML={{ __html: title }} />
              <div className={cns('p-caption', st.description)}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
