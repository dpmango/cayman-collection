import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';

import { SvgIcon } from '@ui';
import st from './Checkbox.module.scss';

const Checkbox = ({ className, isChecked, error, onChange, children, ...props }) => {
  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const handleChange = useCallback(
    (e) => {
      if (onChange) {
        onChange();
      }
    },
    [onChange]
  );

  return (
    <div className={cns(st.checkbox, className, error && st._withError, 'checkbox')}>
      <input id={id} type="checkbox" className={cns(st.checkbox_input)} value={isChecked} {...props} />

      <label htmlFor={id} className={st.checkbox_wrapper} onClick={handleChange}>
        <div className={cns(st.checkbox_box, isChecked && st._isChecked)}>
          <SvgIcon name="checkmark" className={st.checkbox_icon} />
        </div>

        <div className={st.checkbox_label}>{children}</div>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default memo(Checkbox);
