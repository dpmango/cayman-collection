import React from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Button } from '@ui';
import { get2xImage } from '@helpers';

import st from './BlogCard.module.scss';

const BlogCard = ({ className, id, image, title, date, category }) => {
  return (
    <Link to={`/blog/${id}`} className={cns(st.card, className)}>
      <div className={st.image}>
        <img src={image} srcSet={get2xImage(image)} alt={title} />
      </div>
      <div className={st.content}>
        <div className={st.meta}>
          {date} / {category}
        </div>
        <div className={cns('h5-title', st.title)}>{title}</div>
      </div>
    </Link>
  );
};

export default BlogCard;
