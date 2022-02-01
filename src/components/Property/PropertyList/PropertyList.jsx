import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Button } from '@ui';

import { PropertyCard } from '@c/Property';
import styles from './PropertyList.module.scss';

const PropertyList = ({ className, title, list }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns(styles.head)}>
            <h2 className={cns('h1-title')}>{title}</h2>
            <Button iconLeft="filter" theme="accent">
              Filter Options
            </Button>
          </div>
          <div className={styles.grid}>
            {list && list.map((property) => <PropertyCard key={property.id} {...property} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
