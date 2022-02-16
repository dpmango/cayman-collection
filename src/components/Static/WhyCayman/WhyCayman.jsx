/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cns from 'classnames';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import { SvgIcon, Wysiwyg } from '@ui';
import { get2xImage } from '@helpers';

import st from './WhyCayman.module.scss';

const WhyCayman = ({ className, cover, content, sidebar }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          {cover && (
            <div className={st.cover}>
              <img src={cover} srcSet={get2xImage(cover)} alt={'cover image'} />
            </div>
          )}

          <div className={st.grid}>
            <div className={st.content}>
              <Wysiwyg content={content} />
            </div>

            <div className={st.sidebar}>
              <Wysiwyg content={sidebar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCayman;
