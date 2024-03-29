import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { UiStoreContext } from '@store/UiStore';
import { SvgIcon } from '@ui';

import st from './Modal.module.scss';
import styles2 from './Modal.scss';

const sharedStyles = {
  content: {
    position: 'absolute',
    background: 'white',
    borderRadius: '0px',
    padding: 0,
    overflowY: 'auto',
    maxHeight: 'calc(100% - 16px)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  overlay: {
    zIndex: 99,
    // background: 'rgba(0,0,0, 0.5)',
  },
};

const mainStyles = {
  content: {
    width: 'calc(100% - 46px)',
    maxWidth: '1170px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    margin: '0px auto',
  },
};

const narrowStyles = {
  content: {
    width: 'calc(100% - 16px)',
    maxWidth: '496px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    margin: '0px auto',
  },
};

const thanksStyles = {
  content: {
    width: 'calc(100% - 16px)',
    maxWidth: '384px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    margin: '0px auto',
  },
};

Modal.setAppElement('#root');

const Variants = {
  MAIN: 'main',
  NARROW: 'narrow',
  THANKS: 'thanks',
};

const VariantStyles = {
  [Variants.MAIN]: mainStyles,
  [Variants.NARROW]: narrowStyles,
  [Variants.THANKS]: thanksStyles,
};

const VariantClasses = {
  [Variants.MAIN]: '',
  [Variants.NARROW]: st._narrow,
  [Variants.THANKS]: st._thanks,
};

const Modifiers = {
  DEFAULT: 'default',
  FULL: 'fullheight',
};

const ModifierClasses = {
  [Modifiers.DEFAULT]: null,
  [Modifiers.FULL]: st._full,
};

const ModalComponent = observer(({ className, variant, modifier, name, children }) => {
  const uiContext = useContext(UiStoreContext);

  const afterOpenModal = () => {};

  const closeModal = () => {
    uiContext.resetModal();
  };

  let CSSinJSstyles = sharedStyles;
  if (variant && VariantStyles[variant]) {
    CSSinJSstyles = {
      content: { ...CSSinJSstyles.content, ...VariantStyles[variant].content },
      overlay: { ...CSSinJSstyles.overlay, ...VariantStyles[variant].overlay },
    };
  }

  useEffect(() => {
    if (!uiContext.activeModal) {
      document.body.classList.remove('ReactModal__Body--open');
    }
  }, [uiContext.activeModal]);

  return (
    <Modal
      className={`ReactModal__Content--${variant}`}
      isOpen={uiContext.activeModal === name}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      style={CSSinJSstyles}
      // preventScroll={true}
      contentLabel="Modal">
      <div
        className={cns(
          st.container,
          variant && VariantClasses[variant],
          modifier && ModifierClasses[modifier],
          className
        )}>
        <div className={cns('close', st.close)} onClick={closeModal}>
          <SvgIcon name="close" />
        </div>
        <div className={cns(st.content, modifier && ModifierClasses[modifier])}>{children}</div>
      </div>
    </Modal>
  );
});

ModalComponent.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  modifier: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

ModalComponent.defaultProps = {
  variant: Variants.MAIN,
  modifier: Modifiers.DEFAULT,
};

export default ModalComponent;
