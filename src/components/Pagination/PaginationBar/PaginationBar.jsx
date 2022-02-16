import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { SvgIcon } from '@ui';

import st from './PaginationBar.module.scss';

const Themes = {
  MAIN: 'main',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
};

const PaginationBar = ({ theme, prev, next }) => {
  return (
    <div className={cns(st.container, theme && ThemeClasses[theme])}>
      <div className="container">
        <div className="container-inner">
          <div className={st.box}>
            {prev && (
              <Link to={prev.link} className={'lg-hidden'}>
                <SvgIcon name="caret-left" />
                <div className={cns('h4-title', st.title)}>{prev.title}</div>
              </Link>
            )}
            {next && (
              <Link to={next.link} className={st.nextLink}>
                <div className={cns('h4-title', st.title)}>{next.title}</div>
                <SvgIcon name="caret-right" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationBar;
