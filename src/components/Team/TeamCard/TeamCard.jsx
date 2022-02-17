import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { UiStoreContext } from '@store';
import { Button } from '@ui';
import { get2xImage } from '@helpers';

import st from './TeamCard.module.scss';

const TeamCard = ({ className, id, image, title, position }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <div className={cns(st.card, className)} onClick={() => uiContext.setModal('person', { id: 2 })}>
      <div className={st.image}>{image && <img src={image} srcSet={get2xImage(image)} alt={title} />}</div>
      <div className={st.content}>
        <div className={cns('h4-title', st.title)}>{title}</div>
        <div className={st.position}>{position}</div>
      </div>
    </div>
  );
};

export default TeamCard;
