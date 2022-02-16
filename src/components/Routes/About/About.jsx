import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { WhyCayman } from '@c/Static';
import { content } from './Content.js';

const AboutPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Why cayman</title>
      </Helmet>

      <Layout>
        <WhyCayman {...content} />
      </Layout>
    </>
  );
});

export default AboutPage;
