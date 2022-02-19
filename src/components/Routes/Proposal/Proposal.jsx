import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { Proposal } from '@c/Proposal';
import { ModalRestricted } from '@c/Modal';
import { content } from './Content.js';

const ProposalPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Proposal</title>
      </Helmet>

      <Layout>
        <Proposal {...content} />

        <ModalRestricted />
      </Layout>
    </>
  );
});

export default ProposalPage;
