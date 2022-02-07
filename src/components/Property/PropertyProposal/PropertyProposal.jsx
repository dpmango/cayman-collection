import React, { useState } from 'react';
import cns from 'classnames';

import { SvgIcon, Button } from '@ui';
import styles from './PropertyProposal.module.scss';

const PropertyProposal = ({ className, list }) => {
  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.grid}>
            {list &&
              list.map((x, idx) => (
                <div className={styles.col} key={idx}>
                  <div className={cns('h4-title', styles.colLabel)}>{x.label}</div>
                  <div className={styles.colValue}>
                    <span className="h2-title">{x.value}</span>
                    <div className={styles.colTooltip} data-tip={x.tooltip}>
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
