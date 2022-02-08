import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { PropertyHeroBanner, QuoteBanner } from '@c/Banners';
import { PropertyList } from '@c/Property';
import { HomeFaq } from '@c/Home';
import { ModalPerson } from '@c/Modal';
import { content } from './Content.js';

const PropertyPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>The Property</title>
      </Helmet>

      <Layout>
        <PropertyHeroBanner {...content.hero} />
        <PropertyList {...content.properties} />
        <QuoteBanner {...content.banner} />
        <HomeFaq theme="peach" {...content.faq} />

        <ModalPerson />
      </Layout>
    </>
  );
});

export default PropertyPage;
