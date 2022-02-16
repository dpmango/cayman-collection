import React from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { Button } from '@ui';
import st from './PropertyCard.module.scss';

const PropertyCard = ({ className, id, image, title, price, availability }) => {
  return (
    <Link to={`/property/${id}`} className={cns(st.card, className)}>
      <div className={st.image}>
        <img src={image} alt={title} />
      </div>
      <div className={st.content}>
        <div className={cns('h5-title', st.title)}>{title}</div>
        <div className={st.meta}>
          <div className={st.metaCol}>
            <span className={st.metaLabel}>Starting from:</span>
            <span className={cns('h3-title', st.metaValue)}>{price}</span>
          </div>
          <div className={st.metaCol}>
            <span className={st.metaLabel}>Available:</span>
            <span className={cns('h3-title', st.metaValue)}>{availability}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
