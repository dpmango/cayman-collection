import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon, NumInput } from '@ui';
import { get2xImage, numberWithCommas } from '@helpers';
import st from './ProposalCard.module.scss';

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
    <div className={cns(st.card, className)} data-id={id}>
      <div className={st.remove} onClick={() => onRemoveClick(id)}>
        <SvgIcon name="close" />
      </div>
      <div className={st.image}>
        <img src={image} srcSet={get2xImage(image)} alt={title} />
      </div>

      <div className={st.mobContent}>
        <div className={st.title}>{title}</div>
        {!counter && <div className={st.description}>{description}</div>}
        <div className={st.helper}>{helper}</div>
      </div>

      <div className={st.title}>{title}</div>

      {counter ? (
        <div className={st.counter}>
          <div className={st.mobLabel}>Quantity</div>
          <NumInput value={counter} onChange={(v) => onCounterChange(id, v)} />
        </div>
      ) : (
        <div className={st.description}>{description}</div>
      )}

      <div className={st.helper}>{helper}</div>

      <div className={cns(st.price, price <= 0 && st._negative)}>
        <div className={st.mobLabel}>Price</div>
        {price <= 0 && '-'}${numberWithCommas(Math.abs(price))}
      </div>
    </div>
  );
};

export default ProposalCard;
