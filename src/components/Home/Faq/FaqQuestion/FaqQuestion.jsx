import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './FaqQuestion.module.scss';

const FaqQuestion = ({ className, title, content, defaultOpened }) => {
  const [opened, setOpened] = useState(defaultOpened);

  return (
    <div className={cns(styles.question, opened && styles._opened, className)}>
      <div className={styles.questionToggle} onClick={() => setOpened(!opened)}>
        {title}
      </div>
      {opened && (
        <div className={cns('p-small', styles.questionContent)} dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

FaqQuestion.PropTypes = {
  defaultOpened: false,
};

export default FaqQuestion;
