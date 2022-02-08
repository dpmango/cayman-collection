import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout';
import { AuthLogin } from '@c/Auth';
import { ReactComponent as Logo } from '@assets/logo.svg';
import styles from './Login.module.scss';

// import { content } from './Content.js';

const LoginPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Layout variant="auth">
        <div className={styles.page}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <AuthLogin className={styles.form} />
          </div>

          <div className={styles.background}>
            <img src="/img/loginBackground.jpg" alt="background image" />
          </div>
        </div>
      </Layout>
    </>
  );
});

export default LoginPage;
