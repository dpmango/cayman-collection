import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { useQuery } from '@hooks';

import { HeroBanner, CtaBanner, TextBanner, ScheduleCallBanner } from '@c/Banners';
import {
  HomeIntro,
  HomeFeatures,
  HomeInformation,
  HomeSteps,
  HomeInfoBlock,
  HomeInfoBlockAlt,
  HomeStats,
  HomeTestimonials,
  HomeFaq,
} from '@c/Home';
import { content } from './Content.js';

const ProcessPage = observer(() => {
  const query = useQuery();

  return (
    <>
      <Helmet>
        <title>Plan Page</title>
      </Helmet>

      <HeroBanner theme="main" {...content.banner} />
    </>
  );
});

export default ProcessPage;
