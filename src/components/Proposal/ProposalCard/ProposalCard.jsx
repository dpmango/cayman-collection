import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, NumInput } from '@ui';
import { get2xImage, numberWithCommas } from '@helpers';
import styles from './ProposalCard.module.scss';

const ProposalCard = ({
  className,
  id,
  image,
  title,
  description,
  helper,
  price,
  counter,
  onRemoveClick,
  onCounterChange,
}) => {
  return (
    <div className={cns(styles.card, className)} data-id={id}>
      <div className={styles.remove} onClick={() => onRemoveClick(id)}>
        <SvgIcon name="close" />
      </div>
      <div className={styles.image}>
        <img src={image} srcSet={get2xImage(image)} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      {counter ? (
        <NumInput value={counter} onChange={(v) => onCounterChange(id, v)} />
      ) : (
        <div className={styles.description}>{description}</div>
      )}

      <div className={styles.helper}>{helper}</div>

      <div className={cns(styles.price, price <= 0 && styles._negative)}>
        {price <= 0 && '-'}${numberWithCommas(Math.abs(price))}
      </div>
    </div>
  );
};

export default ProposalCard;
