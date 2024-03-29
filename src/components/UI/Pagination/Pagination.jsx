import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import { paginationBuilder } from '@helpers';
import st from './Pagination.module.scss';

const Pagination = ({ page, count, onChange, canPreviousPage, canNextPage, ...props }) => {
  const items = useMemo(() => {
    return paginationBuilder(page, count);
  }, [page, count]);

  const handlePrev = () => {
    if (canPreviousPage) {
      onChange(page - 1);
    }
  };

  const handleNext = () => {
    if (canNextPage) {
      onChange(page + 1);
    }
  };

  return (
    <div className={st.pagination}>
      <button disabled={!canPreviousPage} className={st.button} onClick={handlePrev}>
        Предыдущая
        <span>Пред</span>
        {/* <SvgIcon name="caret" /> */}
      </button>

      <div className={st.list}>
        {items.map((item, idx) => (
          <div key={idx} className={cns(st.item, item === page && st._active)}>
            {typeof item === 'number' ? <span onClick={() => onChange(item)}>{item}</span> : <span>...</span>}
          </div>
        ))}
      </div>

      <button disabled={!canNextPage} className={st.button} onClick={handleNext}>
        Следующая
        <span>След</span>
        {/* <SvgIcon name="caret" /> */}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  pageCount: PropTypes.number,
  onChange: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
};

export default memo(Pagination);
