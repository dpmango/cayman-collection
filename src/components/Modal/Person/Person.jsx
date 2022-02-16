import React, { useContext, useState, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';

import { Modal, SvgIcon, Button } from '@ui';
import { UiStoreContext } from '@store';
import st from './Person.module.scss';
import { content } from './Content.js';

const Person = observer(({ className }) => {
  const { modalParams } = useContext(UiStoreContext);

  const personData = useMemo(() => {
    // TODO - change id 1 by modalParams.id or connect api sending data
    return modalParams ? content[modalParams.id || 1] : null;
  }, [modalParams]);

  return (
    <Modal name="person" className={cns(st.modal, className)}>
      <div className={cns(st.container, className)}>
        {personData && (
          <div className={st.grid}>
            <div className={st.content}>
              <div className={st.contentWrapper}>
                <div className={cns('h0-title', st.name)}>{personData.name}</div>
                <div className={cns('h4-title', st.position)}>{personData.position}</div>

                <div
                  className={cns('p-regular', st.description)}
                  dangerouslySetInnerHTML={{ __html: personData.description }}
                />

                <div className={st.socials}>
                  <div className={st.socialsLabel}>Follow us: </div>
                  <ul className={st.socialsList}>
                    <li>
                      <a href="#" target="_blank">
                        <SvgIcon name="social-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={st.cta}>
                  <Button theme="accent" type="submit" iconRight="arrow-right" disabled>
                    Connect Direct
                  </Button>
                  <Button theme="accent" outline type="submit" iconRight="lock">
                    Unlock
                  </Button>
                </div>
              </div>
            </div>

            <div className={st.image}>
              <img src={personData.image} alt={personData.name} />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
});

export default Person;
