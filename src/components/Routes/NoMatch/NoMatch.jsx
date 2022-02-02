import React from 'react';
import { Helmet } from 'react-helmet';
import { observer } from 'mobx-react-lite';
import styles from './NoMatch.module.scss';

const NoMatchPage = observer(() => {
  return (
    <>
      <div className="container">
        <div className={styles.page404}>
          <div className={styles.page404_Title}>404</div>
        </div>
      </div>

      <Helmet>
        <title>Page not found</title>
      </Helmet>
    </>
  );
});

export default NoMatchPage;
