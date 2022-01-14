import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { useQuery } from '@hooks';
import { UiStoreContext, SessionStoreContext } from '@store';

import { HeroBanner, CtaBanner, TextBanner, ScheduleCallBanner } from '@c/Banners';
import { PaginationBar } from '@c/Pagination';
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

const HomePage = observer(() => {
  const query = useQuery();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <HeroBanner theme="main" {...content.banner} />
      <HomeIntro className="mt-5 mt-md-2" {...content.intro} />
      <TextBanner {...content.textBanner} />
      <HomeFeatures {...content.features} />
      <HomeInformation {...content.information} />
      <CtaBanner {...content.ctaBanner} />

      <HomeSteps {...content.steps} />
      <ScheduleCallBanner />
      <HomeInfoBlock {...content.infoBlock} />
      <HomeStats className="mt-4 mt-md-3" {...content.stats} />
      <CtaBanner {...content.ctaBanner} />

      <HomeInfoBlockAlt className="mt-4" {...content.infoBlockAlt} />
      <ScheduleCallBanner className="mt-3 mt-md-0" />
      <PaginationBar {...content.paginationBar} />
      <HomeTestimonials className="mt-4 mt-md-3" {...content.testimonials} />
      <HomeFaq {...content.faq} />
      <CtaBanner {...content.ctaBanner} />
    </>
  );
});

export default HomePage;
