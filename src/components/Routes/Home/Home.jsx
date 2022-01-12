import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { useQuery } from '@hooks';
import { UiStoreContext, SessionStoreContext } from '@store';

import { HeroBanner, CtaBanner, TextBanner } from '@c/Banners';
import { HomeIntro, HomeFeatures, HomeInformation } from '@c/Home';
import { content } from './Content.js';

const HomePage = observer(() => {
  const query = useQuery();

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      <HeroBanner theme="main" {...content.banner} />

      <HomeIntro className="mt-5" {...content.intro} />
      <HomeFeatures {...content.features} />
      <TextBanner {...content.textBanner} />
      <HomeInformation {...content.information} />
      <CtaBanner {...content.ctaBanner} />
    </>
  );
});

export default HomePage;
