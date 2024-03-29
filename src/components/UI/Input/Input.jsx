import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';
import InputMask from 'react-input-mask';
import TextareaAutosize from 'react-autosize-textarea';

import { SvgIcon } from '@ui';
import st from './Input.module.scss';

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: st._small,
};

const Input = ({
  className,
  label,
  inputRef,
  variant,
  modifier,
  allowClear,
  value,
  onChange,
  mask,
  error,
  showError,
  ...props
}) => {
  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const onInputChange = useCallback(
    (e) => {
      if (onChange) {
        onChange(e.target.value, e);
      }
    },
    [onChange]
  );

  const onCLearInput = useCallback(() => {
    if (onChange) {
      onChange('');
    }
  }, [onChange]);

  const clearIcon = useMemo(() => {
    if (allowClear && value) {
      return (
        <button type="button" onClick={onCLearInput} className={st.input_clear} title="Очистить">
          <SvgIcon name="close" />
        </button>
      );
    }

    return null;
  }, [value, allowClear]);

  const inputProps = {
    id,
    ref: inputRef,
    className: cns(st.input_input, allowClear && st._withClear, error && st._withError),
    value,
    onChange: onInputChange,
    ...props,
  };

  return (
    <div
      style={props.style}
      className={cns(st.input, variant && VariantClasses[variant], modifier && st[`_${modifier}`], className, 'input')}>
      {label && (
        <label className={st.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={st.input_wrapper}>
        {props.type === 'textarea' ? (
          <TextareaAutosize {...inputProps} />
        ) : mask ? (
          <InputMask
            mask={mask}
            // beforeMaskedValueChange={beforeMaskedValueChange}
            {...inputProps}
          />
        ) : (
          <input {...inputProps} />
        )}

        {clearIcon}

        {error && showError && <div className={st.error}>{error}</div>}
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  allowClear: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  modifier: PropTypes.string,
  variant: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  showError: PropTypes.bool,
  onChange: PropTypes.func,
  mask: PropTypes.string,
  style: PropTypes.object,
};

Input.defaultProps = {
  variant: Variants.DEFAULT,
  showError: true,
};

export default memo(Input);
