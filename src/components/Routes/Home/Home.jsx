import React from 'react';
import { useQuery } from '@hooks';
import { Helmet } from 'react-helmet';
import { content } from './Content.js';
import { observer } from 'mobx-react-lite';
import { PaginationBar } from '@c/Pagination';
import { CtaBanner, HeroBanner, ScheduleCallBanner, TextBanner } from '@c/Banners';
import {
  HomeFaq,
  HomeFeatures,
  HomeInfoBlock,
  HomeInfoBlockAlt,
  HomeInformation,
  HomeIntro,
  HomeStats,
  HomeSteps,
  HomeTestimonials,
} from '@c/Home';
import Layout from '@c/Layout/';

const HomePage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Cayman Collection</title>
      </Helmet>
      <Layout>
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
      </Layout>
    </>
  );
});

export default HomePage;
