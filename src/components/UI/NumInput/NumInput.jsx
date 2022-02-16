import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';
import debounce from 'lodash/debounce';
import { useFirstRender } from '@hooks';

import st from './NumInput.module.scss';

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: st._small,
};

const NumInput = ({ className, label, inputRef, variant, value, onChange, onEnterKey, error, showError, ...props }) => {
  const innerRef = inputRef || useRef(null);

  const firstRender = useFirstRender();

  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const [innerValue, setValue] = useState(value);

  const onInputChange = useCallback((e) => {
    const val = e.target.value;
    e.preventDefault();

    if (val.split('.').length > 2) {
      return;
    }

    setValue(val);
  }, []);

  const updateFunc = useCallback(
    debounce((innerValue) => {
      onChange(parseFloat(innerValue));
      // const { meta } = catalogContext.searchCatalog(textNormalized, null);
    }, 0),
    [onChange]
  );

  useEffect(() => {
    if (!firstRender) {
      if (innerValue && parseFloat(innerValue) > 0) {
        updateFunc(innerValue);
      }
    }
  }, [innerValue]);

  const onBlur = useCallback(
    (e) => {
      e.preventDefault();

      const split = innerValue && innerValue.toString().split('.');

      if (!innerValue || innerValue < 1) {
        setValue(1);
        onChange(1);
      } else if (split && split.length > 1) {
        const limited = split[1].slice(0, 2);

        setValue(parseFloat(`${split[0]}.${limited}`));
        onChange(parseFloat(`${split[0]}.${limited}`));
      } else {
        onChange(innerValue);
      }
    },
    [innerValue]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        onBlur(e);
        innerRef && innerRef.current.blur();

        onEnterKey && onEnterKey();
        return;
      }

      // if (e.keyCode === 190) {
      //   // event.preventDefault();
      // }

      const isAllowedKey = [8, 190].includes(e.keyCode); // backspace, enter, space
      const isNumber = !Number.isNaN(parseFloat(e.key));

      // if (!isNumber && !isAllowedKey) {
      //   event.preventDefault();
      // }
    },
    [innerValue, innerRef, onEnterKey]
  );

  useEffect(() => {
    setValue(value ? value : 1);
  }, [value]);

  const inputProps = {
    id,
    ref: innerRef,
    className: cns(styles.input_input, error && st._withError),
    value: innerValue,
    autoComplete: `${false}`,
    onChange: onInputChange,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    ...props,
  };

  return (
    <div style={props.style} className={cns(st.input, variant && VariantClasses[variant], className, 'numinput')}>
      {label && (
        <label className={st.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={st.input_wrapper}>
        <input type="number" pattern="[0-9]+([\.,][0-9]+)?" step="1" min="1" max="99" {...inputProps} />

        {/* <div className={cns(st.arrow, st._up)} onClick={handleUpClick}>
          <SvgIcon name="up"></SvgIcon>
        </div>
        <div className={cns(st.arrow, st._down)} onClick={handleDownClick}>
          <SvgIcon name="down"></SvgIcon>
        </div> */}
        {error && showError && <div className={st.error}>{error}</div>}
      </div>
    </div>
  );
};

NumInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  showError: PropTypes.bool,
  onChange: PropTypes.func,
  onEnterKey: PropTypes.func,
};

NumInput.defaultProps = {
  variant: Variants.DEFAULT,
  showError: true,
};

export default memo(NumInput);
