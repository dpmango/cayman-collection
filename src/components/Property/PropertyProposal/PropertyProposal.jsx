import React, { useState } from 'react';
import cns from 'classnames';

import { SvgIcon, Button } from '@ui';
import st from './PropertyProposal.module.scss';

const PropertyProposal = ({ className, list }) => {
  return (
    <section className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.grid}>
            {list &&
              list.map((x, idx) => (
                <div className={st.col} key={idx}>
                  <div className={cns('h4-title', st.colLabel)}>{x.label}</div>
                  <div className={st.colValue}>
                    <span className="h2-title">{x.value}</span>
                    <div className={st.colTooltip} data-tip={x.tooltip}>
                      <SvgIcon name="info-fill" />
                    </div>
                  </div>
                </div>
              ))}
            <p className="p-caption">*When retained for 20 years</p>
            <Button theme="dark" variant="big" block>
              Add to proposal +
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyProposal;
