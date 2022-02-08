import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { Proposal } from '@c/Proposal';
import { content } from './Content.js';

const ProposalPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Proposal</title>
      </Helmet>

      <Layout>
        <Proposal {...content} />
      </Layout>
    </>
  );
});

export default ProposalPage;
