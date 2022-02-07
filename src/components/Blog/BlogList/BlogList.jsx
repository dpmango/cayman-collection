import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';

import { BlogCard } from '@c/Blog';
import styles from './BlogList.module.scss';

const BlogList = ({ className, list, categories }) => {
  const [category, setCategory] = useState(0);

  const blogCols = useMemo(() => {
    let cols = [[], [], []];
    let colCount = 3;
    list.forEach((x, idx) => {
      let tIdx = idx % colCount;

      cols[tIdx].push(x);
    });

    return cols;
  }, []);

  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns(styles.categories)}>
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
          </div>
          <div className={styles.grid}>
            {blogCols &&
              blogCols.map((col, idx) => (
                <div className={styles.col} key={idx}>
                  {col && col.map((blog) => <BlogCard className={styles.blogCard} key={blog.id} {...blog} />)}
                </div>
              ))}
          </div>
          <div className={styles.more}>
            <button>
              <SvgIcon name="arrow-down" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
