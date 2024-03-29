/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cns from 'classnames';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import { UiStoreContext } from '@store';
import { SvgIcon, Wysiwyg } from '@ui';
import { get2xImage } from '@helpers';

import { BlogNav } from '@c/Blog';
import st from './BlogArticle.module.scss';

const BlogArticle = ({ className, cover, title, content, date, nav, category, categories, recents }) => {
  const location = useLocation();
  const uiContext = useContext(UiStoreContext);

  const shareUrl = useMemo(() => {
    const baseUrl = 'https://cayman-collection.surge.sh';
    return `${baseUrl}${location.pathname}`;
  }, []);

  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          {cover && (
            <div className={st.cover}>
              <img src={cover} srcSet={get2xImage(cover)} alt={title} />
            </div>
          )}

          <div className={st.grid}>
            <div className={st.content}>
              <h1 className={cns('h2-title', st.title)}>{title}</h1>
              <div className={st.meta}>
                {date} / {category}
              </div>

              <Wysiwyg className={st.wysiwyg} content={content} />

              <div className={st.share}>
                <div className={st.shareLabel}>Share:</div>
                <ul className={st.shareList}>
                  <li>
                    <FacebookShareButton url={shareUrl} quote={'quote'}>
                      <SvgIcon name="social-facebook" />
                    </FacebookShareButton>
                  </li>
                  <li>
                    <TwitterShareButton url={shareUrl} title={title} hashtags={['cayman', 'tag']} related={[]}>
                      <SvgIcon name="social-twitter" />
                    </TwitterShareButton>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                      <SvgIcon name="social-instagram" />
                    </a>
                  </li>
                </ul>
              </div>

              <BlogNav className={st.nav} nav={nav} />
            </div>

            {/* sidebar */}
            <div className={st.sidebar}>
              <div className={st.about}>
                <div className="h2-title">About me</div>

                <div className={st.aboutImage} onClick={() => uiContext.setModal('person', { id: 2 })}>
                  <img src="/img/blog/blogAbout.jpg" srcSet="/img/blog/blogAbout@2x.jpg 2x" alt="" />
                </div>

                <div className={st.aboutDescription}>
                  They're gathered man divide you you're first appear living i they're deep without us fourth dominion,
                  cattle fly.
                </div>
              </div>

              <div className={st.categories}>
                <div className={cns('h5-title', st.categoriesLabel)}>Categories</div>
                <ul className={st.categoriesList}>
                  {categories &&
                    categories.map((cat, idx) => (
                      <li key={idx}>
                        <Link to={cat.link}>
                          {cat.label}&nbsp;&nbsp;&nbsp;({cat.count})
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className={st.recents}>
                <div className={cns('h5-title', st.categoriesLabel)}>Recent Posts</div>

                <div className={st.recentsList}>
                  {recents &&
                    recents.map((x) => (
                      <Link to={`/blog/${x.id}`} className={st.recentCard} key={x.id}>
                        <div className={st.recentCardImage}>
                          <img src={x.image} srcSet={get2xImage(x.image)} alt={x.title} />
                        </div>
                        <div className={st.recentCardContent}>
                          <div className={st.recentCardMeta}>
                            {x.date} / {x.category}
                          </div>
                          <div className={st.recentCardTitle}>{x.title}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
