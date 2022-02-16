import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import st from './FaqQuestion.module.scss';

const FaqQuestion = ({ className, title, content, defaultOpened }) => {
  const [opened, setOpened] = useState(defaultOpened);

  return (
    <div className={cns(st.question, opened && st._opened, className)}>
      <div className={cns(st.questionToggle, 'questionToggle')} onClick={() => setOpened(!opened)}>
        {title}
      </div>
      {opened && <div className={cns('p-small', st.questionContent)} dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
};

FaqQuestion.propsTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  defaultOpened: PropTypes.bool,
};

FaqQuestion.defaultProps = {
  defaultOpened: false,
};

export default FaqQuestion;
