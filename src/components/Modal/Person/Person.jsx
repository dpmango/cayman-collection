import React, { useContext, useState, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';

import { Modal, SvgIcon, Button } from '@ui';
import { UiStoreContext } from '@store';
import styles from './Person.module.scss';
import { content } from './Content.js';

const Person = observer(({ className }) => {
  const { modalParams } = useContext(UiStoreContext);

  const personData = useMemo(() => {
    // TODO - change id 1 by modalParams.id or connect api sending data
    return modalParams ? content[1] : null;
  }, [modalParams]);

  return (
    <Modal name="person" className={cns(styles.modal, className)}>
      <div className={cns(styles.container, className)}>
        {personData && (
          <div className={styles.grid}>
            <div className={styles.content}>
              <div className={styles.contentWrapper}>
                <div className={cns('h0-title', styles.name)}>{personData.name}</div>
                <div className={cns('h4-title', styles.position)}>{personData.position}</div>

                <div
                  className={cns('p-regular', styles.description)}
                  dangerouslySetInnerHTML={{ __html: personData.description }}
                />

                <div className={styles.socials}>
                  <div className={styles.socialsLabel}>Follow us: </div>
                  <ul className={styles.socialsList}>
                    <li>
                      <a href="#" target="_blank">
                        <SvgIcon name="social-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.cta}>
                  <Button theme="accent" type="submit" iconRight="arrow-right" disabled>
                    Connect Direct
                  </Button>
                  <Button theme="accent" outline type="submit" iconRight="lock">
                    Unlock
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.image}>
              <img src={personData.image} alt={personData.name} />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
});

export default Person;
