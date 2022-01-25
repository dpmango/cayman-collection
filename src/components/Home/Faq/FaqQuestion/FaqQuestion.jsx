import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './FaqQuestion.module.scss';

const FaqQuestion = ({ className, title, content, defaultOpened }) => {
  const [opened, setOpened] = useState(defaultOpened);

  return (
    <div className={cns(styles.question, opened && styles._opened, className)}>
      <div className={cns(styles.questionToggle, 'questionToggle')} onClick={() => setOpened(!opened)}>
        {title}
      </div>
      {opened && (
        <div className={cns('p-small', styles.questionContent)} dangerouslySetInnerHTML={{ __html: content }} />
      )}
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
