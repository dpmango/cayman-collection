import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import styles from './Faq.module.scss';
import FaqQuestion from './FaqQuestion';

const Themes = {
  MAIN: 'main',
  PEACH: 'peach',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
  [Themes.PEACH]: styles._peach,
};

const Faq = ({ className, theme, title, list }) => {
  return (
    <div className={cns(styles.container, theme && ThemeClasses[theme], className)}>
      <div className="container">
        <div className="container-inner">
          <div className="h2-title c-primary-dark">{title}</div>

          <ul className={styles.list}>
            {list && list.map((question, idx) => <FaqQuestion key={idx} defaultOpened={idx === 0} {...question} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
