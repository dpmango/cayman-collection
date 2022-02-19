import React, { useContext, useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';

import { Modal, Button } from '@ui';
import { UiStoreContext } from '@store';

import st from './Proposal.module.scss';

const Proposal = observer(({ className }) => {
  const { modalParams } = useContext(UiStoreContext);
  const uiContext = useContext(UiStoreContext);

  const [loading, setLoading] = useState(false);

  return (
    <Modal name="proposal" className={cns(st.modal, className)}>
      <div className={cns(st.container, className)}>
        <div className={st.grid}>
          <div className={st.content}>
            <div className={st.contentWrapper}>
              {modalParams && (
                <>
                  <div className="h2-title w-500">{modalParams.title} has been added to your proposal</div>
                  <div className={cns('p-caption', st.subtitle)}>Would you like to review your proposal?</div>
                </>
              )}
              <div className={st.btnRow}>
                <Button theme="white" onClick={() => history.push('/proposal')}>
                  Go to your proposal
                </Button>
                <Button theme="muted" onClick={() => uiContext.resetModal()}>
                  Continue Browsing
                </Button>
              </div>
            </div>
          </div>

          <div className={st.image}>{modalParams && <img src={modalParams.image} alt="background image" />}</div>
        </div>
      </div>
    </Modal>
  );
});

export default Proposal;
