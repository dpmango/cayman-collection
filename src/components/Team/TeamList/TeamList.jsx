import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';

import { TeamCard } from '@c/Team';
import st from './TeamList.module.scss';

const TeamList = ({ className, title, list }) => {
  // const [category, setCategory] = useState(0);

  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className="h1-title">{title}</div>

          <div className={st.grid}>
            {list &&
              list.map((t, idx) => (
                <div className={st.col} key={t.id || idx}>
                  <TeamCard className={st.teamCard} key={t.id} {...t} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
