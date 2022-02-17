import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { HeroBanner, ScheduleCallBanner } from '@c/Banners';
import { HomeStats } from '@c/Home';
import { TeamList } from '@c/Team';
import { ModalPerson } from '@c/Modal';
import { content } from './Content.js';

const TeamPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Team</title>
      </Helmet>

      <Layout>
        <HeroBanner theme="lilac" {...content.banner} />
        <ScheduleCallBanner />
        <TeamList {...content.team} />
        <ScheduleCallBanner />
        <HomeStats className="mt-4 mt-md-3" {...content.stats} />
      </Layout>

      <ModalPerson />
    </>
  );
});

export default TeamPage;
