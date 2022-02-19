import React, { useContext, useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import cns from 'classnames';

import { Modal, Button } from '@ui';
import { UiStoreContext } from '@store';

import st from './Restricted.module.scss';

const Restricted = observer(({ className }) => {
  const uiContext = useContext(UiStoreContext);

  const [loading, setLoading] = useState(false);

  return (
    <Modal name="restricted" className={cns(st.modal, className)}>
      <div className={cns(st.container, className)}>
        <div className={st.grid}>
          <div className={st.content}>
            <div className={st.contentWrapper}>
              <div className="h2-title w-500">Member access only</div>
              <p className={cns('p-caption', st.subtitle)}>
                Schedule a call with Bec today to unlock the secrets of your financial future.
              </p>

              <Button theme="accent" iconRight="arrow-right" onClick={() => uiContext.setModal('calendar')}>
                Schedule a call
              </Button>
            </div>
          </div>

          <div className={st.image}>
            <img src="/img/modal/memberAccess.jpg" srcSet="/img/modal/memberAccess@2x.jpg 2x" alt="background image" />
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default Restricted;
