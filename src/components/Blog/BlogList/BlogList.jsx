import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import { useWindowSize } from '@hooks';

import { BlogCard } from '@c/Blog';
import st from './BlogList.module.scss';

const BlogList = ({ className, list, categories }) => {
  const { width } = useWindowSize();

  const [category, setCategory] = useState(0);

  const blogCols = useMemo(() => {
    let cols = [[], [], []];
    let colCount = 3;

    if (width < 1200) {
      cols = [[], []];
      colCount = 2;
    } else if (width < 575) {
      cols = [[]];
      colCount = 1;
    }

    list.forEach((x, idx) => {
      let tIdx = idx % colCount;

      cols[tIdx].push(x);
    });

    return cols;
  }, [width]);

  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns(st.categories)}>
            {categories &&
              categories.map((x) => (
                <a
                  href="#"
                  className={cns(x.id === category && st._active)}
                  key={x.id}
                  onClick={() => setCategory(x.id)}>
                  {x.label}
                </a>
              ))}
          </div>
          <div className={st.grid}>
            {blogCols &&
              blogCols.map((col, idx) => (
                <div className={st.col} key={idx}>
                  {col && col.map((blog) => <BlogCard className={st.blogCard} key={blog.id} {...blog} />)}
                </div>
              ))}
          </div>
          <div className={st.more}>
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
