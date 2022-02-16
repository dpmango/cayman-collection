import React from 'react';
import cns from 'classnames';

import { SvgIcon, CustomChart } from '@ui';
import { PropertyPercent } from '@c/Property';
import st from './PropertyFigures.module.scss';

const PropertyFigures = ({ className, intro, list, property, princiapal, list2 }) => {
  return (
    <section className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.intro}>
            <div className={cns(st.content)} dangerouslySetInnerHTML={{ __html: intro }} />
          </div>
        </div>
      </div>

      <div className={st.section}>
        <div className={st.sectionHead}>
          <div className="container">
            <div className="container-inner">
              <h2 className="h2-title">{property.title}</h2>
            </div>
          </div>
        </div>

        <div className={st.sectionContent}>
          <div className="container">
            <div className="container-inner">
              <div className={st.chart}>
                <CustomChart includeLegend={true} />
              </div>
              <div className={st.percents}>
                {property.percents && property.percents.map((p, idx) => <PropertyPercent {...p} key={idx} />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={st.section}>
        <div className={st.sectionHead}>
          <div className="container">
            <div className="container-inner">
              <h2 className="h2-title">{princiapal.title}</h2>
            </div>
          </div>
        </div>

        <div className={st.sectionContent}>
          <div className="container">
            <div className="container-inner">
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
              <div className={st.chart}>
                <CustomChart />
              </div>
              <div className={st.grid}>
                {list2 &&
                  list2.map((el, idx) => (
                    <div className={st.listCard} key={el.id}>
                      <div className={st.listCardWrapper}>
                        <label className={st.listLabel}>{el.label}</label>
                        <p className={cns(st.listValue, 'h3-title')}>{el.value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFigures;
