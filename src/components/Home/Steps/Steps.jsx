import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './Steps.module.scss';
import step_1 from './assets/step-1.svg';
import step_2 from './assets/step-2.svg';
import step_3 from './assets/step-3.svg';

const StepImage = {
  1: step_1,
  2: step_2,
  3: step_3,
};

const Steps = ({ className, title, list }) => {
  return (
    <div className={cns(st.container, className)}>
      <div className={st.head}>
        <div className="container">
          <div className={st.title}>{title}</div>
        </div>
      </div>

      <div className={st.grid}>
        {list &&
          list.map((step, idx) => (
            <div className={st.step} key={idx}>
              <img className={st.stepImage} src={StepImage[step.id]} />
              <p className={cns('p-small', st.stepText)}>{step.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Steps;
