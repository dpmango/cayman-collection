import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import st from './Figures.module.scss';

const Figures = ({ className, title, content, list, ways }) => {
  return (
    <section className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.head}>
            <h2 className="h2-title">{title}</h2>
            <div className="row">
              <div className="col col-6 col-lg-12">
                <div
                  className={cns('p-caption', st.content, st._col1)}
                  dangerouslySetInnerHTML={{ __html: content[0] }}
                />
              </div>
              <div className="col col-6 col-lg-12">
                <div className={cns('p-caption', st.content)} dangerouslySetInnerHTML={{ __html: content[1] }} />
              </div>
            </div>
          </div>

          <div className={st.grid}>
            {list &&
              list.map((el, idx) => (
                <div className={st.listCard} key={el.id}>
                  <div className={st.listCardWrapper}>
                    <label className={st.listLabel}>{el.label}</label>
                    <p className={cns(st.listValue, 'h3-title')}>{el.value}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className={st.ways}>
            <div className={st.waysTitle} dangerouslySetInnerHTML={{ __html: ways.title }} />

            <div className={st.waysGrid}>
              {ways.list &&
                ways.list.map((el, idx) => (
                  <div className={cns(st.wayCard, el.num && st._numed)} key={el.id}>
                    <div
                      className={cns(
                        styles.wayCardIcons,
                        [1, 3].includes(Number(el.num)) && st._equals,
                        [2, 4].includes(Number(el.num)) && st._plus
                      )}>
                      <SvgIcon name="equals" />
                      <SvgIcon name="plus" />
                    </div>

                    <div className={st.wayCardWrapper}>
                      {el.num && (
                        <div className={cns(st.wayCardNum, 'h6-title')}>
                          <span>{el.num}</span>
                        </div>
                      )}

                      <label className={st.listLabel}>{el.label}</label>
                      <p className={cns(st.listValue, 'h3-title')}>{el.value}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className={st.total}>
              <div className={st.wayCardWrapper}>
                <label className={st.listLabel}>{ways.total.label}</label>
                <p className={cns(st.listValue, 'h3-title')}>{ways.total.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Figures;
