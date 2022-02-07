import React from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Button } from '@ui';
import { get2xImage } from '@helpers';

import styles from './BlogCard.module.scss';

const BlogCard = ({ className, id, image, title, date, category }) => {
  return (
    <Link to={`/blog/${id}`} className={cns(styles.card, className)}>
      <div className={styles.image}>
        <img src={image} srcSet={get2xImage(image)} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          {date} / {category}
        </div>
        <div className={cns('h5-title', styles.title)}>{title}</div>
      </div>
    </Link>
  );
};

export default BlogCard;
