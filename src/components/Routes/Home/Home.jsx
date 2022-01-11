import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { useQuery } from '@hooks';
import { UiStoreContext, SessionStoreContext } from '@store';

import HeroBanner from '@c/HeroBanner';
import { StaticIntro, StaticFeatures } from '@c/Static';
import { content } from './Content.js';

const HomePage = observer(() => {
  const query = useQuery();

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      <HeroBanner theme="main" title={content.banner.title} description={content.banner.description} />

      <StaticIntro cols={content.intro} />
      <StaticFeatures
        title={content.features.title}
        content={content.features.content}
        links={content.features.links}
      />
    </>
  );
});

export default HomePage;
