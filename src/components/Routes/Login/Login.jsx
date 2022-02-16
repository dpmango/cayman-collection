import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout';
import { AuthLogin } from '@c/Auth';
import { ReactComponent as Logo } from '@assets/logo.svg';
import st from './Login.module.scss';

// import { content } from './Content.js';

const LoginPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Layout variant="auth">
        <div className={st.page}>
          <div className={st.content}>
            <div className={st.logo}>
              <Logo />
            </div>
            <AuthLogin className={st.form} />
          </div>

          <div className={st.background}>
            <img src="/img/loginBackground.jpg" alt="background image" />
          </div>
        </div>
      </Layout>
    </>
  );
});

export default LoginPage;
