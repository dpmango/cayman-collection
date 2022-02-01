import React from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Button } from '@ui';
import styles from './PropertyCard.module.scss';

const PropertyCard = ({ className, id, image, title, price, availability }) => {
  return (
    <Link to={`/property/${id}`} className={cns(styles.card, className)}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={cns('h5-title', styles.title)}>{title}</div>
        <div className={styles.meta}>
          <div className={styles.metaCol}>
            <span className={styles.metaLabel}>Starting from:</span>
            <span className={cns('h3-title', styles.metaValue)}>{price}</span>
          </div>
          <div className={styles.metaCol}>
            <span className={styles.metaLabel}>Available:</span>
            <span className={cns('h3-title', styles.metaValue)}>{availability}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
