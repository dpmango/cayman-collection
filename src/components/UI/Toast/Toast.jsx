import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { DefaultToast } from 'react-toast-notifications';

import st from './Toast.module.scss';

const Toast = ({ children, className, ...props }) => {
  return (
    <DefaultToast {...props} className={cns(st.toast, className)}>
      {children}
    </DefaultToast>
  );
};

Toast.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Toast;
