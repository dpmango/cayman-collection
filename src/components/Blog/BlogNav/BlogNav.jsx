/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cns from 'classnames';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import { UiStoreContext } from '@store';
import { SvgIcon, Wysiwyg } from '@ui';
import { get2xImage } from '@helpers';

import st from './BlogNav.module.scss';

const BlogNav = ({ className, nav }) => {
  return (
    <div className={cns(st.nav, className)}>
      {nav && nav[0] && (
        <div className={st.navPrev}>
          <span className={st.navLabel}>previous</span>
          <Link className={cns('h5-title', st.navLink)} to={`/blog/${nav[0].id}`}>
            {nav[0].title}
          </Link>
        </div>
      )}

      {nav && nav[1] && (
        <div className={st.navNext}>
          <span className={st.navLabel}>next</span>
          <Link className={cns('h5-title', st.navLink)} to={`/blog/${nav[1].id}`}>
            {nav[1].title}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogNav;
