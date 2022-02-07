/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cns from 'classnames';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import { SvgIcon } from '@ui';
import { get2xImage } from '@helpers';

import styles from './BlogArticle.module.scss';

const BlogArticle = ({ className, cover, title, content, date, nav, category, categories, recents }) => {
  const location = useLocation();

  const shareUrl = useMemo(() => {
    const baseUrl = 'https://cayman-collection.surge.sh';
    return `${baseUrl}${location.pathname}`;
  }, []);

  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          {cover && (
            <div className={styles.cover}>
              <img src={cover} srcSet={get2xImage(cover)} alt={title} />
            </div>
          )}

          <div className={styles.grid}>
            <div className={styles.content}>
              <h1 className={cns('h2-title', styles.title)}>{title}</h1>
              <div className={styles.meta}>
                {date} / {category}
              </div>
              <div className={styles.wysiwyg} dangerouslySetInnerHTML={{ __html: content }} />

              <div className={styles.share}>
                <div className={styles.shareLabel}>Share:</div>
                <ul className={styles.shareList}>
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

              <div className={styles.nav}>
                <div className={styles.navPrev}>
                  <span className={styles.navLabel}>previous</span>
                  <Link className={cns('h5-title', styles.navLink)} to={`/blog/${nav[0].id}`}>
                    {nav[0].title}
                  </Link>
                </div>
                <div className={styles.navNext}>
                  <span className={styles.navLabel}>next</span>
                  <Link className={cns('h5-title', styles.navLink)} to={`/blog/${nav[1].id}`}>
                    {nav[1].title}
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.about}>
                <div className="h2-title">About me</div>
                <div className={styles.aboutImage}>
                  <img src="/img/blog/blogAbout.jpg" srcSet="/img/blog/blogAbout@2x.jpg 2x" alt="" />
                </div>
                <div className={styles.aboutDescription}>
                  They're gathered man divide you you're first appear living i they're deep without us fourth dominion,
                  cattle fly.
                </div>
              </div>

              <div className={styles.categories}>
                <div className={cns('h5-title', styles.categoriesLabel)}>Categories</div>
                <ul className={styles.categoriesList}>
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

              <div className={styles.recents}>
                <div className={cns('h5-title', styles.categoriesLabel)}>Recent Posts</div>

                <div className={styles.recentsList}>
                  {recents &&
                    recents.map((x) => (
                      <Link to={`/blog/${x.id}`} className={styles.recentCard} key={x.id}>
                        <div className={styles.recentCardImage}>
                          <img src={x.image} srcSet={get2xImage(x.image)} alt={x.title} />
                        </div>
                        <div className={styles.recentCardContent}>
                          <div className={styles.recentCardMeta}>
                            {x.date} / {x.category}
                          </div>
                          <div className={styles.recentCardTitle}>{x.title}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className={cns(styles.categories)}>
            {categories &&
              categories.map((x) => (
                <a
                  href="#"
                  className={cns(x.id === category && styles._active)}
                  key={x.id}
                  onClick={() => setCategory(x.id)}>
                  {x.label}
                </a>
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
